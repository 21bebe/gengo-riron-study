window.CHEATSHEET_DATA = [
  {
    id: "trend",
    label: "出題傾向",
    cards: [
      {
        title: "中間試験 3年分（R5〜R7）の定番7パターン",
        tag: "毎年ほぼ確定",
        html: String.raw`
          <table class="mini-table">
            <thead><tr><th>出題パターン</th><th>R5</th><th>R6</th><th>R7</th></tr></thead>
            <tbody>
              <tr><td>再帰的定義（$x^{\mathrm{R}}$・正規表現・回文）</td><td>問1</td><td>問1</td><td>問1</td></tr>
              <tr><td>鳩の巣原理／帰納法／FAの限界</td><td>問2,4</td><td>問2,6,11</td><td>問2,10,11</td></tr>
              <tr><td>正規表現 $L(R)$ 判定（○×）</td><td>問3</td><td>問3</td><td>問3</td></tr>
              <tr><td>正規表現の構成（2問）</td><td>問5</td><td>問4</td><td>問4</td></tr>
              <tr><td>DFA構成（条件＋2進数 mod 3）</td><td>問6</td><td>問5</td><td>問5</td></tr>
              <tr><td>DFA状態最小化</td><td>問7</td><td>問7</td><td>問6</td></tr>
              <tr><td>NFA → DFA（群状態）</td><td>問8</td><td>問8</td><td>問7 (+8)</td></tr>
              <tr><td>FA → 正規表現（連立方程式）</td><td>問9</td><td>問9</td><td>問9</td></tr>
              <tr><td>CFG 導出木＆最左導出</td><td>問10</td><td>問10</td><td>問12</td></tr>
            </tbody>
          </table>
          <p><strong>攻略のコツ：</strong>配点の大半は「正規表現判定・構成」「DFA構成」「最小化」「NFA→DFA」「連立方程式」「導出木」の<strong>機械的に解ける6パターン</strong>。手順を体に染み込ませれば8割超えが安定する！</p>
        `
      }
    ]
  },
  {
    id: 1,
    label: "資料1",
    cards: [
      {
        title: "形式言語の基本用語",
        tag: "1.pdf",
        html: String.raw`
          <ul>
            <li><strong>アルファベット $\Sigma$：</strong>記号の有限集合（例：$\Sigma = \{0, 1\}$）。</li>
            <li><strong>列（文章）：</strong>$\Sigma$ の記号を並べたもの。長さは $|x|$。</li>
            <li><strong>空列 $\varepsilon$：</strong>長さ $0$ の列。$x\varepsilon = \varepsilon x = x$。</li>
            <li><strong>$\Sigma^*$：</strong>$\Sigma$ 上のすべての列の集合（$\varepsilon$ を含む）。</li>
            <li><strong>要注意の区別：</strong>空集合 $\phi \neq$ 空列 $\varepsilon \neq$ 空列だけの集合 $\{\varepsilon\}$。</li>
            <li><strong>部分列：</strong>$w = xyz$ と書けるとき $y$ は $w$ の部分列。</li>
          </ul>
        `
      },
      {
        title: "列の逆 x^R の再帰的定義（例題1.2）",
        tag: "R5問1・R7問1",
        html: String.raw`
          <p><strong>列の逆 $x^{\mathrm{R}}$：</strong></p>
          <ul>
            <li>(i) $\varepsilon^{\mathrm{R}} = \varepsilon$</li>
            <li>(ii) $x \in \Sigma^*,\; a \in \Sigma$ に対し $(ax)^{\mathrm{R}} = x^{\mathrm{R}}a$（または $(xa)^{\mathrm{R}} = ax^{\mathrm{R}}$）</li>
          </ul>
          <p><strong>回文（$x = x^{\mathrm{R}}$）：</strong></p>
          <ul>
            <li>(i) $\varepsilon$ は回文、(ii) $a \in \Sigma$ は回文、(iii) $x$ が回文なら $axa$ も回文。</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 2,
    label: "資料2",
    cards: [
      {
        title: "言語の連接とスター演算",
        tag: "2.pdf",
        html: String.raw`
          <ul>
            <li><strong>連接：</strong>$L_1 L_2 = \{x_1 x_2 \mid x_1 \in L_1,\; x_2 \in L_2\}$。</li>
            <li><strong>空集合の性質：</strong>任意の言語 $L$ に対し $L\phi = \phi L = \phi$（例題1.4）。</li>
            <li><strong>べき乗：</strong>$L^0 = \{\varepsilon\},\; L^1 = L,\; L^2 = LL,\; \dots$（<strong>$\phi^0 = \{\varepsilon\}$</strong> に注意！）。</li>
            <li><strong>スター演算：</strong>$L^* = L^0 \cup L^1 \cup L^2 \cup \cdots$。</li>
            <li><strong>頻出恒等式：</strong>$L^* L^* = L^*$、$(L^*)^* = L^*$、$L_1(L_2 L_1)^* = (L_1 L_2)^* L_1$。</li>
          </ul>
        `
      },
      {
        title: "鳩の巣原理（Pigeonhole Principle）",
        tag: "R5問2・R6問2,6・R7問10",
        html: String.raw`
          <p>$n$ 個の巣に $n+1$ 羽以上の鳩を入れると、必ず <strong>同じ巣に入る2羽（$i \neq j$）</strong> が存在する。</p>
          <ul>
            <li>循環小数：巣＝余り $\{1,\dots,m-1\}$（$m-1$ 個）、鳩＝$a_1 \sim a_m$（$m$ 個）。</li>
            <li>格子点：巣＝偶奇の組（4個）、鳩＝5点。</li>
            <li>FAの限界：巣＝状態（$n$ 個）、鳩＝$t_0 \sim t_n$（$n+1$ 個）。</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 3,
    label: "資料3",
    cards: [
      {
        title: "正規表現の定義と演算子優先度",
        tag: "3.pdf / R6問1",
        html: String.raw`
          <ol>
            <li>$\phi$ は正規表現、$L(\phi) = \phi$</li>
            <li>$\varepsilon$ は正規表現、$L(\varepsilon) = \{\varepsilon\}$</li>
            <li>$a \in \Sigma$ なら $a$ は正規表現、$L(a) = \{a\}$</li>
            <li>$R_1, R_2$ が正規表現なら $(R_1+R_2),\; (R_1 R_2),\; (R_1^*)$ も正規表現</li>
          </ol>
          <p><strong>優先度（高い順）：</strong>$*$（スター） $\to$ $\cdot$（連接） $\to$ $+$（和）。</p>
          <p><strong>引っかけ注意：</strong>$L(\phi^*) = \{\varepsilon\}$、$L(R\phi) = \phi$。</p>
        `
      },
      {
        title: "正規表現の構成テクニック",
        tag: "R5問5・R6問4・R7問4",
        html: String.raw`
          <ul>
            <li>「部分列 $w$ を含む」→ $(0+1)^* w (0+1)^*$</li>
            <li>「$a$ で始まり $b$ で終わり、中に $c$ を1個以上含む」→ $a(0+1)^* c (0+1)^* b$</li>
            <li>「含まれる0の直後は必ず11」→ 部品が <code>1</code> と <code>011</code> なので $(1 + 011)^*$</li>
            <li>「奇数個の0」→ $0(00)^*$、「偶数個の0」→ $(00)^*$</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 4,
    label: "資料4",
    cards: [
      {
        title: "決定性有限オートマトン（DFA / fa）",
        tag: "4.pdf",
        html: String.raw`
          <p>$M = (K, \Sigma, \delta, s_0, F)$（状態集合・入力記号・遷移関数 $K\times\Sigma \to K$・初期状態・受理状態集合）。</p>
          <ul>
            <li><strong>DFAの鉄則：</strong>すべての状態から、すべての入力記号（<code>0</code> と <code>1</code>）の矢印が<strong>ちょうど1本ずつ</strong>出る！</li>
            <li><strong>拡張遷移関数：</strong>$\hat{\delta}(s, \varepsilon) = s,\; \hat{\delta}(s, xa) = \delta(\hat{\delta}(s, x), a)$。</li>
          </ul>
        `
      },
      {
        title: "DFA構成の頻出パターン（2進数の mod 3）",
        tag: "R5問6・R6問5・R7問5",
        html: String.raw`
          <ul>
            <li><strong>通常の2進数（高い桁から読む）→ 3状態：</strong><br>
              状態＝余り $r \in \{0,1,2\}$。入力 $b$ で $r' = (2r+b) \bmod 3$。</li>
            <li><strong>低い桁から読む2進数 → 6状態：</strong><br>
              $2^{2n} \equiv 1,\; 2^{2n+1} \equiv 2 \pmod 3$ より、<br>
              状態＝<strong>（次の桁の偶奇 2通り）×（現在の余り 3通り）</strong>。<br>
              <code>0</code>：偶奇のみ反転。<code>1</code>：偶数桁なら余り$+1$、奇数桁なら余り$+2$して偶奇反転。</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 5,
    label: "資料5",
    cards: [
      {
        title: "状態最小化の手順（定理2.3・例題2.6）",
        tag: "5.pdf / 毎年出題",
        html: String.raw`
          <ol>
            <li>初期状態から到達不能な状態があれば削除。</li>
            <li>遷移表を書き、<strong>受理状態グループ</strong>と<strong>非受理状態グループ</strong>に分ける。</li>
            <li>同じグループ内で、<code>0</code> と <code>1</code> の行き先が（同じグループ内に）一致するペアは<strong>等価</strong>。行き先が異なるグループに分かれるペアは非等価なので分割する。</li>
            <li>等価な状態を1つにまとめ、矢印を付け替えて完成！</li>
          </ol>
          <p><strong>直積オートマトン判定法（例題2.6）：</strong>$(s_1, s_2)$ を初期状態として遷移をたどり、「片方が受理・他方が非受理」の組に到達したら非等価、到達しなければ等価。</p>
        `
      },
      {
        title: "補集合とNFAの注意点（定理2.4・例題2.9）",
        tag: "5.pdf",
        html: String.raw`
          <ul>
            <li><strong>DFA</strong> なら受理・非受理を反転（$F' = K - F$）すれば補集合 $\Sigma^* - L$ を認識する。</li>
            <li><strong>NFA</strong> で受理・非受理をそのまま反転しても補集合にはならない！必ず先にDFAへ変換してから反転する。</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 6,
    label: "資料6",
    cards: [
      {
        title: "補題2.1：NFA → DFA（群状態）",
        tag: "R5問8・R6問8・R7問7",
        html: String.raw`
          <ol>
            <li>初期状態は $\{s_0\}$。</li>
            <li>各群状態 $Q$ に対し、入力 $a$ での遷移先は $\bigcup_{s \in Q} \delta(s, a)$。遷移先がない場合は空集合 $\phi$。</li>
            <li>元のNFAの受理状態を<strong>1つでも含む</strong>群状態を受理状態（二重丸）にする。</li>
            <li><strong>最重要チェック：</strong>$\phi$ が現れたら、$\phi$ に <code>0,1</code> の自己ループを必ず描く！</li>
          </ol>
        `
      },
      {
        title: "補題2.2：ε-NFA → NFA",
        tag: "R7問8",
        html: String.raw`
          <ol>
            <li>各状態 $s$ から $\varepsilon$ のみ（0回以上）で到達できる集合 $S(s)$ を求める。</li>
            <li>新しい状態は $(s, S(s))$。$S(s)$ に元の受理状態が含まれれば受理状態。</li>
            <li>元の遷移に $\delta(s_1, a) \ni s_2\;(a \neq \varepsilon)$ があるとき、<strong>$s_1 \in S(s)$ を満たす全ての $(s, S(s))$ から $(s_2, S(s_2))$ へ $a$ の矢印</strong>を引く。</li>
          </ol>
        `
      },
      {
        title: "補題2.4：FA → 正規表現（連立方程式）",
        tag: "R5問9・R6問9・R7問9",
        html: String.raw`
          <p>$T_i$ ＝ 初期状態 $s_0$ から状態 $s_i$ へ導く記号列の集合。</p>
          <ul>
            <li><strong>立式：</strong>状態 $s_i$ に<strong>入ってくる矢印</strong>を足し合わせる（初期状態 $T_0$ のみ右辺に $\varepsilon$ を足す）。</li>
            <li><strong>基本公式（Ardenの補題）：</strong>
              $$X = P + XQ \implies X = PQ^* \quad (\varepsilon \notin Q)$$
            </li>
            <li><strong>最終解答：</strong>受理状態に対応する $T_i$ の和が求める正規表現 $R$！（$s_0$ 以外が受理状態のとき代入し忘れないよう注意！）</li>
          </ul>
        `
      },
      {
        title: "有限オートマトンの限界（定理2.5）",
        tag: "R7問10",
        html: String.raw`
          <p>$L = \{0^n 1^n \mid n \ge 0\}$ はいかなるFAでも認識できない（状態数 $n$ と仮定し、$t_0, \dots, t_n$ に鳩の巣原理を適用して背理法で矛盾を導く）。</p>
        `
      }
    ]
  },
  {
    id: 7,
    label: "資料7",
    cards: [
      {
        title: "文脈自由文法（CFG）・導出木・最左導出",
        tag: "7.pdf / 毎年出題",
        html: String.raw`
          <p>$G = (V, \Sigma, P, S)$：変数（非終端記号）・終端記号・生成規則・開始記号。</p>
          <ul>
            <li><strong>導出木：</strong>根が $S$、内部節点が変数、葉を左から読んだ列が生成された文字列。</li>
            <li><strong>最左導出（定理3.2）：</strong>各ステップで<strong>常に最も左にある変数</strong>に生成規則を適用して導出する。</li>
            <li><strong>検算テク：</strong>最左導出のステップ数 ＝ 導出木の内部節点（変数）の個数！</li>
          </ul>
        `
      },
      {
        title: "FA → CFG 変換（定理3.3）と ε 規則除去",
        tag: "7.pdf",
        html: String.raw`
          <ul>
            <li>正規言語は必ずCFGで生成できる（状態→変数、矢印 $s_i \xrightarrow{a} s_j$ → $s_i \to a s_j$、受理状態 $s_f$ → $s_f \to \varepsilon$）。</li>
            <li>$A \to \varepsilon$ の除去：$X \to \alpha A \beta$ があれば $A$ を省いた $X \to \alpha \beta$ を追加し、$A \to \varepsilon$ を削除する（$\varepsilon \in L$ のときは $S \to \varepsilon$ だけ残す）。</li>
          </ul>
        `
      }
    ]
  }
];
