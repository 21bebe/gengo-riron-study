window.QUESTIONS_R6 = [
  {
    id: "R6-1",
    year: "R6",
    num: 1,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 3,
    title: "正規表現の再帰的定義",
    promptHtml: String.raw`
      <p>以下の空欄を埋め、正規表現の再帰的定義を完成させよ。</p>
      <div class="proof-box">
        (i) <span class="blank-box">1</span> は正規表現<br>
        (ii) $\phi$ は正規表現<br>
        (iii) $a \in$ <span class="blank-box">2</span> に対し、<span class="blank-box">3</span> は正規表現<br>
        (iv) $R_1,\; R_2$ が正規表現であるとすると、<span class="blank-box">4</span> 、<span class="blank-box">5</span> 、$(R_1)^*$ は正規表現
      </div>
    `,
    hintHtml: String.raw`<p>授業資料3 p.1 の定義そのまま！基底は「$\varepsilon$」「$\phi$」「$\Sigma$ の各記号 $a$」、演算は「和」「連接」「スター」の3つ。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $\varepsilon$</div>
        <div class="ans-chip"><strong>2</strong> $\Sigma$</div>
        <div class="ans-chip"><strong>3</strong> $a$</div>
        <div class="ans-chip"><strong>4</strong> $R_1 + R_2$（または $(R_1 + R_2)$）</div>
        <div class="ans-chip"><strong>5</strong> $R_1 R_2$（または $(R_1 R_2)$）</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>アルファベット $\Sigma$ 上の正規表現の定義（授業資料3）：</p>
      <ul>
        <li>基底：$\phi$（空集合）、$\varepsilon$（空列）、$a \in \Sigma$（1記号）は正規表現。</li>
        <li>帰納：$R_1, R_2$ が正規表現なら、和 $(R_1 + R_2)$、連接 $(R_1 R_2)$、スター $(R_1^*)$ も正規表現（4と5は順不同）。</li>
      </ul>
    `
  },
  {
    id: "R6-2",
    year: "R6",
    num: 2,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "格子点の中点の証明（鳩の巣原理）",
    promptHtml: String.raw`
      <p>$xy$ 平面上の点で、$x$ 座標・$y$ 座標共に整数である点を格子点と呼ぶ。任意の5つの格子点を取ると、これらを結ぶ全ての線分のうち、少なくとも1つの線分の中点は、格子点である。この証明を完成させよ。</p>
      <div class="proof-box">
        格子点 $i\;(1 \le i \le 5)$ の $x$ 座標を $x_i$、$y$ 座標を $y_i$ とする。$x_i =$ <span class="blank-box">1</span> $a_i + p_i,\; y_i =$ <span class="blank-box">1</span> $b_i + q_i$ とおくと、$(p_i, q_i) \in \{(0,0), (0,1), (1,0), (1,1)\}$ である。<br>
        したがって、<span class="blank-box">2</span> 原理より、<span class="blank-box">3</span> となる $i, j\;(i \neq j)$ が存在する。格子点 $i$ と $j$ の中点は $((x_i + x_j)/2,\; (y_i + y_j)/2) = ($ <span class="blank-box">4</span> , <span class="blank-box">5</span> $)$ となり、格子点となる。
      </div>
    `,
    hintHtml: String.raw`<p>中点が格子点になるには $x_i+x_j$ と $y_i+y_j$ が共に「偶数」になればよい。つまり各座標を <strong>2で割った余り（偶奇）</strong> で分類しよう！偶奇の組は $(0,0),(0,1),(1,0),(1,1)$ の4通り。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $2$</div>
        <div class="ans-chip"><strong>2</strong> 鳩の巣</div>
        <div class="ans-chip"><strong>3</strong> $(p_i, q_i) = (p_j, q_j)$</div>
        <div class="ans-chip"><strong>4</strong> $a_i + a_j + p_i$</div>
        <div class="ans-chip"><strong>5</strong> $b_i + b_j + q_i$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>[1] $2$：</strong>偶奇（2で割った余り $p_i, q_i \in \{0, 1\}$）で分けるため $x_i = 2a_i + p_i,\; y_i = 2b_i + q_i$ と表す。</li>
        <li><strong>[2][3]：</strong>巣は4種類 $\{(0,0),(0,1),(1,0),(1,1)\}$、鳩は5点なので、鳩の巣原理より $(p_i, q_i) = (p_j, q_j)$ なる2点が存在。</li>
        <li><strong>[4][5]：</strong>$p_i = p_j$ より $\dfrac{x_i + x_j}{2} = \dfrac{(2a_i + p_i) + (2a_j + p_i)}{2} = a_i + a_j + p_i$（整数）。同様に $y$ 座標は $b_i + b_j + q_i$（整数）。</li>
      </ul>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>空欄1を $i$ と書いて -2 点減点された例あり！余りが $\{0,1\}$ なので法は $2$。`
  },
  {
    id: "R6-3",
    year: "R6",
    num: 3,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "正規表現 L(R) に含まれるかの判定",
    promptHtml: String.raw`
      <p>正規表現 $R = (1 + 00^*11)(0 + 1(0+10)^*11)^*$ とする。次の $0, 1$ 列について、$L(R)$ に含まれるものには ○、含まれないものには × をつけよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>0110</code></li>
        <li><span class="sub-label">(b)</span> <code>11011</code></li>
        <li><span class="sub-label">(c)</span> <code>001011</code></li>
        <li><span class="sub-label">(d)</span> <code>0011101</code></li>
        <li><span class="sub-label">(e)</span> <code>1001010011</code></li>
      </ul>
    `,
    hintHtml: String.raw`<p>R5問3と全く同じ正規表現 $R$！先頭 $A = 1 + 00^*11$、繰り返し $B = 0 + 1(0+10)^*11$ に区切って判定しよう。</p>`,
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
          <tr><td>(a) <code>0110</code></td><td><code>011</code> | <code>0</code> → $A$ の <code>011</code> ＋ $B$ の <code>0</code></td><td><strong>○</strong></td></tr>
          <tr><td>(b) <code>11011</code></td><td><code>1</code> | <code>1</code>(<code>0</code>)<code>11</code> → $A$ の <code>1</code> ＋ $B$ の <code>1·0·11</code></td><td><strong>○</strong></td></tr>
          <tr><td>(c) <code>001011</code></td><td>先頭が <code>0</code> なので <code>00*11</code> が必要だが <code>0010...</code> で不可。</td><td><strong>×</strong></td></tr>
          <tr><td>(d) <code>0011101</code></td><td><code>0011</code> | <code>101</code> ← 後半が <code>11</code> で終わっていないため不可。</td><td><strong>×</strong></td></tr>
          <tr><td>(e) <code>1001010011</code></td><td><code>1</code> | <code>0</code> | <code>0</code> | <code>1</code>(<code>0</code>)(<code>10</code>)(<code>0</code>)<code>11</code> → 一致！</td><td><strong>○</strong></td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "R6-4",
    year: "R6",
    num: 4,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "条件を満たす言語の正規表現の構成",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を表す正規表現を求めよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>11</code> で始まり <code>11</code> で終わり、<code>0</code> を1個以上含む列の集合</li>
        <li><span class="sub-label">(b)</span> 奇数個の <code>0</code> のあとに奇数個の <code>1</code> が続く列の集合</li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li>(a) 先頭 <code>11</code> と末尾 <code>11</code> の間に「<code>0</code> を1個以上含む任意の列」を入れる。<code>0</code> の前後には <code>0</code> も <code>1</code> も任意に来てよい！</li>
        <li>(b) 奇数個 ＝「1個 ＋ 2個ずつの繰り返し」。</li>
      </ul>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $11(0+1)^*0(0+1)^*11$</div>
        <div class="ans-chip"><strong>(b)</strong> $0(00)^*1(11)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>(a)：</strong>先頭の <code>11</code> と末尾の <code>11</code> を固定し、間に必ず1個の <code>0</code> を置き、その両脇を $(0+1)^*$ で埋めればよい（なお <code>11011</code> も含まれる）。</li>
        <li><strong>(b)：</strong>奇数個の <code>0</code> は $0(00)^*$（または $(00)^*0$）、奇数個の <code>1</code> は $1(11)^*$（または $(11)^*1$）。これらを連接する。</li>
      </ul>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>(a) を <code>1100*1*11</code> と書いて -4 点減点された例あり！これだと <code>111011</code> や <code>1101011</code> のように <code>0</code> と <code>1</code> が混ざる列を表せない。必ず $(0+1)^*0(0+1)^*$ を使うこと！`
  },
  {
    id: "R6-5",
    year: "R6",
    num: 5,
    points: 10,
    topic: "DFA構成",
    lectureRef: 4,
    title: "DFA構成（偶奇のOR／通常2進数の mod 3）",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>0</code> を偶数個あるいは <code>1</code> を偶数個含む列を受理し、状態数が4。</li>
        <li><span class="sub-label">(b)</span> $x$ を2進数とみなし、この数を3で割ると1余るとき $x$ を受理し、状態数が3。<br>
          <small>ヒント：余りが $0$ となる数、$1$ となる数、$2$ となる数を、それぞれ2倍すると余りは $0, 2, 1$ となる。</small>
        </li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li><strong>(a)</strong> 授業資料4 p.1 の4状態格子（0の偶奇 × 1の偶奇）で、「0奇かつ1奇」以外の<strong>3状態すべてを受理状態</strong>にする！</li>
        <li><strong>(b)</strong> 上の桁から読む通常の2進数では、次の桁 $b \in \{0,1\}$ を読むと値は $2r + b \pmod 3$ に更新される。状態 $s_0, s_1, s_2$ を余り $0, 1, 2$ に対応させよう。</li>
      </ul>
    `,
    answerHtml: String.raw`<p>(a) は4状態中3つが受理、(b) は余り1の $s_1$ のみが受理となる。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "(a) 0が偶数個 または 1が偶数個（4状態）",
        spec: {
          width: 340, height: 220,
          nodes: [
            { id: "s0", label: "s_0", x: 105, y: 65, start: true, accept: true, note: "0偶・1偶" },
            { id: "s1", label: "s_1", x: 245, y: 65, accept: true, note: "0偶・1奇" },
            { id: "s2", label: "s_2", x: 105, y: 170, accept: true, note: "0奇・1偶", notePos: "bottom" },
            { id: "s3", label: "s_3", x: 245, y: 170, note: "0奇・1奇", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s1", label: "1", curve: -16 },
            { from: "s1", to: "s0", label: "1", curve: -16 },
            { from: "s2", to: "s3", label: "1", curve: -16 },
            { from: "s3", to: "s2", label: "1", curve: -16 },
            { from: "s0", to: "s2", label: "0", curve: -16 },
            { from: "s2", to: "s0", label: "0", curve: -16 },
            { from: "s1", to: "s3", label: "0", curve: -16 },
            { from: "s3", to: "s1", label: "0", curve: -16 }
          ]
        }
      },
      {
        type: "automaton",
        caption: "(b) 通常の2進数（上位桁から）で mod 3 = 1（3状態）",
        spec: {
          width: 420, height: 155,
          nodes: [
            { id: "s0", label: "s_0", x: 95, y: 90, start: true, note: "余0", notePos: "bottom" },
            { id: "s1", label: "s_1", x: 215, y: 90, accept: true, note: "余1", notePos: "bottom" },
            { id: "s2", label: "s_2", x: 335, y: 90, note: "余2", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "top", loopSize: 32 },
            { from: "s0", to: "s1", label: "1", curve: -18 },
            { from: "s1", to: "s0", label: "1", curve: -18 },
            { from: "s1", to: "s2", label: "0", curve: -18 },
            { from: "s2", to: "s1", label: "0", curve: -18 },
            { from: "s2", to: "s2", label: "1", loopDir: "right", loopSize: 32 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <p><strong>(b) の遷移計算（$r' = (2r + b) \bmod 3$）：</strong></p>
      <ul>
        <li>$s_0\;(r=0)$：<code>0</code> → $0\;(s_0)$、<code>1</code> → $1\;(s_1)$</li>
        <li>$s_1\;(r=1)$：<code>0</code> → $2\;(s_2)$、<code>1</code> → $3 \equiv 0\;(s_0)$</li>
        <li>$s_2\;(r=2)$：<code>0</code> → $4 \equiv 1\;(s_1)$、<code>1</code> → $5 \equiv 2\;(s_2)$</li>
      </ul>
      <p>※R5・R7の「低い桁から読む（6状態）」と違い、通常の「高い桁から読む」場合は3状態で済む！問題文の読み順を必ず確認しよう。</p>
    `
  },
  {
    id: "R6-6",
    year: "R6",
    num: 6,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 6,
    title: "DFAのループ存在定理（反復補題の原型）",
    promptHtml: String.raw`
      <p>決定性有限オートマトン $M$ に対し、状態数を $n$ とする。入力列 $x\;(|x| \ge n)$ のとき、$x = \alpha\beta\gamma\;(\beta \neq \varepsilon)$ とかけ、$\alpha\beta^i\gamma\;(i \ge 0)$ も同じ状態で止まることを示したい。空欄に適切な語を入れよ。</p>
      <div class="proof-box">
        $M$ が $x$ の $i$ 文字目まで読んだときに止まる状態を $q_i$ とする。$|x| \ge n$ であれば、少なくとも $q_0$ から <span class="blank-box">1</span> まで、<span class="blank-box">2</span> 個の状態がある。一方、$M$ の状態数は $n$ なので、<span class="blank-box">2.2</span> 原理により、<span class="blank-box">3</span> $(i < j)$ となる $i, j$ が存在する。$\alpha$ を $x$ の先頭から <span class="blank-box">4</span> 文字目まで、$\beta$ を <span class="blank-box">4</span> $+1$ 文字目から <span class="blank-box">5</span> 文字目まで、$\gamma$ を <span class="blank-box">5</span> 文字目より後ろの列とすると、$\delta(s_0, \alpha) = q_i,\; \delta(q_i, \beta) = q_i,\; \delta(q_i, \gamma) = q_n$ となるので、$\alpha\beta^i\gamma$ も $x$ と同じ状態で止まる。
      </div>
    `,
    hintHtml: String.raw`<p>$q_0$（0文字目＝初期状態）から $q_n$（$n$文字目）まで数えると、全部で何個の状態があるか？ $0, 1, \dots, n$ は $n+1$ 個！</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $q_n$</div>
        <div class="ans-chip"><strong>2</strong> $n+1$</div>
        <div class="ans-chip"><strong>2.2</strong> 鳩の巣</div>
        <div class="ans-chip"><strong>3</strong> $q_i = q_j$</div>
        <div class="ans-chip"><strong>4</strong> $i$</div>
        <div class="ans-chip"><strong>5</strong> $j$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li>状態遷移の列 $q_0, q_1, \dots, q_n$ は合計 $n+1$ 個あるが、$M$ の状態の種類は $n$ 個しかない。</li>
        <li>鳩の巣原理より、同じ状態を踏む位置 $i < j$（$q_i = q_j$）が存在する。</li>
        <li>$i$ 文字目までを $\alpha$、$i+1 \sim j$ 文字目を $\beta$（ループ部分）、それ以降を $\gamma$ と置くと、$\beta$ を何回繰り返しても $q_i$ に戻る。</li>
      </ul>
    `
  },
  {
    id: "R6-7",
    year: "R6",
    num: 7,
    points: 6,
    topic: "状態最小化",
    lectureRef: 5,
    title: "決定性有限オートマトンの状態数最小化",
    promptHtml: String.raw`<p>下図に示す決定性有限オートマトンの状態数を最小化せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R6 問7 与えられたDFA（5状態）",
        spec: {
          width: 460, height: 225,
          nodes: [
            { id: "s0", label: "s_0", x: 90, y: 65, start: true },
            { id: "s1", label: "s_1", x: 225, y: 65 },
            { id: "s2", label: "s_2", x: 360, y: 65 },
            { id: "s3", label: "s_3", x: 90, y: 175 },
            { id: "s4", label: "s_4", x: 360, y: 175, accept: true }
          ],
          edges: [
            { from: "s0", to: "s1", label: "1" },
            { from: "s0", to: "s3", label: "0", curve: -14 },
            { from: "s3", to: "s0", label: "0", curve: -14 },
            { from: "s3", to: "s2", label: "1", labelPos: 0.28 },
            { from: "s1", to: "s2", label: "0" },
            { from: "s1", to: "s4", label: "1", labelPos: 0.35 },
            { from: "s2", to: "s2", label: "0", loopDir: "right", loopSize: 32 },
            { from: "s2", to: "s4", label: "1", curve: -14 },
            { from: "s4", to: "s2", label: "1", curve: -14 },
            { from: "s4", to: "s0", label: "0", labelPos: 0.35, labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>受理状態は $s_4$ のみ！非受理状態 $\{s_0, s_1, s_2, s_3\}$ の中で、<code>1</code> で $s_4$ に行く組と行かない組に分けてみよう。</p>`,
    answerHtml: String.raw`<p>$s_1 \equiv s_2$、$s_0 \equiv s_3$ より、状態数 <strong>3</strong> に最小化される。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "最小化後のDFA（3状態：{s_0, s_3}, {s_1, s_2}, s_4）",
        spec: {
          width: 360, height: 215,
          nodes: [
            { id: "s0", label: "s_0", x: 180, y: 65, start: true },
            { id: "s1", label: "s_1", x: 105, y: 170 },
            { id: "s4", label: "s_4", x: 255, y: 170, accept: true }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "right", loopSize: 32 },
            { from: "s0", to: "s1", label: "1", labelSide: 1 },
            { from: "s1", to: "s1", label: "0", loopDir: "bottom-left", loopSize: 32 },
            { from: "s1", to: "s4", label: "1", curve: -16 },
            { from: "s4", to: "s1", label: "1", curve: -16 },
            { from: "s4", to: "s0", label: "0", labelSide: 1 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th><th>等価グループ</th></tr></thead>
        <tbody>
          <tr><td>$s_0$</td><td>×</td><td>$s_3$</td><td>$s_1$</td><td>$A = \{s_0, s_3\}$</td></tr>
          <tr><td>$s_1$</td><td>×</td><td>$s_2$</td><td>$s_4$</td><td>$B = \{s_1, s_2\}$</td></tr>
          <tr><td>$s_2$</td><td>×</td><td>$s_2$</td><td>$s_4$</td><td>$B = \{s_1, s_2\}$</td></tr>
          <tr><td>$s_3$</td><td>×</td><td>$s_0$</td><td>$s_2$</td><td>$A = \{s_0, s_3\}$</td></tr>
          <tr class="accept-row"><td>$s_4$</td><td>○</td><td>$s_0$</td><td>$s_2$</td><td>$C = \{s_4\}$</td></tr>
        </tbody>
      </table>
      <ol>
        <li>$s_1$ と $s_2$ は共に非受理で <code>0</code>→$s_2$、<code>1</code>→$s_4$ と完全一致 ⇒ <strong>$s_1 \equiv s_2$</strong>。</li>
        <li>$s_0$ と $s_3$ は共に非受理で <code>0</code>→$\{s_3, s_0\}$ 互いに遷移、<code>1</code>→$s_1 / s_2$（等価！）⇒ <strong>$s_0 \equiv s_3$</strong>。</li>
        <li>$s_0$ と $s_1$ は <code>1</code> で非受理 vs 受理($s_4$) なので非等価。よって3状態 $\{s_0, s_1, s_4\}$ が最小。</li>
      </ol>
    `
  },
  {
    id: "R6-8",
    year: "R6",
    num: 8,
    points: 10,
    topic: "NFA→DFA・ε-NFA",
    lectureRef: 6,
    title: "群状態を用いた NFA → DFA 変換",
    promptHtml: String.raw`<p>下図に示す非決定性有限オートマトンについて、群状態を用い、それと同じ言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R6 問8 与えられたNFA",
        spec: {
          width: 340, height: 225,
          nodes: [
            { id: "s0", label: "s_0", x: 100, y: 65, start: true, accept: true },
            { id: "s1", label: "s_1", x: 245, y: 65, accept: true },
            { id: "s3", label: "s_3", x: 100, y: 175 },
            { id: "s2", label: "s_2", x: 245, y: 175 }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "top-right", loopSize: 30 },
            { from: "s0", to: "s1", label: "1" },
            { from: "s0", to: "s3", label: "0", labelSide: 1 },
            { from: "s1", to: "s1", label: "1", loopDir: "top-right", loopSize: 30 },
            { from: "s1", to: "s2", label: "1", curve: -18 },
            { from: "s2", to: "s1", label: "1", curve: -18 },
            { from: "s2", to: "s2", label: "0", loopDir: "bottom-left", loopSize: 30 },
            { from: "s2", to: "s3", label: "1", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>状態数が多い（$\phi$ を含めて8状態）ので、必ず遷移表を作って漏れなく列挙してから図を描こう！$s_0, s_1$ のどちらかを含む群状態が受理状態。</p>`,
    answerHtml: String.raw`<p>到達可能な群状態は $\phi$ を含め <strong>8状態</strong>（うち6状態が受理）。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "構成されたDFA（群状態・8状態）",
        spec: {
          width: 580, height: 310,
          nodes: [
            { id: "q0", label: "{s_0}", x: 90, y: 58, start: true, accept: true, rx: 28, ry: 20 },
            { id: "q1", label: "{s_1}", x: 250, y: 58, accept: true, rx: 28, ry: 20 },
            { id: "q2", label: "{s_2}", x: 400, y: 58, rx: 28, ry: 20 },
            { id: "phi", label: "φ", x: 525, y: 58, rx: 22, ry: 20 },
            { id: "q03", label: "{s_0,s_3}", x: 90, y: 165, accept: true, rx: 40, ry: 22 },
            { id: "q12", label: "{s_1,s_2}", x: 250, y: 165, accept: true, rx: 40, ry: 22 },
            { id: "q13", label: "{s_1,s_3}", x: 425, y: 165, accept: true, rx: 40, ry: 22 },
            { id: "q123", label: "{s_1,s_2,s_3}", x: 250, y: 265, accept: true, rx: 52, ry: 22 }
          ],
          edges: [
            { from: "q0", to: "q03", label: "0", labelSide: 1 },
            { from: "q0", to: "q1", label: "1" },
            { from: "q1", to: "phi", label: "0", curve: -36 },
            { from: "q1", to: "q12", label: "1" },
            { from: "q03", to: "q03", label: "0", loopDir: "left", loopSize: 30 },
            { from: "q03", to: "q1", label: "1", labelPos: 0.35 },
            { from: "q12", to: "q2", label: "0", labelPos: 0.35 },
            { from: "q12", to: "q123", label: "1" },
            { from: "q2", to: "q2", label: "0", loopDir: "top", loopSize: 28 },
            { from: "q2", to: "q13", label: "1" },
            { from: "q13", to: "phi", label: "0", labelSide: 1 },
            { from: "q13", to: "q12", label: "1" },
            { from: "q123", to: "q2", label: "0", curve: 45, labelPos: 0.65 },
            { from: "q123", to: "q123", label: "1", loopDir: "bottom", loopSize: 28 },
            { from: "phi", to: "phi", label: "0,1", loopDir: "bottom", loopSize: 28 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>群状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th></tr></thead>
        <tbody>
          <tr class="accept-row"><td>$\{s_0\}$</td><td>○</td><td>$\{s_0, s_3\}$</td><td>$\{s_1\}$</td></tr>
          <tr class="accept-row"><td>$\{s_0, s_3\}$</td><td>○</td><td>$\{s_0, s_3\}$</td><td>$\{s_1\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1\}$</td><td>○</td><td>$\phi$</td><td>$\{s_1, s_2\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1, s_2\}$</td><td>○</td><td>$\{s_2\}$</td><td>$\{s_1, s_2, s_3\}$</td></tr>
          <tr><td>$\{s_2\}$</td><td>×</td><td>$\{s_2\}$</td><td>$\{s_1, s_3\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1, s_2, s_3\}$</td><td>○</td><td>$\{s_2\}$</td><td>$\{s_1, s_2, s_3\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1, s_3\}$</td><td>○</td><td>$\phi$</td><td>$\{s_1, s_2\}$</td></tr>
          <tr><td>$\phi$</td><td>×</td><td>$\phi$</td><td>$\phi$</td></tr>
        </tbody>
      </table>
      <p>※元のNFAで $s_3$ から出る矢印は1本もない（$\delta(s_3,0)=\delta(s_3,1)=\phi$）ので、$s_3$ が混ざっても遷移先は増えないのがポイント！</p>
    `
  },
  {
    id: "R6-9",
    year: "R6",
    num: 9,
    points: 10,
    topic: "FA→正規表現（連立方程式）",
    lectureRef: 6,
    title: "連立方程式による FA → 正規表現変換",
    promptHtml: String.raw`
      <p>下図の有限オートマトンで、$s_0$ から $s_i$ へ導く記号列を $T_i$ とする。以下の問いに答えよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> $s_0$ は初期状態なので $T_0$ の右辺に $\varepsilon$ を含み、$s_2, s_3$ から <code>0</code> で $s_0$ に移るから、$T_0 = \varepsilon + T_2 0 + T_3 0$ と表せる。$T_2$ についても同様に求めよ。</li>
        <li><span class="sub-label">(b)</span> $T_3$ についても同様に求めよ。</li>
        <li><span class="sub-label">(c)</span> $T_2$ の式を $T_3$ の式に代入し、$T_3$ について解け。</li>
        <li><span class="sub-label">(d)</span> $T_2$ の式および $T_3$ の解を $T_0$ の式に代入し、$T_0$ について解き、図の有限オートマトンが認識する言語を表す正規表現 $R$ を求めよ。</li>
      </ul>
    `,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R6 問9 有限オートマトン（受理状態は s_0）",
        spec: {
          width: 360, height: 225,
          nodes: [
            { id: "s0", label: "s_0", x: 100, y: 60, start: true, accept: true },
            { id: "s1", label: "s_1", x: 255, y: 60 },
            { id: "s2", label: "s_2", x: 100, y: 175 },
            { id: "s3", label: "s_3", x: 255, y: 175 }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0" },
            { from: "s1", to: "s1", label: "0,1", loopDir: "right", loopSize: 32 },
            { from: "s0", to: "s2", label: "1", curve: -18 },
            { from: "s2", to: "s0", label: "0", curve: -18 },
            { from: "s2", to: "s3", label: "1" },
            { from: "s3", to: "s3", label: "1", loopDir: "right", loopSize: 32 },
            { from: "s3", to: "s0", label: "0", labelPos: 0.45 }
          ]
        }
      }
    ],
    hintHtml: String.raw`<p>$s_1$ は一度入ると出られない死状態なので、$T_0$ を求める式には一切関係しない！$T_2 \to T_3 \to T_0$ の順に代入しよう。</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $T_2 = T_0 1$</div>
        <div class="ans-chip"><strong>(b)</strong> $T_3 = T_2 1 + T_3 1$</div>
        <div class="ans-chip"><strong>(c)</strong> $T_3 = T_0 11 1^*$</div>
        <div class="ans-chip"><strong>(d)</strong> $R = (10 + 111^*0)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>(a)</strong> $s_2$ への遷移は $s_0 \xrightarrow{1} s_2$ のみ ⇒ $T_2 = T_0 1$。</li>
        <li><strong>(b)</strong> $s_3$ への遷移は $s_2 \xrightarrow{1} s_3,\; s_3 \xrightarrow{1} s_3$ ⇒ $T_3 = T_2 1 + T_3 1$。</li>
        <li><strong>(c)</strong> 代入して $T_3 = T_0 11 + T_3 1$。$X = P + XQ \Rightarrow X = PQ^*$ より $T_3 = T_0 11 1^*$。</li>
        <li><strong>(d)</strong> $T_0 = \varepsilon + T_0 10 + T_0 11 1^* 0 = \varepsilon + T_0(10 + 111^*0)$。よって $R = T_0 = (10 + 111^*0)^*$（簡約すると $(11^*0)^*$ とも同値だが、代入のまま答えるのが安全）。</li>
      </ul>
    `
  },
  {
    id: "R6-10",
    year: "R6",
    num: 10,
    points: 10,
    topic: "導出木・最左導出",
    lectureRef: 7,
    title: "文脈自由文法の導出木と最左導出",
    promptHtml: String.raw`
      <p>$G = (\{S, A, B\}, \{a, b\}, P, S)$、$P = \{S \to AB,\; A \to BS,\; A \to b,\; B \to SA,\; B \to a\}$ において、<code>bbab</code> の導出木を求め、最左導出を示せ。</p>
    `,
    hintHtml: String.raw`<p>$S \to AB$ からスタート。先頭が <code>b</code> なので左の $A \to b$ を使うと、右の $B$ から <code>bab</code> を作ればよい。$B \to SA \to ABA$ で <code>b</code> + <code>a</code> + <code>b</code> が作れる！</p>`,
    answerHtml: String.raw`
      <p><strong>最左導出：</strong></p>
      <p>$$S \Rightarrow AB \Rightarrow bB \Rightarrow bSA \Rightarrow bABA \Rightarrow bbBA \Rightarrow bbaA \Rightarrow bbab$$</p>
      <p><strong>導出木：</strong></p>
    `,
    answerDiagrams: [
      {
        type: "tree",
        caption: "bbab の導出木",
        spec: {
          width: 280, height: 265,
          nodes: [
            { id: "n0", label: "S", x: 140, y: 24 },
            { id: "n1", label: "A", x: 80, y: 78 },
            { id: "n2", label: "B", x: 190, y: 78 },
            { id: "n3", label: "b", x: 80, y: 132, terminal: true },
            { id: "n4", label: "S", x: 150, y: 132 },
            { id: "n5", label: "A", x: 230, y: 132 },
            { id: "n6", label: "A", x: 120, y: 186 },
            { id: "n7", label: "B", x: 180, y: 186 },
            { id: "n8", label: "b", x: 230, y: 186, terminal: true },
            { id: "n9", label: "b", x: 120, y: 240, terminal: true },
            { id: "n10", label: "a", x: 180, y: 240, terminal: true }
          ],
          edges: [
            ["n0", "n1"], ["n0", "n2"],
            ["n1", "n3"], ["n2", "n4"], ["n2", "n5"],
            ["n4", "n6"], ["n4", "n7"], ["n5", "n8"],
            ["n6", "n9"], ["n7", "n10"]
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <p>常に<strong>最も左にある変数</strong>を書き換えることを確認しながら進める：</p>
      <ol>
        <li>$\underline{S} \Rightarrow \underline{A}B$（$S \to AB$）</li>
        <li>$\underline{A}B \Rightarrow b\underline{B}$（$A \to b$）</li>
        <li>$b\underline{B} \Rightarrow b\underline{S}A$（$B \to SA$）</li>
        <li>$b\underline{S}A \Rightarrow b\underline{A}BA$（$S \to AB$）</li>
        <li>$b\underline{A}BA \Rightarrow bb\underline{B}A$（$A \to b$）</li>
        <li>$bb\underline{B}A \Rightarrow bba\underline{A}$（$B \to a$）</li>
        <li>$bba\underline{A} \Rightarrow bbab$（$A \to b$）</li>
      </ol>
    `
  },
  {
    id: "R6-11",
    year: "R6",
    num: 11,
    points: 4,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "正規表現の恒等式 (R*)* = R* の証明",
    promptHtml: String.raw`
      <p>$R$ を正規表現とする。$(R^*)^* = R^*$ を証明したい。空欄に適切な語を入れよ。</p>
      <div class="proof-box">
        $L = L(R)$ とし、$(L^*)^* \subseteq L^*$ かつ $(L^*)^* \supseteq L^*$ を示す。ここで、$(L^*)^* \supseteq L^*$ は明らか。<br>
        任意の $x \in (L^*)^*$ に対し、ある $n, m$ が存在して、$x \in$ <span class="blank-box">1</span> となる。<span class="blank-box">1</span> は $L$ を $n$ 個連接した言語を $m$ 個連接した言語であるので、<span class="blank-box">2</span> と書くことができ、$x \in$ <span class="blank-box">2</span> $\subset L^*$ となるので、$(L^*)^* \subseteq L^*$ である。
      </div>
    `,
    hintHtml: String.raw`<p>問題文中の「$L$ を $n$ 個連接した言語を $m$ 個連接した言語」をそのまま記号で書こう！</p>`,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $(L^n)^m$</div>
        <div class="ans-chip"><strong>2</strong> $L^{nm}$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>スター演算の定義 $L^* = \bigcup_{k \ge 0} L^k$ より、$(L^*)^*$ の元 $x$ は $L^*$ の元を $m$ 個連接したもの。各元は $L$ の元を何個か連接したものなので、$(L^n)^m = L^{nm} \subseteq L^*$ として包含関係が示せる。</p>
    `
  }
];
