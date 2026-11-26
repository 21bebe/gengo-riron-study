(function () {
  const ALL_QUESTIONS = [
    ...(window.QUESTIONS_R5 || []),
    ...(window.QUESTIONS_R6 || []),
    ...(window.QUESTIONS_R7 || [])
  ];

  const STORAGE_KEY = "lang_theory_exam_progress_v1";
  const TOPICS = [
    "再帰的定義・証明",
    "正規表現の判定・構成",
    "DFA構成",
    "状態最小化",
    "NFA→DFA・ε-NFA",
    "FA→正規表現（連立方程式）",
    "導出木・最左導出"
  ];

  let state = {
    viewMode: "focus",      // "focus" | "list"
    groupBy: "year",        // "year" | "topic" | "status"
    filterValue: "R5",      // "ALL" | "R5" | "R6" | "R7" | topic | status
    activeId: ALL_QUESTIONS[0] ? ALL_QUESTIONS[0].id : null,
    cheatOpen: false,
    cheatTab: "trend",
    progress: loadProgress(), // { [qid]: "ok" | "warn" | "ng" }
    revealed: {}              // { [qid]: { hint: bool, ans: bool, exp: bool } }
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch { /* ignore */ }
  }

  function getFilteredQuestions() {
    if (state.filterValue === "ALL") return ALL_QUESTIONS;
    if (state.groupBy === "year") {
      return ALL_QUESTIONS.filter(q => q.year === state.filterValue);
    }
    if (state.groupBy === "topic") {
      return ALL_QUESTIONS.filter(q => q.topic === state.filterValue);
    }
    if (state.groupBy === "status") {
      return ALL_QUESTIONS.filter(q => {
        const st = state.progress[q.id] || "none";
        if (state.filterValue === "review") return st === "warn" || st === "ng";
        return st === state.filterValue;
      });
    }
    return ALL_QUESTIONS;
  }

  function ensureRevealObj(qid) {
    if (!state.revealed[qid]) {
      state.revealed[qid] = { hint: false, ans: false, exp: false };
    }
    return state.revealed[qid];
  }

  function renderMath(el) {
    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  function renderDiagramsHtml(list) {
    if (!list || !list.length) return "";
    return list.map(d => {
      const svg = d.type === "tree"
        ? window.SVGDiagrams.renderDerivationTree(d.spec)
        : window.SVGDiagrams.renderAutomaton(d.spec);
      return `<div class="diagram-wrap">${svg}${d.caption ? `<div class="diagram-caption">${d.caption}</div>` : ""}</div>`;
    }).join("");
  }

  function updateProgressSummary() {
    let ok = 0, warn = 0, ng = 0;
    ALL_QUESTIONS.forEach(q => {
      const st = state.progress[q.id];
      if (st === "ok") ok++;
      else if (st === "warn") warn++;
      else if (st === "ng") ng++;
    });
    document.getElementById("cnt-ok").textContent = ok;
    document.getElementById("cnt-warn").textContent = warn;
    document.getElementById("cnt-ng").textContent = ng;
    document.getElementById("cnt-all").textContent = ALL_QUESTIONS.length;
  }

  function renderFilterChips() {
    const container = document.getElementById("filter-chips");
    let items = [];
    if (state.groupBy === "year") {
      items = [
        { val: "R5", label: "R5（10問）" },
        { val: "R6", label: "R6（11問）" },
        { val: "R7", label: "R7（12問）" },
        { val: "ALL", label: "全年度（33問）" }
      ];
    } else if (state.groupBy === "topic") {
      items = [{ val: "ALL", label: "全分野" }].concat(
        TOPICS.map(t => ({
          val: t,
          label: `${t} (${ALL_QUESTIONS.filter(q => q.topic === t).length})`
        }))
      );
    } else {
      items = [
        { val: "review", label: "要復習（△・×）" },
        { val: "ng", label: "× 苦手のみ" },
        { val: "warn", label: "△ 微妙のみ" },
        { val: "none", label: "未回答" },
        { val: "ok", label: "◎ 完璧" }
      ];
    }

    if (!items.some(i => i.val === state.filterValue)) {
      state.filterValue = items[0].val;
    }

    container.innerHTML = items.map(i =>
      `<button class="chip ${state.filterValue === i.val ? "active" : ""}" data-filter-val="${i.val}">${i.label}</button>`
    ).join("");
  }

  function renderNavList() {
    const list = getFilteredQuestions();
    const nav = document.getElementById("question-nav");
    const label = document.getElementById("nav-list-label");
    label.textContent = `表示中：${list.length} 問`;

    if (list.length === 0) {
      nav.innerHTML = `<div style="padding:18px 12px;font-size:12.5px;color:var(--ink-light);text-align:center;">該当する問題がありません</div>`;
      return;
    }

    if (!list.some(q => q.id === state.activeId)) {
      state.activeId = list[0].id;
    }

    nav.innerHTML = list.map(q => {
      const st = state.progress[q.id] || "none";
      const isActive = q.id === state.activeId && state.viewMode === "focus";
      return `
        <button class="nav-item ${isActive ? "active" : ""}" data-qid="${q.id}">
          <span class="dot dot-${st} nav-item-dot"></span>
          <div class="nav-item-body">
            <div class="nav-item-top">
              <span class="nav-item-id">${q.year} 問${q.num}</span>
              <span class="nav-item-pts">${q.points}点</span>
            </div>
            <div class="nav-item-title">${q.title}</div>
          </div>
        </button>
      `;
    }).join("");
  }

  function buildQuestionCardHtml(q, showShortcuts) {
    const st = state.progress[q.id] || "";
    const rev = ensureRevealObj(q.id);
    const kbdH = showShortcuts ? "<kbd>H</kbd>" : "";
    const kbdA = showShortcuts ? "<kbd>A</kbd>" : "";
    const kbdE = showShortcuts ? "<kbd>E</kbd>" : "";

    return `
      <article class="q-card" id="card-${q.id}" data-qid="${q.id}">
        <div class="q-header">
          <div class="q-meta">
            <span class="badge-year">${q.year}年度 問${q.num}</span>
            <span class="badge-pts">[${q.points}点]</span>
            <span class="badge-topic">${q.topic}</span>
            <button class="badge-ref" data-open-cheat="${q.lectureRef}" title="対応する授業資料をチートシートで開く">
              📖 資料${q.lectureRef}を参照
            </button>
          </div>
          <div class="status-group" role="group" aria-label="理解度チェック">
            <button class="status-btn ${st === "ok" ? "active-ok" : ""}" data-set-status="${q.id}:ok" title="完璧に解けた (1)">◎ 完璧</button>
            <button class="status-btn ${st === "warn" ? "active-warn" : ""}" data-set-status="${q.id}:warn" title="微妙・要復習 (2)">△ 復習</button>
            <button class="status-btn ${st === "ng" ? "active-ng" : ""}" data-set-status="${q.id}:ng" title="解けなかった (3)">× 苦手</button>
          </div>
        </div>

        <div class="q-body">
          <h3 class="q-title">${q.title}</h3>
          <div class="q-prompt">
            ${q.promptHtml}
            ${renderDiagramsHtml(q.promptDiagrams)}
          </div>
        </div>

        <div class="reveal-bar">
          <button class="reveal-btn btn-hint ${rev.hint ? "open" : ""}" data-toggle-rev="${q.id}:hint">
            💡 ヒント ${kbdH}
          </button>
          <button class="reveal-btn btn-ans ${rev.ans ? "open" : ""}" data-toggle-rev="${q.id}:ans">
            ✅ 解答を見る ${kbdA}
          </button>
          <button class="reveal-btn btn-exp ${rev.exp ? "open" : ""}" data-toggle-rev="${q.id}:exp">
            📝 詳しい解説 ${kbdE}
          </button>
        </div>

        <div class="reveal-panel panel-hint ${rev.hint ? "open" : ""}">
          <div class="panel-heading">💡 ヒント・方針</div>
          ${q.hintHtml}
        </div>

        <div class="reveal-panel panel-ans ${rev.ans ? "open" : ""}">
          <div class="panel-heading">✅ 解答</div>
          ${q.answerHtml}
          ${renderDiagramsHtml(q.answerDiagrams)}
        </div>

        <div class="reveal-panel panel-exp ${rev.exp ? "open" : ""}">
          <div class="panel-heading">📝 詳しい解説</div>
          ${q.explanationHtml}
          ${q.mistakeHtml ? `<div class="mistake-box">${q.mistakeHtml}</div>` : ""}
        </div>
      </article>
    `;
  }

  function renderMainStage() {
    const stage = document.getElementById("stage-inner");
    const list = getFilteredQuestions();

    if (list.length === 0) {
      stage.innerHTML = `
        <div class="empty-state">
          <p><strong>この条件に一致する問題はありません。</strong></p>
          <p>左のサイドバーから別の年度・分野・理解度を選んでください。</p>
        </div>
      `;
      return;
    }

    if (state.viewMode === "focus") {
      let idx = list.findIndex(q => q.id === state.activeId);
      if (idx < 0) { idx = 0; state.activeId = list[0].id; }
      const q = list[idx];
      stage.innerHTML = `
        <div class="focus-bar">
          <div class="focus-nav-group">
            <button class="nav-step-btn" id="btn-prev" ${idx === 0 ? "disabled" : ""}>← 前の問題 <kbd>K</kbd></button>
            <span class="focus-counter">${idx + 1} / ${list.length} 問目</span>
            <button class="nav-step-btn" id="btn-next" ${idx === list.length - 1 ? "disabled" : ""}>次の問題 → <kbd>J</kbd></button>
          </div>
          <div class="focus-nav-group">
            <button class="ghost-btn" id="btn-hide-all-rev" title="開いているヒント・解答・解説を閉じる">解答をすべて隠す</button>
          </div>
        </div>
        ${buildQuestionCardHtml(q, true)}
      `;
    } else {
      const heading = state.filterValue === "ALL" ? "全33問 まとめ一覧" : `${state.filterValue} まとめ一覧（${list.length}問）`;
      stage.innerHTML = `
        <div class="list-banner">
          <h2>${heading}</h2>
          <div class="list-actions">
            <button class="ghost-btn" id="btn-list-open-ans">すべて解答を開く</button>
            <button class="ghost-btn" id="btn-list-close-all">すべて閉じる</button>
          </div>
        </div>
        ${list.map(q => buildQuestionCardHtml(q, false)).join("")}
      `;
    }

    renderMath(stage);
  }

  function renderCheatSheet() {
    const tabsEl = document.getElementById("cheat-tabs");
    const bodyEl = document.getElementById("cheat-body");
    const data = window.CHEATSHEET_DATA || [];

    tabsEl.innerHTML = data.map(sec =>
      `<button class="cheat-tab ${String(state.cheatTab) === String(sec.id) ? "active" : ""}" data-cheat-tab="${sec.id}">${sec.label}</button>`
    ).join("");

    const activeSec = data.find(s => String(s.id) === String(state.cheatTab)) || data[0];
    if (!activeSec) return;

    bodyEl.innerHTML = activeSec.cards.map(c => `
      <section class="cheat-card">
        <h4><span>${c.title}</span>${c.tag ? `<span class="cheat-tag">${c.tag}</span>` : ""}</h4>
        <div>${c.html}</div>
      </section>
    `).join("");

    renderMath(bodyEl);
  }

  function setCheatOpen(open, tabId) {
    state.cheatOpen = open;
    if (tabId !== undefined) state.cheatTab = tabId;
    document.getElementById("workspace").classList.toggle("cheat-open", state.cheatOpen);
    document.getElementById("btn-toggle-cheat").classList.toggle("active", state.cheatOpen);
    if (state.cheatOpen) renderCheatSheet();
  }

  function renderAll() {
    updateProgressSummary();
    renderFilterChips();
    renderNavList();
    renderMainStage();
  }

  function stepFocus(delta) {
    if (state.viewMode !== "focus") return;
    const list = getFilteredQuestions();
    const idx = list.findIndex(q => q.id === state.activeId);
    const nextIdx = idx + delta;
    if (nextIdx >= 0 && nextIdx < list.length) {
      state.activeId = list[nextIdx].id;
      renderNavList();
      renderMainStage();
      document.getElementById("main-stage").scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function toggleReveal(qid, part) {
    const rev = ensureRevealObj(qid);
    rev[part] = !rev[part];
    renderMainStage();
  }

  function setStatus(qid, val) {
    if (state.progress[qid] === val) {
      delete state.progress[qid];
    } else {
      state.progress[qid] = val;
    }
    saveProgress();
    updateProgressSummary();
    renderNavList();
    renderMainStage();
  }

  // Event Listeners
  document.addEventListener("click", (e) => {
    const viewBtn = e.target.closest("[data-view-mode]");
    if (viewBtn) {
      state.viewMode = viewBtn.dataset.viewMode;
      document.querySelectorAll("[data-view-mode]").forEach(b => b.classList.toggle("active", b === viewBtn));
      renderNavList();
      renderMainStage();
      return;
    }

    const groupBtn = e.target.closest("[data-group-by]");
    if (groupBtn) {
      state.groupBy = groupBtn.dataset.groupBy;
      document.querySelectorAll("[data-group-by]").forEach(b => b.classList.toggle("active", b === groupBtn));
      renderAll();
      return;
    }

    const chip = e.target.closest("[data-filter-val]");
    if (chip) {
      state.filterValue = chip.dataset.filterVal;
      renderAll();
      return;
    }

    const navItem = e.target.closest("[data-qid].nav-item");
    if (navItem) {
      const qid = navItem.dataset.qid;
      state.activeId = qid;
      if (state.viewMode === "focus") {
        renderNavList();
        renderMainStage();
        document.getElementById("main-stage").scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const card = document.getElementById(`card-${qid}`);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const revBtn = e.target.closest("[data-toggle-rev]");
    if (revBtn) {
      const [qid, part] = revBtn.dataset.toggleRev.split(":");
      toggleReveal(qid, part);
      return;
    }

    const stBtn = e.target.closest("[data-set-status]");
    if (stBtn) {
      const [qid, val] = stBtn.dataset.setStatus.split(":");
      setStatus(qid, val);
      return;
    }

    const refBtn = e.target.closest("[data-open-cheat]");
    if (refBtn) {
      setCheatOpen(true, refBtn.dataset.openCheat);
      return;
    }

    const cheatTab = e.target.closest("[data-cheat-tab]");
    if (cheatTab) {
      state.cheatTab = cheatTab.dataset.cheatTab;
      renderCheatSheet();
      return;
    }

    if (e.target.closest("#btn-prev")) { stepFocus(-1); return; }
    if (e.target.closest("#btn-next")) { stepFocus(1); return; }

    if (e.target.closest("#btn-hide-all-rev")) {
      if (state.activeId) {
        state.revealed[state.activeId] = { hint: false, ans: false, exp: false };
        renderMainStage();
      }
      return;
    }

    if (e.target.closest("#btn-list-open-ans")) {
      getFilteredQuestions().forEach(q => {
        const r = ensureRevealObj(q.id);
        r.ans = true;
      });
      renderMainStage();
      return;
    }

    if (e.target.closest("#btn-list-close-all")) {
      getFilteredQuestions().forEach(q => {
        state.revealed[q.id] = { hint: false, ans: false, exp: false };
      });
      renderMainStage();
      return;
    }

    if (e.target.closest("#btn-toggle-sidebar")) {
      document.getElementById("workspace").classList.toggle("sidebar-collapsed");
      return;
    }

    if (e.target.closest("#btn-toggle-cheat")) {
      setCheatOpen(!state.cheatOpen);
      return;
    }
    if (e.target.closest("#btn-close-cheat")) {
      setCheatOpen(false);
      return;
    }

    if (e.target.closest("#btn-shortcuts")) {
      document.getElementById("shortcut-modal").classList.remove("hidden");
      return;
    }
    if (e.target.closest("#btn-close-modal") || e.target.id === "shortcut-modal") {
      document.getElementById("shortcut-modal").classList.add("hidden");
      return;
    }

    if (e.target.closest("#btn-reset-progress")) {
      if (confirm("保存されている理解度チェック（◎/△/×）をすべてリセットしますか？")) {
        state.progress = {};
        saveProgress();
        renderAll();
      }
      return;
    }
  });

  // Keyboard shortcuts (for left-hand control while writing on iPad)
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const key = e.key.toLowerCase();
    if (key === "?") {
      document.getElementById("shortcut-modal").classList.toggle("hidden");
      return;
    }
    if (key === "escape") {
      document.getElementById("shortcut-modal").classList.add("hidden");
      return;
    }
    if (key === "c") {
      setCheatOpen(!state.cheatOpen);
      return;
    }

    if (state.viewMode === "focus" && state.activeId) {
      if (key === "j" || e.key === "ArrowRight") { e.preventDefault(); stepFocus(1); }
      else if (key === "k" || e.key === "ArrowLeft") { e.preventDefault(); stepFocus(-1); }
      else if (key === "h") { toggleReveal(state.activeId, "hint"); }
      else if (key === "a") { toggleReveal(state.activeId, "ans"); }
      else if (key === "e") { toggleReveal(state.activeId, "exp"); }
      else if (key === "1") { setStatus(state.activeId, "ok"); }
      else if (key === "2") { setStatus(state.activeId, "warn"); }
      else if (key === "3") { setStatus(state.activeId, "ng"); }
    }
  });

  // Init after KaTeX script loads
  window.addEventListener("DOMContentLoaded", () => {
    renderAll();
    // KaTeX defer script finishes right around load
    window.addEventListener("load", () => {
      renderMath(document.getElementById("stage-inner"));
      if (state.cheatOpen) renderMath(document.getElementById("cheat-body"));
    });
  });
})();
