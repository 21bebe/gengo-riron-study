window.QUESTIONS_R7 = [
  {
    id: "R7-1",
    year: "R7",
    num: 1,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 1,
    title: "回文の再帰的定義",
    promptHtml: String.raw`
      <p>$\Sigma$ 上の列 $x$ で、$x = x^{\mathrm{R}}$ を満たすものを回文と呼ぶ。以下の空欄を埋め、回文の再帰的定義を完成させよ。</p>
      <div class="proof-box">
        (i) <span class="blank-box">1</span> は回文<br>
        (ii) $a \in$ <span class="blank-box">2</span> に対し、<span class="blank-box">3</span> は回文<br>
        (iii) $a \in$ <span class="blank-box">2</span> , $x \in \Sigma^*$ に対し、<span class="blank-box">4</span> が回文なら、<span class="blank-box">5</span> は回文
      </div>
    `,
    hintHtml: String.raw`<p>回文は「長さ0（空列）」「長さ1（1文字）」を基底とし、既存の回文の両端に同じ文字 $a$ を挟むことで長い回文を作る。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $\varepsilon$</div>
        <div class="ans-chip"><strong>2</strong> $\Sigma$</div>
        <div class="ans-chip"><strong>3</strong> $a$</div>
        <div class="ans-chip"><strong>4</strong> $x$</div>
        <div class="ans-chip"><strong>5</strong> $axa$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li>(i) 長さ $0$ の回文：$\varepsilon$</li>
        <li>(ii) 長さ $1$ の回文：任意の記号 $a \in \Sigma$ に対して $a$（これがないと奇数長の回文が作れない！）</li>
        <li>(iii) 長さ $+2$ の再帰：$x$ が回文なら両端に同じ $a$ を付けた $axa$ も回文。</li>
      </ul>
    `
  },
  {
    id: "R7-2",
    year: "R7",
    num: 2,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "aが偶数個の列の総数 (3^n+1)/2 の帰納法証明",
    promptHtml: String.raw`
      <p>$L = \{x \mid x \in \{a,b,c\}^* \text{ かつ } \#_a(x) \text{は偶数}\}$ において、$L$ に含まれる長さ $n$ の列の総数は $(3^n+1)/2$ であることを示したい。空欄に適切な語を入れよ。</p>
      <div class="proof-box">
        (i) $|x| = 0$ のとき、$L$ に含まれるのは $x = \varepsilon$ のみ。$(3^0+1)/2 =$ <span class="blank-box">1</span> となり成立する。<br>
        (ii) $|x| = k$ のとき成立を仮定する。<br>
        $|x| = k+1$ のとき、$z \in \{a,b,c\}$ に対し $x =$ <span class="blank-box">2</span> と書ける。<br>
        $x \in L$ となるのは、$z=a$ のとき $x' \notin L$、$z=b$ または $z=c$ のとき $x' \in L$ である。<br>
        また、長さ $k$ の $a,b,c$ 列は全部で <span class="blank-box">3</span> 個ある。よって、長さ $k+1$ の総数は、<br>
        <span class="blank-box">3</span> $-$ <span class="blank-box">4</span> $+ 2 \times$ <span class="blank-box">4</span> $=$ <span class="blank-box">5</span><br>
        となり、$n = k+1$ でも成立する。<br>
        (iii) (i), (ii) より全ての $n$ について、成立する。
      </div>
    `,
    hintHtml: String.raw`<p>長さ $k$ の列の総数は $3^k$ 個。そのうち $L$ に含まれるのが $(3^k+1)/2$ 個（空欄4）、含まれない（$a$ が奇数個）のが $3^k - (3^k+1)/2$ 個！</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $1$</div>
        <div class="ans-chip"><strong>2</strong> $x'z$</div>
        <div class="ans-chip"><strong>3</strong> $3^k$</div>
        <div class="ans-chip"><strong>4</strong> $(3^k+1)/2$</div>
        <div class="ans-chip"><strong>5</strong> $(3^{k+1}+1)/2$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>長さ $k+1$ の列 $x = x'z$（$|x'|=k$）の末尾文字 $z$ で場合分けする：</p>
      <ul>
        <li>$z=a$ のとき：$x'$ の $a$ の個数が奇数（$x' \notin L$）である必要があり、その個数は $3^k - \dfrac{3^k+1}{2}$。</li>
        <li>$z=b$ または $z=c$ のとき：$x' \in L$ である必要があり、その個数は $2 \times \dfrac{3^k+1}{2}$。</li>
        <li>合計：$\left(3^k - \dfrac{3^k+1}{2}\right) + 2 \cdot \dfrac{3^k+1}{2} = 3^k + \dfrac{3^k+1}{2} = \dfrac{3 \cdot 3^k + 1}{2} = \dfrac{3^{k+1}+1}{2}$。</li>
      </ul>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>空欄3・4を「長さ $k$ の列の総数」と「帰納法の仮定の値」ではなく、$k$ や $k+1$ と書いて -4 点減点された例あり！式の形（$3^k$ と $(3^k+1)/2$）をそのまま入れよう。`
  },
  {
    id: "R7-3",
    year: "R7",
    num: 3,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "正規表現 L(R) に含まれるかの判定",
    promptHtml: String.raw`
      <p>正規表現 $R = (1 + 00^*11)(0 + 1(0+10)^*11)^*$ とする。次の $0, 1$ 列について、$L(R)$ に含まれるものには ○、含まれないものには × をつけよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>00110</code></li>
        <li><span class="sub-label">(b)</span> <code>10111</code></li>
        <li><span class="sub-label">(c)</span> <code>0011100</code></li>
        <li><span class="sub-label">(d)</span> <code>1010100111</code></li>
        <li><span class="sub-label">(e)</span> <code>001101100110</code></li>
      </ul>
    `,
    hintHtml: String.raw`<p>3年連続出題の定番問題！先頭 $A = 1 + 00^*11$、繰り返し $B = 0 + 1(0+10)^*11$ に区切ろう。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> ○</div>
        <div class="ans-chip"><strong>(b)</strong> ○</div>
        <div class="ans-chip"><strong>(c)</strong> ×</div>
        <div class="ans-chip"><strong>(d)</strong> ×</div>
        <div class="ans-chip"><strong>(e)</strong> ○</div>
      </div>
    `,
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>問題</th><th>区切り・判定理由</th><th>答</th></tr></thead>
        <tbody>
          <tr><td>(a) <code>00110</code></td><td><code>0011</code> | <code>0</code></td><td><strong>○</strong></td></tr>
          <tr><td>(b) <code>10111</code></td><td><code>1</code> | <code>0</code> | <code>1</code>(ε)<code>11</code></td><td><strong>○</strong></td></tr>
          <tr><td>(c) <code>0011100</code></td><td><code>0011</code> | <code>100</code> ← <code>1</code> で始まったブロックが <code>11</code> で閉じない。</td><td><strong>×</strong></td></tr>
          <tr><td>(d) <code>1010100111</code></td><td><code>1</code> | <code>0</code> | <code>1</code>(<code>0</code>)(<code>10</code>)(<code>0</code>)<code>11</code> | <code>1</code> ← 末尾に <code>1</code> が1個余る。</td><td><strong>×</strong></td></tr>
          <tr><td>(e) <code>001101100110</code></td><td><code>0011</code> | <code>0</code> | <code>1</code>(<code>10</code>)(<code>0</code>)<code>11</code> | <code>0</code></td><td><strong>○</strong></td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "R7-4",
    year: "R7",
    num: 4,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "条件を満たす言語の正規表現の構成",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を表す正規表現を求めよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>0</code> で始まり <code>0</code> で終わり、<code>1</code> を1個以上含む列の集合</li>
        <li><span class="sub-label">(b)</span> 含まれる <code>1</code> のすぐあとに必ず <code>0</code> がくる列の集合</li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li>(a) R6問4(a) の0と1を入れ替えた類題！</li>
        <li>(b) R5問5(b) の類題。「<code>1</code> が出たら必ず <code>10</code> のペアにする」と考えると部品は <code>0</code> と <code>10</code> のみ。</li>
      </ul>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $0(0+1)^*1(0+1)^*0$</div>
        <div class="ans-chip"><strong>(b)</strong> $(0 + 10)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>(a)：</strong>先頭と末尾を <code>0</code> で固定し、間に少なくとも1個の <code>1</code> を含む任意の列 $(0+1)^*1(0+1)^*$ を挟む。</li>
        <li><strong>(b)：</strong>すべての <code>1</code> の直後に <code>0</code> があるので、<code>10</code> を1塊とみなせば残りは単独の <code>0</code> のみ。よって $(0+10)^*$（空列 $\varepsilon$ も含む）。</li>
      </ul>
    `
  },
  {
    id: "R7-5",
    year: "R7",
    num: 5,
    points: 10,
    topic: "DFA構成",
    lectureRef: 4,
    title: "DFA構成（重なりなし 00 が偶数回／低い桁から mod 3 = 2）",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> 列の中にふくまれる <code>00</code> なるパターンの数が偶数である列（重なりを許さないものとする。たとえば、<code>000</code> に含まれる <code>00</code> のパターンは1個、<code>0000</code> に含まれる <code>00</code> のパターンは2個と数える）を受理し、状態数が4。</li>
        <li><span class="sub-label">(b)</span> $x \in \Sigma^*$ を2進数を低い桁から順に並べたもの（例：$4_{(10)} \to 001$）と考える。この2進数を3で割ると余りが2になるとき、$x$ を受理し、状態数が6。<br>
          <small>ヒント：$n \ge 0$ に対して $2^n = \begin{cases} 3k+1 & (n\text{が偶数}) \\ 3k+2 & (n\text{が奇数}) \end{cases}$ となる整数 $k$ が存在する。</small>
        </li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li><strong>(a)</strong> 状態は「現在の <code>00</code> カウントの偶奇（2通り）× 今 <code>0</code> を1個溜めているか（2通り）＝ 4状態」。<strong>重なりを許さない</strong>ので、<code>00</code> が完成した瞬間に「溜めた0」はリセットされる！</li>
        <li><strong>(b)</strong> R5問6(b)ii と完全に同じ6状態構造で、受理状態を「余り2」の2つ（$s_2, s_5$）にするだけ！</li>
      </ul>
    `,
    answerHtml: String.raw`<p>模範解答の状態遷移図は以下の通り。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "(a) 重なりなしの 00 が偶数回（4状態）",
        spec: {
          width: 360, height: 225,
          nodes: [
            { id: "s0", label: "s_0", x: 110, y: 65, start: true, accept: true, note: "偶・0なし" },
            { id: "s1", label: "s_1", x: 255, y: 65, accept: true, note: "偶・0を1個" },
            { id: "s2", label: "s_2", x: 110, y: 175, note: "奇・0を1個", notePos: "bottom" },
            { id: "s3", label: "s_3", x: 255, y: 175, note: "奇・0なし", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s0", label: "1", loopDir: "top", loopSize: 30 },
            { from: "s0", to: "s1", label: "0", curve: -16 },
            { from: "s1", to: "s0", label: "1", curve: -16 },
            { from: "s1", to: "s3", label: "0" },
            { from: "s3", to: "s3", label: "1", loopDir: "bottom-right", loopSize: 30 },
            { from: "s3", to: "s2", label: "0", curve: -16 },
            { from: "s2", to: "s3", label: "1", curve: -16 },
            { from: "s2", to: "s0", label: "0" }
          ]
        }
      },
      {
        type: "automaton",
        caption: "(b) 低い桁からの2進数 mod 3 = 2（6状態：上段=偶数桁, 下段=奇数桁）",
        spec: {
          width: 520, height: 250,
          nodes: [
            { id: "s0", label: "s_0", x: 95, y: 65, start: true, note: "偶・余0" },
            { id: "s1", label: "s_1", x: 260, y: 65, note: "偶・余1" },
            { id: "s2", label: "s_2", x: 425, y: 65, accept: true, note: "偶・余2" },
            { id: "s3", label: "s_3", x: 95, y: 185, note: "奇・余0", notePos: "bottom" },
            { id: "s4", label: "s_4", x: 260, y: 185, note: "奇・余1", notePos: "bottom" },
            { id: "s5", label: "s_5", x: 425, y: 185, accept: true, note: "奇・余2", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s3", label: "0", curve: -16 },
            { from: "s3", to: "s0", label: "0", curve: -16 },
            { from: "s1", to: "s4", label: "0", curve: -16 },
            { from: "s4", to: "s1", label: "0", curve: -16 },
            { from: "s2", to: "s5", label: "0", curve: -16 },
            { from: "s5", to: "s2", label: "0", curve: -16 },
            { from: "s0", to: "s4", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s4", to: "s0", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s1", to: "s5", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s5", to: "s1", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s2", to: "s3", label: "1", curve: 75, labelPos: 0.5, dy: 4 },
            { from: "s3", to: "s2", label: "1", curve: -75, labelPos: 0.5, dy: -4 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <p><strong>(a) のトレース検算：</strong></p>
      <ul>
        <li><code>00</code>：$s_0 \xrightarrow{0} s_1 \xrightarrow{0} s_3$（奇数＝非受理、かつ0の溜めがリセット！）</li>
        <li><code>000</code>：$s_3 \xrightarrow{0} s_2$（奇数＝非受理、1個目の0として溜める）</li>
        <li><code>0000</code>：$s_2 \xrightarrow{0} s_0$（偶数＝受理！）</li>
      </ul>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>(a) で「重なりを許す（000で2個）」と勘違いして $s_1 \xrightarrow{0} s_2$ にしてしまい 2/10 点になった例あり！演習問題8(e)は「重なりを許す」だが、R7試験は「<strong>重なりを許さない</strong>」に変えてあるので要注意！`
  },
  {
    id: "R7-6",
    year: "R7",
    num: 6,
    points: 5,
    topic: "状態最小化",
    lectureRef: 5,
    title: "決定性有限オートマトンの状態数最小化",
    promptHtml: String.raw`<p>下図に示す決定性有限オートマトンの状態数を最小化せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R7 問6 与えられたDFA（5状態）",
        spec: {
          width: 390, height: 245,
          nodes: [
            { id: "s0", label: "s_0", x: 100, y: 80, start: true },
            { id: "s1", label: "s_1", x: 215, y: 40 },
            { id: "s2", label: "s_2", x: 315, y: 120, accept: true },
            { id: "s3", label: "s_3", x: 100, y: 195, accept: true },
            { id: "s4", label: "s_4", x: 245, y: 210 }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0", curve: -12 },
            { from: "s1", to: "s0", label: "0", curve: -12 },
            { from: "s1", to: "s2", label: "1" },
            { from: "s2", to: "s0", label: "0", labelPos: 0.35 },
            { from: "s2", to: "s3", label: "1", labelPos: 0.35 },
            { from: "s3", to: "s0", label: "0", labelSide: 1 },
            { from: "s3", to: "s3", label: "1", loopDir: "left", loopSize: 32 },
            { from: "s0", to: "s4", label: "1", curve: -12 },
            { from: "s4", to: "s0", label: "0", curve: -12 },
            { from: "s4", to: "s3", label: "1", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>受理状態 $\{s_2, s_3\}$ が等価か確認し、そのあと非受理状態 $\{s_0, s_1, s_4\}$ の遷移を比べよう！</p>`,
    answerHtml: String.raw`<p>$s_2 \equiv s_3$、$s_1 \equiv s_4$ より、状態数 <strong>3</strong> に最小化される。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "最小化後のDFA（3状態：s_0, {s_1, s_4}, {s_2, s_3}）",
        spec: {
          width: 350, height: 210,
          nodes: [
            { id: "s0", label: "s_0", x: 95, y: 155, start: true },
            { id: "s1", label: "s_1", x: 190, y: 55 },
            { id: "s2", label: "s_2", x: 265, y: 155, accept: true }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0,1", curve: -16 },
            { from: "s1", to: "s0", label: "0", curve: -16 },
            { from: "s1", to: "s2", label: "1" },
            { from: "s2", to: "s0", label: "0", labelSide: 1 },
            { from: "s2", to: "s2", label: "1", loopDir: "right", loopSize: 32 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th><th>等価グループ</th></tr></thead>
        <tbody>
          <tr><td>$s_0$</td><td>×</td><td>$s_1$</td><td>$s_4$</td><td>$A = \{s_0\}$</td></tr>
          <tr><td>$s_1$</td><td>×</td><td>$s_0$</td><td>$s_2$</td><td>$B = \{s_1, s_4\}$</td></tr>
          <tr class="accept-row"><td>$s_2$</td><td>○</td><td>$s_0$</td><td>$s_3$</td><td>$C = \{s_2, s_3\}$</td></tr>
          <tr class="accept-row"><td>$s_3$</td><td>○</td><td>$s_0$</td><td>$s_3$</td><td>$C = \{s_2, s_3\}$</td></tr>
          <tr><td>$s_4$</td><td>×</td><td>$s_0$</td><td>$s_3$</td><td>$B = \{s_1, s_4\}$</td></tr>
        </tbody>
      </table>
      <ol>
        <li>$s_2, s_3$ は共に受理で <code>0</code>→$s_0$、<code>1</code>→$s_3$ ⇒ <strong>$s_2 \equiv s_3$</strong>。</li>
        <li>$s_1, s_4$ は共に非受理で <code>0</code>→$s_0$、<code>1</code>→$s_2 / s_3$（等価！）⇒ <strong>$s_1 \equiv s_4$</strong>。</li>
        <li>$s_0$ は <code>1</code>→$s_4$（非受理）なので $s_1, s_4$（<code>1</code>→受理）と非等価。統合すると $s_0 \xrightarrow{0,1} s_1$ になる。</li>
      </ol>
    `
  },
  {
    id: "R7-7",
    year: "R7",
    num: 7,
    points: 10,
    topic: "NFA→DFA・ε-NFA",
    lectureRef: 6,
    title: "群状態を用いた NFA → DFA 変換",
    promptHtml: String.raw`<p>下図に示す非決定性有限オートマトンについて、群状態を用い、それと同じ言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R7 問7 与えられたNFA",
        spec: {
          width: 330, height: 220,
          nodes: [
            { id: "s0", label: "s_0", x: 105, y: 65, start: true },
            { id: "s1", label: "s_1", x: 245, y: 65 },
            { id: "s2", label: "s_2", x: 105, y: 175, accept: true }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "top", loopSize: 30 },
            { from: "s0", to: "s1", label: "1" },
            { from: "s0", to: "s2", label: "0", curve: -16 },
            { from: "s2", to: "s0", label: "1", curve: -16 },
            { from: "s1", to: "s1", label: "0", loopDir: "top", loopSize: 30 },
            { from: "s1", to: "s2", label: "1", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>3状態のNFAなので群状態は最大 $2^3 = 8$ 通り。実は<strong>8状態すべて到達可能</strong>！表を作って漏れなくチェックしよう。</p>`,
    answerHtml: String.raw`<p>全8個の群状態すべてが到達可能（$s_2$ を含む4状態が受理）。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "構成されたDFA（群状態・全8状態）",
        spec: {
          width: 590, height: 315,
          nodes: [
            { id: "q0", label: "{s_0}", x: 90, y: 58, start: true, rx: 28, ry: 20 },
            { id: "q1", label: "{s_1}", x: 240, y: 58, rx: 28, ry: 20 },
            { id: "q2", label: "{s_2}", x: 385, y: 58, accept: true, rx: 28, ry: 20 },
            { id: "phi", label: "φ", x: 525, y: 58, rx: 22, ry: 20 },
            { id: "q02", label: "{s_0,s_2}", x: 90, y: 168, accept: true, rx: 40, ry: 22 },
            { id: "q01", label: "{s_0,s_1}", x: 265, y: 168, rx: 40, ry: 22 },
            { id: "q12", label: "{s_1,s_2}", x: 455, y: 168, accept: true, rx: 40, ry: 22 },
            { id: "q012", label: "{s_0,s_1,s_2}", x: 265, y: 268, accept: true, rx: 52, ry: 22 }
          ],
          edges: [
            { from: "q0", to: "q02", label: "0", labelSide: 1 },
            { from: "q0", to: "q1", label: "1" },
            { from: "q1", to: "q1", label: "0", loopDir: "top", loopSize: 28 },
            { from: "q1", to: "q2", label: "1" },
            { from: "q2", to: "phi", label: "0" },
            { from: "q2", to: "q0", label: "1", curve: -48 },
            { from: "phi", to: "phi", label: "0,1", loopDir: "bottom", loopSize: 28 },
            { from: "q02", to: "q02", label: "0", loopDir: "left", loopSize: 28 },
            { from: "q02", to: "q01", label: "1" },
            { from: "q01", to: "q012", label: "0" },
            { from: "q01", to: "q12", label: "1" },
            { from: "q12", to: "q1", label: "0", curve: 18, labelPos: 0.35 },
            { from: "q12", to: "q02", label: "1", curve: 70, labelPos: 0.25 },
            { from: "q012", to: "q012", label: "0,1", loopDir: "bottom", loopSize: 28 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>群状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th></tr></thead>
        <tbody>
          <tr><td>$\{s_0\}$</td><td>×</td><td>$\{s_0, s_2\}$</td><td>$\{s_1\}$</td></tr>
          <tr><td>$\{s_1\}$</td><td>×</td><td>$\{s_1\}$</td><td>$\{s_2\}$</td></tr>
          <tr class="accept-row"><td>$\{s_2\}$</td><td>○</td><td>$\phi$</td><td>$\{s_0\}$</td></tr>
          <tr><td>$\phi$</td><td>×</td><td>$\phi$</td><td>$\phi$</td></tr>
          <tr class="accept-row"><td>$\{s_0, s_2\}$</td><td>○</td><td>$\{s_0, s_2\}$</td><td>$\{s_0, s_1\}$</td></tr>
          <tr><td>$\{s_0, s_1\}$</td><td>×</td><td>$\{s_0, s_1, s_2\}$</td><td>$\{s_1, s_2\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1, s_2\}$</td><td>○</td><td>$\{s_1\}$</td><td>$\{s_0, s_2\}$</td></tr>
          <tr class="accept-row"><td>$\{s_0, s_1, s_2\}$</td><td>○</td><td>$\{s_0, s_1, s_2\}$</td><td>$\{s_0, s_1, s_2\}$</td></tr>
        </tbody>
      </table>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>$\phi$ の自己ループ <code>0,1</code> を書き忘れて 9/10 点になった例あり！すべての状態から <code>0</code> と <code>1</code> がちょうど1本ずつ出ているか最後に指差し確認しよう。`
  },
  {
    id: "R7-8",
    year: "R7",
    num: 8,
    points: 5,
    topic: "NFA→DFA・ε-NFA",
    lectureRef: 6,
    title: "ε-NFA → NFA 変換（補題2.2）",
    promptHtml: String.raw`<p>下図の $\varepsilon$-nfa と同じ言語を認識する nfa を構成せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R7 問8 与えられた ε-NFA",
        spec: {
          width: 400, height: 140,
          nodes: [
            { id: "s0", label: "s_0", x: 85, y: 85, start: true },
            { id: "s1", label: "s_1", x: 205, y: 85 },
            { id: "s2", label: "s_2", x: 325, y: 85, accept: true }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "top", loopSize: 30 },
            { from: "s0", to: "s1", label: "ε" },
            { from: "s1", to: "s1", label: "1", loopDir: "top", loopSize: 30 },
            { from: "s1", to: "s2", label: "ε" },
            { from: "s2", to: "s2", label: "0", loopDir: "top", loopSize: 30 }
          ]
        }
      }
    ],
    hintHtml: String.raw`
      <p>授業資料6（補題2.2）の手順：</p>
      <ol>
        <li>各状態 $s$ から $\varepsilon$ のみで到達できる集合 $S(s)$ を求める。</li>
        <li>$S(s)$ に元の受理状態 $s_2$ が含まれていれば、状態 $(s, S(s))$ を受理状態にする。</li>
        <li>$s_1 \in S(s)$ かつ $\delta(s_1, a) \ni s_2$ なら、$(s, S(s)) \xrightarrow{a} (s_2, S(s_2))$ の矢印を引く！</li>
      </ol>
    `,
    answerHtml: String.raw`<p>3状態すべてが受理状態となる以下のNFA。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "構成されたNFA（補題2.2）",
        spec: {
          width: 520, height: 185,
          nodes: [
            { id: "n0", label: "(s_0,{s_0,s_1,s_2})", x: 105, y: 85, start: true, accept: true, rx: 64, ry: 22, fontSize: 11.5 },
            { id: "n1", label: "(s_1,{s_1,s_2})", x: 280, y: 85, accept: true, rx: 52, ry: 22, fontSize: 11.5 },
            { id: "n2", label: "(s_2,{s_2})", x: 440, y: 85, accept: true, rx: 42, ry: 22, fontSize: 11.5 }
          ],
          edges: [
            { from: "n0", to: "n0", label: "0", loopDir: "top", loopSize: 28 },
            { from: "n0", to: "n1", label: "1" },
            { from: "n0", to: "n2", label: "0", curve: 58 },
            { from: "n1", to: "n1", label: "1", loopDir: "top", loopSize: 28 },
            { from: "n1", to: "n2", label: "0" },
            { from: "n2", to: "n2", label: "0", loopDir: "top", loopSize: 28 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <ul>
        <li>$S(s_0) = \{s_0, s_1, s_2\}$（$s_2$ を含む ⇒ 受理）</li>
        <li>$S(s_1) = \{s_1, s_2\}$（$s_2$ を含む ⇒ 受理）</li>
        <li>$S(s_2) = \{s_2\}$（$s_2$ を含む ⇒ 受理）</li>
      </ul>
      <p>元の非 $\varepsilon$ 遷移は $s_0 \xrightarrow{0} s_0,\; s_1 \xrightarrow{1} s_1,\; s_2 \xrightarrow{0} s_2$ の3本。これに対応する矢印を各 $S(s)$ から引く：</p>
      <ul>
        <li>$(s_0, \{s_0,s_1,s_2\})$ は $s_0,s_1,s_2$ すべてを含むので、<code>0</code>→$s_0$、<code>1</code>→$s_1$、<code>0</code>→$s_2$。</li>
        <li>$(s_1, \{s_1,s_2\})$ は $s_1,s_2$ を含むので、<code>1</code>→$s_1$、<code>0</code>→$s_2$。</li>
        <li>$(s_2, \{s_2\})$ は $s_2$ のみなので、<code>0</code>→$s_2$。</li>
      </ul>
    `
  },
  {
    id: "R7-9",
    year: "R7",
    num: 9,
    points: 10,
    topic: "FA→正規表現（連立方程式）",
    lectureRef: 6,
    title: "連立方程式による FA → 正規表現変換",
    promptHtml: String.raw`
      <p>下図の有限オートマトンで、$s_0$ から $s_i$ へ導く記号列を $T_i$ とする。以下の問いに答えよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> $s_0$ は初期状態なので $T_0$ の右辺に $\varepsilon$ を含み、$s_0, s_2$ から <code>0</code> で $s_0$ に移るから、$T_0 = \varepsilon + T_0 0 + T_2 0$ と表せる。$T_1$ についても同様に求めよ。</li>
        <li><span class="sub-label">(b)</span> $T_2$ についても同様に求めよ。</li>
        <li><span class="sub-label">(c)</span> $T_2$ の式を $T_1$ の式に代入し、$T_1$ について解け。</li>
        <li><span class="sub-label">(d)</span> $T_2$ の式および $T_1$ の解を $T_0$ の式に代入し、$T_0$ について解け。</li>
        <li><span class="sub-label">(e)</span> 図の有限オートマトンが認識する言語を表す正規表現 $R$ を求めよ。</li>
      </ul>
    `,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R7 問9 有限オートマトン（受理状態は s_1！）",
        spec: {
          width: 340, height: 215,
          nodes: [
            { id: "s0", label: "s_0", x: 170, y: 55, start: true },
            { id: "s1", label: "s_1", x: 90, y: 165, accept: true },
            { id: "s2", label: "s_2", x: 250, y: 165 }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "right", loopSize: 32 },
            { from: "s0", to: "s1", label: "1" },
            { from: "s1", to: "s1", label: "1", loopDir: "left", loopSize: 32 },
            { from: "s1", to: "s2", label: "0", curve: -20 },
            { from: "s2", to: "s1", label: "1", curve: -20 },
            { from: "s2", to: "s0", label: "0", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>R5問9とグラフは全く同じだが、<strong>受理状態が $s_1$</strong> に変わっている！最後に $R = T_1$ へ $T_0$ の解を代入するのを忘れずに！</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $T_1 = T_0 1 + T_1 1 + T_2 1$</div>
        <div class="ans-chip"><strong>(b)</strong> $T_2 = T_1 0$</div>
        <div class="ans-chip"><strong>(c)</strong> $T_1 = T_0 1(1 + 01)^*$</div>
        <div class="ans-chip"><strong>(d)</strong> $T_0 = (0 + 1(1 + 01)^*00)^*$</div>
        <div class="ans-chip"><strong>(e)</strong> $R = (0 + 1(1 + 01)^*00)^* 1(1 + 01)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>(a)〜(d) は R5問9 と全く同じ計算で $T_1 = T_0 1(1+01)^*$、$T_0 = (0 + 1(1+01)^*00)^*$ を得る。</p>
      <p><strong>(e)</strong> 受理状態は $s_1$ なので、$R = T_1 = T_0 1(1+01)^*$ に (d) の $T_0$ を代入して $R = (0 + 1(1+01)^*00)^* 1(1+01)^*$ となる。</p>
    `
  },
  {
    id: "R7-10",
    year: "R7",
    num: 10,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 6,
    title: "{0^n 1^n} がFAで認識できないことの証明",
    promptHtml: String.raw`
      <p>$L = \{0^n 1^n \mid n \ge 0\}$ は、いかなる有限オートマトンでも認識できないことを示したい。空欄に適切な語を入れよ。</p>
      <div class="proof-box">
        $L$ を認識する有限オートマトン $M$ が存在すると仮定する。$M$ の状態数を $n$ とするとき、$t_k = \delta(s_0, 0^k)\;(k = 0, 1, 2, \dots,$ <span class="blank-box">1</span> $)$ を考えると、<span class="blank-box">2</span> 原理より $t_i = t_j\;(i \neq j)$ となる $i, j$ が存在する。したがって、$0^i$ と <span class="blank-box">3</span> を入力したとき同じ状態へ遷移する。これより、$0^i$ <span class="blank-box">4</span> と <span class="blank-box">3</span> <span class="blank-box">4</span> を入力した時も同じ状態へ遷移する。また、$0^i$ <span class="blank-box">4</span> は $L$ に含まれるから、この状態は <span class="blank-box">5</span> 状態である。これより $M$ が <span class="blank-box">3</span> <span class="blank-box">4</span> を受理することになり、$M$ が $L$ を認識することに矛盾する。
      </div>
    `,
    hintHtml: String.raw`<p>授業資料6 p.7「有限オートマトンの能力」の背理法そのもの！$0^i 1^i \in L$ だが $0^j 1^i \notin L$ を利用して矛盾を導く。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $n$</div>
        <div class="ans-chip"><strong>2</strong> 鳩の巣</div>
        <div class="ans-chip"><strong>3</strong> $0^j$</div>
        <div class="ans-chip"><strong>4</strong> $1^i$</div>
        <div class="ans-chip"><strong>5</strong> 受理</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li>$k = 0, 1, \dots, n$ の $n+1$ 個に対し状態は $n$ 個なので、鳩の巣原理より $t_i = t_j\;(i \neq j)$ が存在。</li>
        <li>$0^i$ と $0^j$ が同じ状態に行くので、後ろに同じ $1^i$ を続けても行き先は同じ。</li>
        <li>$0^i 1^i \in L$ よりその行き先は受理状態だが、すると $0^j 1^i\;(\notin L)$ も受理されてしまい矛盾！</li>
      </ul>
    `
  },
  {
    id: "R7-11",
    year: "R7",
    num: 11,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "正規表現の恒等式 (R1+R2)* = (R1*+R2*)* の証明",
    promptHtml: String.raw`
      <p>$R_1$ および $R_2$ を正規表現とする。以下の空欄を埋め、$(R_1 + R_2)^* = (R_1^* + R_2^*)^*$ であることを示せ。</p>
      <div class="proof-box">
        $L_1 = L(R_1),\; L_2 = L(R_2)$ とする。$L_1 \subseteq L_1^*$ および $L_2 \subseteq L_2^*$ より、$($ <span class="blank-box">1</span> $) \subseteq (L_1^* \cup L_2^*)$。<br>
        両辺スター演算をとれば、スター演算の定義より、$($ <span class="blank-box">1</span> $)^* \subseteq (L_1^* \cup L_2^*)^* \;\cdots\text{①}$<br>
        一方、$L_1^* \subseteq (L_1 \cup L_2)^*$ および $L_2^* \subseteq (L_1 \cup L_2)^*$ より、$(L_1^* \cup L_2^*) \subseteq (L_1 \cup L_2)^*$。<br>
        このとき、$(L_1^* \cup L_2^*)^n \subseteq (L_1 \cup L_2)^*\;(n \ge 0)$ を証明する。<br>
        (i) $n=0$ のとき、$(L_1^* \cup L_2^*)^0 = \{$ <span class="blank-box">2</span> $\} \subseteq (L_1 \cup L_2)^*$<br>
        (ii) $n=k$ のとき成り立つと仮定すると、$n=k+1$ のとき、<br>
        　<span class="blank-box">3</span> $=$ <span class="blank-box">4</span> $(L_1^* \cup L_2^*) \subseteq (L_1 \cup L_2)^*(L_1 \cup L_2)^*$<br>
        　任意の言語 $L$ に対し、$L^* L^* = L^*$ であるから、<span class="blank-box">3</span> $\subseteq (L_1 \cup L_2)^*$<br>
        (iii) (i), (ii) より、$n \ge 0$ に対して、成立する。<br>
        したがって、<span class="blank-box">5</span> $\subseteq (L_1 \cup L_2)^* \;\cdots\text{②}$<br>
        ①②より、$(L_1 \cup L_2)^* =$ <span class="blank-box">5</span> であるから、$(R_1 + R_2)^* = (R_1^* + R_2^*)^*$
      </div>
    `,
    hintHtml: String.raw`<p>集合の等式は「$\subseteq$ と $\supseteq$ の両方を示す」のが基本。後半は $n$ に関する帰納法で $(L_1^* \cup L_2^*)^n$ を展開している。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $L_1 \cup L_2$</div>
        <div class="ans-chip"><strong>2</strong> $\varepsilon$</div>
        <div class="ans-chip"><strong>3</strong> $(L_1^* \cup L_2^*)^{k+1}$</div>
        <div class="ans-chip"><strong>4</strong> $(L_1^* \cup L_2^*)^k$</div>
        <div class="ans-chip"><strong>5</strong> $(L_1^* \cup L_2^*)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li>①で $(L_1 \cup L_2)^* \subseteq (L_1^* \cup L_2^*)^*$ を示す。</li>
        <li>②で全ての $n \ge 0$ に対し $(L_1^* \cup L_2^*)^n \subseteq (L_1 \cup L_2)^*$ を帰納法で示し、すべての $n$ の和集合をとることで $(L_1^* \cup L_2^*)^* \subseteq (L_1 \cup L_2)^*$ を得る。</li>
      </ul>
    `
  },
  {
    id: "R7-12",
    year: "R7",
    num: 12,
    points: 10,
    topic: "導出木・最左導出",
    lectureRef: 7,
    title: "文脈自由文法の導出木と最左導出",
    promptHtml: String.raw`
      <p>$G = (\{S, A, B\}, \{a, b, c\}, P, S)$、$P = \{S \to Sa,\; S \to AB,\; A \to bA,\; A \to b,\; B \to c\}$ において、<code>bbca</code> の導出木を求め、最左導出を示せ。</p>
    `,
    hintHtml: String.raw`<p>末尾が <code>a</code> なので最初に $S \to Sa$ を使い、次に $S \to AB$ で <code>bb</code> と <code>c</code> に分けよう！</p>`,
    answerHtml: String.raw`
      <p><strong>最左導出：</strong></p>
      <p>$$S \Rightarrow Sa \Rightarrow ABa \Rightarrow bABa \Rightarrow bbBa \Rightarrow bbca$$</p>
      <p><strong>導出木：</strong></p>
    `,
    answerDiagrams: [
      {
        type: "tree",
        caption: "bbca の導出木",
        spec: {
          width: 260, height: 245,
          nodes: [
            { id: "n0", label: "S", x: 145, y: 24 },
            { id: "n1", label: "S", x: 105, y: 80 },
            { id: "n2", label: "a", x: 195, y: 80, terminal: true },
            { id: "n3", label: "A", x: 75, y: 138 },
            { id: "n4", label: "B", x: 145, y: 138 },
            { id: "n5", label: "b", x: 45, y: 195, terminal: true },
            { id: "n6", label: "A", x: 95, y: 195 },
            { id: "n7", label: "c", x: 145, y: 195, terminal: true },
            { id: "n8", label: "b", x: 95, y: 235, terminal: true }
          ],
          edges: [
            ["n0", "n1"], ["n0", "n2"],
            ["n1", "n3"], ["n1", "n4"],
            ["n3", "n5"], ["n3", "n6"], ["n4", "n7"],
            ["n6", "n8"]
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <ol>
        <li>$\underline{S} \Rightarrow \underline{S}a$（$S \to Sa$）</li>
        <li>$\underline{S}a \Rightarrow \underline{A}Ba$（$S \to AB$）</li>
        <li>$\underline{A}Ba \Rightarrow b\underline{A}Ba$（$A \to bA$）</li>
        <li>$b\underline{A}Ba \Rightarrow bb\underline{B}a$（$A \to b$）</li>
        <li>$bb\underline{B}a \Rightarrow bbca$（$B \to c$）</li>
      </ol>
    `
  }
];
