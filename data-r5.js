window.QUESTIONS_R5 = [
  {
    id: "R5-1",
    year: "R5",
    num: 1,
    points: 8,
    topic: "再帰的定義・証明",
    lectureRef: 1,
    title: "列の逆 x^R の再帰的定義",
    promptHtml: String.raw`
      <p>以下の空欄を埋め、$x^{\mathrm{R}}$ の再帰的定義を完成させよ。</p>
      <div class="proof-box">
        (i) $\;$ <span class="blank-box">1</span> $^{\mathrm{R}} =$ <span class="blank-box">1</span><br>
        (ii) $a \in \Sigma,\; x \in$ <span class="blank-box">2</span> に対し、$( \;$ <span class="blank-box">3</span> $\; )^{\mathrm{R}} =$ <span class="blank-box">4</span>
      </div>
    `,
    hintHtml: String.raw`
      <p>授業資料1（例題1.2）の再帰的定義を思い出そう。</p>
      <ul>
        <li>基底ステップ(i)は長さ0の列（空列）の逆。</li>
        <li>再帰ステップ(ii)は「任意の列 $x$」と「1記号 $a$」を連接したものの逆を、$x^{\mathrm{R}}$ を使って表す。</li>
      </ul>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $\varepsilon$</div>
        <div class="ans-chip"><strong>2</strong> $\Sigma^*$</div>
        <div class="ans-chip"><strong>3</strong> $xa$（または $ax$）</div>
        <div class="ans-chip"><strong>4</strong> $ax^{\mathrm{R}}$（または $x^{\mathrm{R}}a$）</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>列の逆 $x^{\mathrm{R}}$ は「後ろから順に読んだ列」であり、次のように再帰的に定義できる。</p>
      <ul>
        <li><strong>(i) 基底：</strong>長さ $0$ の列は空列 $\varepsilon$ のみで、$\varepsilon^{\mathrm{R}} = \varepsilon$。</li>
        <li><strong>(ii) 再帰：</strong>任意の列 $x \in \Sigma^*$ と記号 $a \in \Sigma$ に対し、末尾に $a$ を付けた列 $xa$ の逆は先頭に $a$ が来るので $(xa)^{\mathrm{R}} = ax^{\mathrm{R}}$。</li>
      </ul>
      <p>なお、授業資料1（例題1.2）のように先頭に $a$ を付ける形 $(ax)^{\mathrm{R}} = x^{\mathrm{R}}a$ でも完全に同値で正解となる（3と4の対応を揃えること）。</p>
    `,
    mistakeHtml: String.raw`<strong>注意：</strong>空欄2を $\Sigma$ と書いてしまうミスが多い。$x$ は「1文字」ではなく「任意の列」なので必ず $\Sigma^*$ と書くこと。`
  },
  {
    id: "R5-2",
    year: "R5",
    num: 2,
    points: 10,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "分数 n/m の循環小数証明（鳩の巣原理）",
    promptHtml: String.raw`
      <p>分数 $\dfrac{n}{m}$（$m, n$ は互いに素な正整数）を小数で表したとき、有限小数でなければ、ある桁以降は必ず循環する。この証明を完成させよ。</p>
      <div class="proof-box">
        $n$ を $m$ で割ったあまりを $a_1$ とし、$a_i \times$ <span class="blank-box">1</span> を $m$ で割ったあまりを $a_{i+1}$ とする。このとき、$a_i \in \{1, 2, \dots,$ <span class="blank-box">2</span> $\}$。一方、$\dfrac{n}{m}$ は有限小数でないなら、$\{a_i\}$ は無限数列となる。そこで、少なくとも $a_1$ から <span class="blank-box">3</span> を考えると、<span class="blank-box">4</span> 原理より、$a_i = a_j$ となる $i, j\;(i < j)$ が存在する。したがって $a_j$ 以降は <span class="blank-box">5</span> からの繰り返しとなる。つまり、循環小数となる。
      </div>
    `,
    hintHtml: String.raw`
      <p>筆算で割り算を続けるとき、余りに何を掛けて次の桁を求めるか考えよう。余りが $0$ にならない（有限小数でない）ので、余りの種類は $m-1$ 通りしかない。</p>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $10$</div>
        <div class="ans-chip"><strong>2</strong> $m-1$</div>
        <div class="ans-chip"><strong>3</strong> $a_m$</div>
        <div class="ans-chip"><strong>4</strong> 鳩の巣</div>
        <div class="ans-chip"><strong>5</strong> $a_i$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>[1] $10$：</strong>10進小数の筆算では、前の余り $a_i$ を $10$ 倍して $m$ で割り、次の商と余り $a_{i+1}$ を求める。</li>
        <li><strong>[2] $m-1$：</strong>$m$ で割った余りは $0, 1, \dots, m-1$ だが、有限小数でない（割り切れない）ため $0$ は現れない。よって $a_i \in \{1, 2, \dots, m-1\}$（$m-1$ 種類）。</li>
        <li><strong>[3] $a_m$・[4] 鳩の巣：</strong>巣（余りの種類）が $m-1$ 個なので、鳩を $m$ 個（$a_1, a_2, \dots, a_m$）用意すれば、鳩の巣原理により必ず同じ値 $a_i = a_j\;(i < j)$ が現れる。</li>
        <li><strong>[5] $a_i$：</strong>$a_{k+1}$ は $a_k$ のみで決まるため、$a_j = a_i$ となった瞬間から $a_i, a_{i+1}, \dots, a_{j-1}$ が無限に繰り返される。</li>
      </ul>
    `,
    mistakeHtml: String.raw`<strong>実際の答案での減点ポイント：</strong>空欄5を $a_1$ と書いて -2 点減点された例あり！循環は必ずしも第1位 $a_1$ から始まるとは限らず（例：$1/6 = 0.1666\dots$）、一致した値 $a_i$ から繰り返す。`
  },
  {
    id: "R5-3",
    year: "R5",
    num: 3,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "正規表現 L(R) に含まれるかの判定",
    promptHtml: String.raw`
      <p>正規表現 $R = (1 + 00^*11)(0 + 1(0+10)^*11)^*$ とする。次の $0, 1$ 列について、$L(R)$ に含まれるものには ○、含まれないものには × をつけよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>1111</code></li>
        <li><span class="sub-label">(b)</span> <code>00101011</code></li>
        <li><span class="sub-label">(c)</span> <code>001110011</code></li>
        <li><span class="sub-label">(d)</span> <code>1011111011</code></li>
        <li><span class="sub-label">(e)</span> <code>1001100111</code></li>
      </ul>
    `,
    hintHtml: String.raw`
      <p>$R$ を「先頭パーツ $A$」と「繰り返しパーツ $B^*$」に分解して、左から区切りを入れてみよう。</p>
      <ul>
        <li>先頭 $A = 1 + 00^*11$：<code>1</code> または「<code>0</code>が1個以上＋<code>11</code>」</li>
        <li>繰り返し $B = 0 + 1(0+10)^*11$：<code>0</code> または「<code>1</code> ＋ (<code>0</code>か<code>10</code>の任意回) ＋ <code>11</code>」</li>
      </ul>
      <p>ポイント：$B$ の後半ブロックは <code>1</code> で始まり、途中で <code>11</code> が出た瞬間にそのブロックが終了する（<code>(0+10)*</code> の中に <code>11</code> は作れない！）。</p>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> ○</div>
        <div class="ans-chip"><strong>(b)</strong> ×</div>
        <div class="ans-chip"><strong>(c)</strong> ○</div>
        <div class="ans-chip"><strong>(d)</strong> ○</div>
        <div class="ans-chip"><strong>(e)</strong> ×</div>
      </div>
    `,
    explanationHtml: String.raw`
      <p>$A = (1 + 00^*11)$、$B = (0 + 1(0+10)^*11)$ として区切りを入れる（縦棒 <code>|</code> がパーツ境界）。</p>
      <table class="mini-table">
        <thead><tr><th>問題</th><th>区切り・判定理由</th><th>答</th></tr></thead>
        <tbody>
          <tr><td>(a) <code>1111</code></td><td><code>1</code> | <code>1</code>(ε)<code>11</code> → $A$ の <code>1</code> ＋ $B$ の <code>1·ε·11</code></td><td><strong>○</strong></td></tr>
          <tr><td>(b) <code>00101011</code></td><td>先頭が <code>0</code> なら <code>00*11</code> に一致する必要があるが、<code>00</code> の直後が <code>10</code> なので不可。</td><td><strong>×</strong></td></tr>
          <tr><td>(c) <code>001110011</code></td><td><code>0011</code> | <code>1</code>(<code>0</code>)(<code>0</code>)<code>11</code> → $A$ の <code>0011</code> ＋ $B$ の <code>1·0·0·11</code></td><td><strong>○</strong></td></tr>
          <tr><td>(d) <code>1011111011</code></td><td><code>1</code> | <code>0</code> | <code>1</code>(ε)<code>11</code> | <code>1</code>(<code>10</code>)<code>11</code> → すべて $A, B$ で構成可能</td><td><strong>○</strong></td></tr>
          <tr><td>(e) <code>1001100111</code></td><td><code>1</code> | <code>0</code> | <code>0</code> | <code>1</code>(<code>10</code>)(<code>0</code>)<code>11</code> | <code>1</code> ← 末尾に <code>1</code> が1個余る（$B$ は単独の <code>1</code> を作れない）。</td><td><strong>×</strong></td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "R5-4",
    year: "R5",
    num: 4,
    points: 6,
    topic: "再帰的定義・証明",
    lectureRef: 2,
    title: "正規表現の恒等式 R(SR)* = (RS)*R の証明",
    promptHtml: String.raw`
      <p>$R, S$ を正規表現とするとき、$R(SR)^* = (RS)^*R$ であることを示したい。空欄に適切な語を入れよ。</p>
      <div class="proof-box">
        $L_1 = L(R),\; L_2 = L(S)$ とする。<br>
        $L_1(L_2 L_1)^n = (L_1 L_2)^n L_1$ が $n \ge 0$ について成り立つことを証明する。<br>
        $n = 0$ のとき、<br>
        　左辺 $= L_1\{$ <span class="blank-box">1</span> $\} = L_1 = \{$ <span class="blank-box">1</span> $\}L_1 =$ 右辺<br>
        $n = k$ のとき成立を仮定すると、$n = k+1$ のとき、<br>
        　左辺 $= L_1(L_2 L_1)^{k+1} = L_1(L_2 L_1)(L_2 L_1)^k$<br>
        　　　 $= ($ <span class="blank-box">2</span> $)(L_1(L_2 L_1)^k) = ($ <span class="blank-box">2</span> $)($ <span class="blank-box">3</span> $) = (L_1 L_2)^{k+1} L_1 =$ 右辺<br>
        よって、$n = k+1$ のときも成立。<br>
        $\forall n \ge 0,\; L_1(L_2 L_1)^n = (L_1 L_2)^n L_1$ が成り立つので、$L_1(L_2 L_1)^* = (L_1 L_2)^* L_1$ が成り立つ。よって、$R(SR)^* = (RS)^*R$。
      </div>
    `,
    hintHtml: String.raw`
      <p>言語の0乗は $L^0 = \{\varepsilon\}$。$n=k+1$ の式変形では、連接の結合律を使って括弧をずらし、帰納法の仮定 $L_1(L_2 L_1)^k = (L_1 L_2)^k L_1$ を適用しよう。</p>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $\varepsilon$</div>
        <div class="ans-chip"><strong>2</strong> $L_1 L_2$</div>
        <div class="ans-chip"><strong>3</strong> $(L_1 L_2)^k L_1$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>[1] $\varepsilon$：</strong>任意の言語 $L$ に対し $L^0 = \{\varepsilon\}$ かつ $L\{\varepsilon\} = \{\varepsilon\}L = L$。</li>
        <li><strong>[2] $L_1 L_2$：</strong>$L_1(L_2 L_1)(L_2 L_1)^k = (L_1 L_2) \cdot L_1(L_2 L_1)^k$ と結合律で括弧を付け替える。</li>
        <li><strong>[3] $(L_1 L_2)^k L_1$：</strong>$n=k$ の仮定より $L_1(L_2 L_1)^k = (L_1 L_2)^k L_1$ を代入すると $(L_1 L_2)(L_1 L_2)^k L_1 = (L_1 L_2)^{k+1} L_1$ となる。</li>
      </ul>
    `
  },
  {
    id: "R5-5",
    year: "R5",
    num: 5,
    points: 10,
    topic: "正規表現の判定・構成",
    lectureRef: 3,
    title: "条件を満たす言語の正規表現の構成",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を表す正規表現を求めよ。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> 部分列として <code>111</code> を含む列の集合</li>
        <li><span class="sub-label">(b)</span> 含まれる <code>0</code> のすぐあとに、少なくとも2個の連続した <code>1</code> が続くような列の集合</li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li>(a) <code>111</code> の前後に任意の列 $(0+1)^*$ を置けばよい。</li>
        <li>(b) 「<code>0</code> が出たら必ず直後に <code>11</code> をセットで出す」と考えると、最小の部品は <code>1</code> と <code>011</code>（または <code>0111*</code>）の2種類！空列 $\varepsilon$ も条件を満たす（0が含まれないため）。</li>
      </ul>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $(0+1)^*111(0+1)^*$</div>
        <div class="ans-chip"><strong>(b)</strong> $(1 + 011)^*$（または $(1 + 0111^*)^*$）</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>(a)：</strong>授業資料3の例題2.1(iii)と同型。どこかに <code>111</code> があればよいので、前後を任意の列 $(0+1)^*$ で挟む。</li>
        <li><strong>(b)：</strong>任意の条件適合列を「<code>0</code> の直前」と「<code>011</code> の直後」で区切ると、各ブロックは <code>011</code> か単独の <code>1</code> になる。余った <code>1</code> は <code>1</code> の繰り返しで吸収できるため、$(1 + 011)^*$ と $(1 + 0111^*)^*$ は完全に同じ言語を表す。</li>
      </ul>
    `
  },
  {
    id: "R5-6",
    year: "R5",
    num: 6,
    points: 20,
    topic: "DFA構成",
    lectureRef: 4,
    title: "DFA構成（連続する1／低い桁から読む2進数の mod 3）",
    promptHtml: String.raw`
      <p>次の $\Sigma = \{0, 1\}$ 上の言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>
      <ul class="sub-list">
        <li><span class="sub-label">(a)</span> <code>1</code> があれば必ず2個以上続いている列の集合を認識し、状態数が4。</li>
        <li><span class="sub-label">(b) i.</span> $2^{2n+1} = 3k+2$（$n$ は非負の整数）となる偶数 $k$ が存在することを、$n$ についての数学的帰納法を用いて証明した。空欄を埋めよ。
          <div class="proof-box">
            (i) $n=0$ のとき、$2^{2n+1} = 2$ となり、$k =$ <span class="blank-box">1</span> で成立する。<br>
            (ii) $n=m\;(m \ge 0)$ のとき成立を仮定する。<br>
            $n=m+1$ のとき、$2^{2(m+1)+1} =$ <span class="blank-box">2</span> $\times 2^{2m+1} =$ <span class="blank-box">2</span> $($ <span class="blank-box">3</span> $) = 3($ <span class="blank-box">4</span> $) + 2$ より、$k' =$ <span class="blank-box">4</span> とおけば $m+1$ のときも成立する。<br>
            (iii) (i), (ii) よりすべての $n$ について成立する。<br>
            また、これより、$2^{2n} = 2^{-1} \times 2^{2n+1} = 3$ <span class="blank-box">5</span> $+ 1$ となり、$k$ は偶数だから、$2^{2n} = 3k'+1$ となる整数 $k'$ が存在することがわかる。
          </div>
        </li>
        <li><span class="sub-label">(b) ii.</span> 上記を利用し、$x \in \Sigma^*$ を2進数を低い桁から順に並べたもの（例：$4_{(10)} \to 001$）と考えたとき、この2進数を3で割ると余りが1になるとき、$x$ を受理し、状態数が6。</li>
      </ul>
    `,
    hintHtml: String.raw`
      <ul>
        <li><strong>(a)</strong> 状態の意味を「$s_0$: 初期または直前0（受理）」「$s_1$: 1がちょうど1個（非受理）」「$s_2$: 1が2個以上連続（受理）」「$s_3$: 孤立した1が出てアウト（死状態）」の4つに分ける。</li>
        <li><strong>(b) ii.</strong> 低い桁から読むと、$0$桁目・$2$桁目・$4$桁目（偶数桁）の重みは $2^{2n} \equiv 1 \pmod 3$、$1$桁目・$3$桁目（奇数桁）の重みは $2^{2n+1} \equiv 2 \pmod 3$。つまり「<strong>次に読む桁の偶奇（2通り）× 現在の余り（3通り）＝ 6状態</strong>」で作れる！</li>
      </ul>
    `,
    answerHtml: String.raw`
      <p><strong>(b) i. の空欄の解答：</strong></p>
      <div class="ans-grid">
        <div class="ans-chip"><strong>1</strong> $0$</div>
        <div class="ans-chip"><strong>2</strong> $2^2$（または $4$）</div>
        <div class="ans-chip"><strong>3</strong> $3k+2$</div>
        <div class="ans-chip"><strong>4</strong> $4k+2$</div>
        <div class="ans-chip"><strong>5</strong> $\dfrac{k}{2}$</div>
      </div>
      <p><strong>(a) および (b) ii. の状態遷移図：</strong></p>
    `,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "(a) 1があれば必ず2個以上続いている列（4状態）",
        spec: {
          width: 440, height: 220,
          nodes: [
            { id: "s0", label: "s_0", x: 85, y: 75, start: true, accept: true, note: "初期/直前0" },
            { id: "s1", label: "s_1", x: 225, y: 75, note: "1が1個" },
            { id: "s2", label: "s_2", x: 365, y: 75, accept: true, note: "1が2個以上" },
            { id: "s3", label: "s_3", x: 225, y: 175, note: "孤立1(死状態)", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s0", label: "0", loopDir: "top", loopSize: 32 },
            { from: "s0", to: "s1", label: "1" },
            { from: "s1", to: "s2", label: "1" },
            { from: "s1", to: "s3", label: "0", labelSide: 1 },
            { from: "s2", to: "s2", label: "1", loopDir: "right", loopSize: 32 },
            { from: "s2", to: "s0", label: "0", curve: -55 },
            { from: "s3", to: "s3", label: "0,1", loopDir: "right", loopSize: 32 }
          ]
        }
      },
      {
        type: "automaton",
        caption: "(b) ii. 低い桁からの2進数 mod 3 = 1（6状態：上段=偶数桁, 下段=奇数桁）",
        spec: {
          width: 520, height: 250,
          nodes: [
            { id: "s0", label: "s_0", x: 95, y: 65, start: true, note: "偶・余0" },
            { id: "s2", label: "s_2", x: 260, y: 65, accept: true, note: "偶・余1" },
            { id: "s4", label: "s_4", x: 425, y: 65, note: "偶・余2" },
            { id: "s1", label: "s_1", x: 95, y: 185, note: "奇・余0", notePos: "bottom" },
            { id: "s3", label: "s_3", x: 260, y: 185, accept: true, note: "奇・余1", notePos: "bottom" },
            { id: "s5", label: "s_5", x: 425, y: 185, note: "奇・余2", notePos: "bottom" }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0", curve: -18 },
            { from: "s1", to: "s0", label: "0", curve: -18 },
            { from: "s2", to: "s3", label: "0", curve: -18 },
            { from: "s3", to: "s2", label: "0", curve: -18 },
            { from: "s4", to: "s5", label: "0", curve: -18 },
            { from: "s5", to: "s4", label: "0", curve: -18 },
            { from: "s0", to: "s3", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s3", to: "s0", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s2", to: "s5", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s5", to: "s2", label: "1", curve: -12, labelPos: 0.35 },
            { from: "s4", to: "s1", label: "1", curve: 75, labelPos: 0.5, dy: 4 },
            { from: "s1", to: "s4", label: "1", curve: -75, labelPos: 0.5, dy: -4 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <p><strong>(b) i. の計算：</strong>$2^{2(m+1)+1} = 2^2 \cdot 2^{2m+1} = 4(3k+2) = 12k+8 = 3(4k+2)+2$。$4k+2 = 2(2k+1)$ は偶数なので帰納法が成立する。</p>
      <p><strong>(b) ii. の遷移ルール：</strong></p>
      <ul>
        <li><code>0</code> を読む：値は増えない（余り不変）が、桁の偶奇だけ反転する（$s_0 \leftrightarrow s_1$, $s_2 \leftrightarrow s_3$, $s_4 \leftrightarrow s_5$）。</li>
        <li><code>1</code> を読む：
          <ul>
            <li>偶数桁（重み $\equiv 1$）なら余りが $+1 \pmod 3$ されて奇数桁へ（$s_0 \to s_3$, $s_2 \to s_5$, $s_4 \to s_1$）。</li>
            <li>奇数桁（重み $\equiv 2$）なら余りが $+2 \pmod 3$ されて偶数桁へ（$s_1 \to s_4$, $s_3 \to s_0$, $s_5 \to s_2$）。</li>
          </ul>
        </li>
      </ul>
      <p>検算：$4_{(10)} = 001$ は $s_0 \xrightarrow{0} s_1 \xrightarrow{0} s_0 \xrightarrow{1} s_3$（受理・余り1）で正しい！</p>
    `
  },
  {
    id: "R5-7",
    year: "R5",
    num: 7,
    points: 6,
    topic: "状態最小化",
    lectureRef: 5,
    title: "決定性有限オートマトンの状態数最小化",
    promptHtml: String.raw`<p>下図に示す決定性有限オートマトンの状態数を最小化せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R5 問7 与えられたDFA（6状態）",
        spec: {
          width: 480, height: 240,
          nodes: [
            { id: "s0", label: "s_0", x: 90, y: 70, start: true },
            { id: "s1", label: "s_1", x: 240, y: 70, accept: true },
            { id: "s2", label: "s_2", x: 390, y: 70 },
            { id: "s3", label: "s_3", x: 90, y: 185 },
            { id: "s4", label: "s_4", x: 240, y: 185, accept: true },
            { id: "s5", label: "s_5", x: 390, y: 185 }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0" },
            { from: "s0", to: "s3", label: "1", labelSide: 1 },
            { from: "s1", to: "s1", label: "0", loopDir: "top", loopSize: 32 },
            { from: "s1", to: "s4", label: "1", labelSide: 1 },
            { from: "s2", to: "s1", label: "0", labelSide: 1 },
            { from: "s2", to: "s4", label: "1", labelPos: 0.35, labelSide: 1 },
            { from: "s3", to: "s1", label: "0", labelPos: 0.35 },
            { from: "s3", to: "s4", label: "1" },
            { from: "s4", to: "s0", label: "0", labelPos: 0.35 },
            { from: "s4", to: "s5", label: "1" },
            { from: "s5", to: "s1", label: "0", labelPos: 0.35 },
            { from: "s5", to: "s2", label: "1", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`
      <p>まず遷移表を書いて、<strong>受理状態 $\{s_1, s_4\}$</strong> と <strong>非受理状態 $\{s_0, s_2, s_3, s_5\}$</strong> に分けよう。同じ遷移先を持つペアがないか探す（授業資料5・定理2.3 / 例題2.6）。</p>
    `,
    answerHtml: String.raw`<p>$s_2 \equiv s_3$、$s_0 \equiv s_5$ より、状態数 <strong>4</strong> に最小化される。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "最小化後のDFA（4状態：{s_0, s_5}, s_1, {s_2, s_3}, s_4）",
        spec: {
          width: 360, height: 220,
          nodes: [
            { id: "s0", label: "s_0", x: 100, y: 65, start: true },
            { id: "s1", label: "s_1", x: 250, y: 65, accept: true },
            { id: "s3", label: "s_3", x: 100, y: 175 },
            { id: "s4", label: "s_4", x: 250, y: 175, accept: true }
          ],
          edges: [
            { from: "s0", to: "s1", label: "0" },
            { from: "s0", to: "s3", label: "1", labelSide: 1 },
            { from: "s1", to: "s1", label: "0", loopDir: "right", loopSize: 32 },
            { from: "s1", to: "s4", label: "1" },
            { from: "s3", to: "s1", label: "0", labelPos: 0.32 },
            { from: "s3", to: "s4", label: "1", labelSide: 1 },
            { from: "s4", to: "s0", label: "0,1", labelPos: 0.32 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th><th>等価グループ</th></tr></thead>
        <tbody>
          <tr><td>$s_0$</td><td>×</td><td>$s_1$</td><td>$s_3$</td><td>$A = \{s_0, s_5\}$</td></tr>
          <tr class="accept-row"><td>$s_1$</td><td>○</td><td>$s_1$</td><td>$s_4$</td><td>$B = \{s_1\}$</td></tr>
          <tr><td>$s_2$</td><td>×</td><td>$s_1$</td><td>$s_4$</td><td>$C = \{s_2, s_3\}$</td></tr>
          <tr><td>$s_3$</td><td>×</td><td>$s_1$</td><td>$s_4$</td><td>$C = \{s_2, s_3\}$</td></tr>
          <tr class="accept-row"><td>$s_4$</td><td>○</td><td>$s_0$</td><td>$s_5$</td><td>$D = \{s_4\}$</td></tr>
          <tr><td>$s_5$</td><td>×</td><td>$s_1$</td><td>$s_2$</td><td>$A = \{s_0, s_5\}$</td></tr>
        </tbody>
      </table>
      <ol>
        <li>$s_2$ と $s_3$ は共に非受理で、<code>0</code>→$s_1$、<code>1</code>→$s_4$ と遷移先が完全一致 ⇒ <strong>$s_2 \equiv s_3$</strong>。</li>
        <li>$s_0$ と $s_5$ は共に非受理で、<code>0</code>→$s_1$、<code>1</code>→$s_3 / s_2$（等価！）⇒ <strong>$s_0 \equiv s_5$</strong>。</li>
        <li>$s_1$ と $s_4$ は <code>0</code> で $s_1$（受理）vs $s_0$（非受理）なので非等価。$s_0$ と $s_3$ は <code>1</code> で $s_3$（非受理）vs $s_4$（受理）なので非等価。</li>
        <li>よって $s_5$ を $s_0$ に、$s_2$ を $s_3$ に統合する。すると $s_4$ の <code>1</code>→$s_5$ は <code>1</code>→$s_0$ となり、$s_4 \xrightarrow{0,1} s_0$ にまとまる。</li>
      </ol>
    `
  },
  {
    id: "R5-8",
    year: "R5",
    num: 8,
    points: 10,
    topic: "NFA→DFA・ε-NFA",
    lectureRef: 6,
    title: "群状態を用いた NFA → DFA 変換",
    promptHtml: String.raw`<p>下図に示す非決定性有限オートマトンについて、群状態を用い、それと同じ言語を認識する決定性有限オートマトンを構成せよ。解答は状態遷移図のみでよい。</p>`,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R5 問8 与えられたNFA",
        spec: {
          width: 340, height: 225,
          nodes: [
            { id: "s0", label: "s_0", x: 95, y: 65, start: true },
            { id: "s1", label: "s_1", x: 245, y: 65, accept: true },
            { id: "s3", label: "s_3", x: 95, y: 175 },
            { id: "s2", label: "s_2", x: 245, y: 175, accept: true }
          ],
          edges: [
            { from: "s0", to: "s1", label: "1" },
            { from: "s0", to: "s3", label: "1", curve: -12 },
            { from: "s3", to: "s0", label: "0,1", curve: -36 },
            { from: "s1", to: "s1", label: "1", loopDir: "top-right", loopSize: 32 },
            { from: "s1", to: "s2", label: "0" },
            { from: "s2", to: "s0", label: "0", labelPos: 0.3 },
            { from: "s3", to: "s1", label: "1", labelPos: 0.3 },
            { from: "s3", to: "s2", label: "0", labelSide: 1 }
          ]
        }
      }
    ],
    hintHtml: String.raw`
      <p>初期状態 $\{s_0\}$ から始めて、入力 <code>0</code> と <code>1</code> の遷移先を順に表に書き出そう。元の受理状態 $s_1$ または $s_2$ を<strong>1つでも含む群状態</strong>が受理状態になる。空集合 $\phi$ の自己ループ <code>0,1</code> を忘れずに！</p>
    `,
    answerHtml: String.raw`<p>群状態遷移図は以下の6状態（$\phi$ を含む）。</p>`,
    answerDiagrams: [
      {
        type: "automaton",
        caption: "構成されたDFA（群状態・6状態）",
        spec: {
          width: 540, height: 290,
          nodes: [
            { id: "q0", label: "{s_0}", x: 90, y: 60, start: true, rx: 28, ry: 20 },
            { id: "q13", label: "{s_1,s_3}", x: 250, y: 60, accept: true, rx: 40, ry: 22 },
            { id: "q01", label: "{s_0,s_1}", x: 430, y: 60, accept: true, rx: 40, ry: 22 },
            { id: "q02", label: "{s_0,s_2}", x: 250, y: 155, accept: true, rx: 40, ry: 22 },
            { id: "q2", label: "{s_2}", x: 430, y: 155, accept: true, rx: 28, ry: 20 },
            { id: "phi", label: "φ", x: 90, y: 230, rx: 22, ry: 20 }
          ],
          edges: [
            { from: "q0", to: "phi", label: "0", labelSide: 1 },
            { from: "q0", to: "q13", label: "1" },
            { from: "q13", to: "q02", label: "0", curve: -18 },
            { from: "q13", to: "q01", label: "1", curve: -14 },
            { from: "q01", to: "q2", label: "0" },
            { from: "q01", to: "q13", label: "1", curve: -14 },
            { from: "q02", to: "q0", label: "0", labelSide: 1 },
            { from: "q02", to: "q13", label: "1", curve: -18 },
            { from: "q2", to: "q0", label: "0", curve: 70, labelPos: 0.55, dy: 6 },
            { from: "q2", to: "phi", label: "1", curve: 26, labelPos: 0.5 },
            { from: "phi", to: "phi", label: "0,1", loopDir: "bottom", loopSize: 30 }
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <table class="mini-table">
        <thead><tr><th>群状態</th><th>受理?</th><th>入力 0</th><th>入力 1</th></tr></thead>
        <tbody>
          <tr><td>$\{s_0\}$</td><td>×</td><td>$\phi$</td><td>$\{s_1, s_3\}$</td></tr>
          <tr class="accept-row"><td>$\{s_1, s_3\}$</td><td>○</td><td>$\{s_2\} \cup \{s_0, s_2\} = \{s_0, s_2\}$</td><td>$\{s_1\} \cup \{s_0, s_1\} = \{s_0, s_1\}$</td></tr>
          <tr class="accept-row"><td>$\{s_0, s_2\}$</td><td>○</td><td>$\phi \cup \{s_0\} = \{s_0\}$</td><td>$\{s_1, s_3\} \cup \phi = \{s_1, s_3\}$</td></tr>
          <tr class="accept-row"><td>$\{s_0, s_1\}$</td><td>○</td><td>$\phi \cup \{s_2\} = \{s_2\}$</td><td>$\{s_1, s_3\} \cup \{s_1\} = \{s_1, s_3\}$</td></tr>
          <tr class="accept-row"><td>$\{s_2\}$</td><td>○</td><td>$\{s_0\}$</td><td>$\phi$</td></tr>
          <tr><td>$\phi$</td><td>×</td><td>$\phi$</td><td>$\phi$</td></tr>
        </tbody>
      </table>
    `,
    mistakeHtml: String.raw`<strong>よくあるミス：</strong>空集合 $\phi$ からの遷移（<code>0,1</code> の自己ループ）を書き忘れるとDFAの定義を満たさず減点される！`
  },
  {
    id: "R5-9",
    year: "R5",
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
        <li><span class="sub-label">(d)</span> $T_2$ の式および $T_1$ の解を $T_0$ の式に代入し、$T_0$ について解き、図の有限オートマトンが認識する言語を表す正規表現 $R$ を求めよ。</li>
      </ul>
    `,
    promptDiagrams: [
      {
        type: "automaton",
        caption: "R5 問9 有限オートマトン（受理状態は s_0）",
        spec: {
          width: 340, height: 215,
          nodes: [
            { id: "s0", label: "s_0", x: 170, y: 55, start: true, accept: true },
            { id: "s1", label: "s_1", x: 90, y: 165 },
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
    hintHtml: String.raw`
      <p>授業資料6（補題2.4）の公式：<strong>$X = P + XQ \implies X = PQ^*$</strong>（ただし $\varepsilon \notin Q$）を使うだけ！各状態に「入ってくる矢印」だけを見て式を立てよう。</p>
    `,
    answerHtml: String.raw`
      <div class="ans-grid">
        <div class="ans-chip"><strong>(a)</strong> $T_1 = T_0 1 + T_1 1 + T_2 1$</div>
        <div class="ans-chip"><strong>(b)</strong> $T_2 = T_1 0$</div>
        <div class="ans-chip"><strong>(c)</strong> $T_1 = T_0 1(1 + 01)^*$</div>
        <div class="ans-chip"><strong>(d)</strong> $R = (0 + 1(1 + 01)^*00)^*$</div>
      </div>
    `,
    explanationHtml: String.raw`
      <ul>
        <li><strong>(a)</strong> $s_1$ に入ってくる矢印は $s_0 \xrightarrow{1} s_1,\; s_1 \xrightarrow{1} s_1,\; s_2 \xrightarrow{1} s_1$ なので $T_1 = T_0 1 + T_1 1 + T_2 1$。</li>
        <li><strong>(b)</strong> $s_2$ に入ってくる矢印は $s_1 \xrightarrow{0} s_2$ のみなので $T_2 = T_1 0$。</li>
        <li><strong>(c)</strong> $T_2 = T_1 0$ を代入：<br>
          $T_1 = T_0 1 + T_1 1 + T_1 01 = T_0 1 + T_1(1 + 01)$。<br>
          公式 $X = P + XQ \Rightarrow X = PQ^*$ より $T_1 = T_0 1(1 + 01)^*$（$(01+1)^*$ でも可）。</li>
        <li><strong>(d)</strong> $T_0 = \varepsilon + T_0 0 + T_2 0 = \varepsilon + T_0 0 + T_1 00 = \varepsilon + T_0 0 + T_0 1(1+01)^*00 = \varepsilon + T_0(0 + 1(1+01)^*00)$。<br>
          公式より $T_0 = \varepsilon(0 + 1(1+01)^*00)^* = (0 + 1(1+01)^*00)^*$。受理状態は $s_0$ のみなので $R = T_0$。</li>
      </ul>
    `
  },
  {
    id: "R5-10",
    year: "R5",
    num: 10,
    points: 10,
    topic: "導出木・最左導出",
    lectureRef: 7,
    title: "文脈自由文法の導出木と最左導出",
    promptHtml: String.raw`
      <p>$G = (\{S, A\}, \{a, b\}, P, S)$、$P = \{S \to aSA,\; S \to a,\; A \to bS,\; A \to bb\}$ において、<code>aaabbba</code> の導出木を求め、最左導出を示せ。</p>
    `,
    hintHtml: String.raw`
      <p>先頭に <code>a</code> が3個並んでいるので、$S \to aSA$ を2回、最後に $S \to a$ を使えば <code>aaa</code> が出る！残る2つの $A$ で <code>bbba</code> を作ろう。</p>
    `,
    answerHtml: String.raw`
      <p><strong>最左導出：</strong></p>
      <p>$$S \Rightarrow aSA \Rightarrow aaSAA \Rightarrow aaaAA \Rightarrow aaabbA \Rightarrow aaabbbS \Rightarrow aaabbba$$</p>
      <p><strong>導出木：</strong></p>
    `,
    answerDiagrams: [
      {
        type: "tree",
        caption: "aaabbba の導出木",
        spec: {
          width: 340, height: 245,
          nodes: [
            { id: "n0", label: "S", x: 170, y: 24 },
            { id: "n1", label: "a", x: 65, y: 80, terminal: true },
            { id: "n2", label: "S", x: 140, y: 80 },
            { id: "n3", label: "A", x: 255, y: 80 },
            { id: "n4", label: "a", x: 95, y: 140, terminal: true },
            { id: "n5", label: "S", x: 140, y: 140 },
            { id: "n6", label: "A", x: 195, y: 140 },
            { id: "n7", label: "b", x: 240, y: 140, terminal: true },
            { id: "n8", label: "S", x: 285, y: 140 },
            { id: "n9", label: "a", x: 140, y: 205, terminal: true },
            { id: "n10", label: "b", x: 178, y: 205, terminal: true },
            { id: "n11", label: "b", x: 212, y: 205, terminal: true },
            { id: "n12", label: "a", x: 285, y: 205, terminal: true }
          ],
          edges: [
            ["n0", "n1"], ["n0", "n2"], ["n0", "n3"],
            ["n2", "n4"], ["n2", "n5"], ["n2", "n6"],
            ["n3", "n7"], ["n3", "n8"],
            ["n5", "n9"], ["n6", "n10"], ["n6", "n11"], ["n8", "n12"]
          ]
        }
      }
    ],
    explanationHtml: String.raw`
      <p>導出木を左の変数から優先して展開すると最左導出が得られる（授業資料7・定理3.2）：</p>
      <ol>
        <li>$\underline{S} \Rightarrow a\underline{S}A$（$S \to aSA$）</li>
        <li>$a\underline{S}A \Rightarrow aa\underline{S}AA$（$S \to aSA$）</li>
        <li>$aa\underline{S}AA \Rightarrow aaa\underline{A}A$（$S \to a$）</li>
        <li>$aaa\underline{A}A \Rightarrow aaabb\underline{A}$（$A \to bb$）</li>
        <li>$aaabb\underline{A} \Rightarrow aaabbb\underline{S}$（$A \to bS$）</li>
        <li>$aaabbb\underline{S} \Rightarrow aaabbba$（$S \to a$）</li>
      </ol>
    `
  }
];
