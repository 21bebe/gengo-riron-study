// 汎用SVG描画エンジン（状態遷移図・導出木）
window.SVGDiagrams = (function () {
  let uidCounter = 0;

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // 下付き添字 (例: s_0 -> s<tspan>0</tspan>) をSVG tspanに変換
  function formatSvgLabel(raw) {
    if (!raw) return "";
    // 複数の添字 s_0, s_1 などに対応
    return esc(raw).replace(/([A-Za-z])_([0-9a-zA-Z]+)/g, (_, base, sub) => {
      return `${base}<tspan dy="4" font-size="72%">${sub}</tspan><tspan dy="-4" font-size="100%"></tspan>`;
    });
  }

  // 楕円の境界点を計算
  function ellipseEdgePoint(cx, cy, rx, ry, angle) {
    return {
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle)
    };
  }

  function renderAutomaton(spec) {
    const uid = ++uidCounter;
    const w = spec.width || 460;
    const h = spec.height || 240;
    const nodeMap = {};
    spec.nodes.forEach(n => {
      nodeMap[n.id] = {
        ...n,
        rx: n.rx || n.r || 22,
        ry: n.ry || n.r || 22
      };
    });

    const parts = [];
    parts.push(`<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(spec.caption || '状態遷移図')}">`);
    parts.push(`<defs>
      <marker id="arrow-${uid}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 1.2 L 10 5 L 0 8.8 z" fill="#1B2330"/>
      </marker>
    </defs>`);

    // 1. エッジ描画
    (spec.edges || []).forEach(e => {
      const a = nodeMap[e.from];
      const b = nodeMap[e.to];
      if (!a || !b) return;

      if (e.from === e.to) {
        // 自己ループ
        const dir = e.loopDir || "top";
        const dirAngles = {
          top: -Math.PI / 2,
          bottom: Math.PI / 2,
          left: Math.PI,
          right: 0,
          "top-right": -Math.PI / 4,
          "top-left": -3 * Math.PI / 4,
          "bottom-right": Math.PI / 4,
          "bottom-left": 3 * Math.PI / 4
        };
        const baseAng = dirAngles[dir] !== undefined ? dirAngles[dir] : -Math.PI / 2;
        const spread = 0.42;
        const p1 = ellipseEdgePoint(a.x, a.y, a.rx, a.ry, baseAng - spread);
        const p2 = ellipseEdgePoint(a.x, a.y, a.rx + 2, a.ry + 2, baseAng + spread);
        const dist = (e.loopSize || 38) + Math.max(a.rx, a.ry) * 0.55;
        const c1 = {
          x: a.x + dist * Math.cos(baseAng - 0.55),
          y: a.y + dist * Math.sin(baseAng - 0.55)
        };
        const c2 = {
          x: a.x + dist * Math.cos(baseAng + 0.55),
          y: a.y + dist * Math.sin(baseAng + 0.55)
        };
        parts.push(`<path d="M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}" fill="none" stroke="#1B2330" stroke-width="1.6" marker-end="url(#arrow-${uid})"/>`);
        if (e.label) {
          const lDist = dist + 6 + (e.labelDist || 0);
          const lx = a.x + lDist * Math.cos(baseAng) + (e.dx || 0);
          const ly = a.y + lDist * Math.sin(baseAng) + (e.dy || 0) + 4;
          parts.push(`<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1B2330">${formatSvgLabel(e.label)}</text>`);
        }
        return;
      }

      // 通常エッジ（直線 or 2次ベジェ曲線）
      const curve = e.curve || 0;
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const cx = mx + nx * curve;
      const cy = my + ny * curve;

      const angStart = Math.atan2(cy - a.y, cx - a.x);
      const angEnd = Math.atan2(cy - b.y, cx - b.x);
      const startPt = ellipseEdgePoint(a.x, a.y, a.rx + 1, a.ry + 1, angStart);
      const endPt = ellipseEdgePoint(b.x, b.y, b.rx + 2.5, b.ry + 2.5, angEnd);

      if (Math.abs(curve) < 1) {
        parts.push(`<line x1="${startPt.x.toFixed(1)}" y1="${startPt.y.toFixed(1)}" x2="${endPt.x.toFixed(1)}" y2="${endPt.y.toFixed(1)}" stroke="#1B2330" stroke-width="1.6" marker-end="url(#arrow-${uid})"/>`);
      } else {
        parts.push(`<path d="M ${startPt.x.toFixed(1)} ${startPt.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${endPt.x.toFixed(1)} ${endPt.y.toFixed(1)}" fill="none" stroke="#1B2330" stroke-width="1.6" marker-end="url(#arrow-${uid})"/>`);
      }

      if (e.label) {
        const t = e.labelPos !== undefined ? e.labelPos : 0.5;
        // 2次ベジェ上の点 B(t)
        const bx = (1 - t) * (1 - t) * startPt.x + 2 * (1 - t) * t * cx + t * t * endPt.x;
        const by = (1 - t) * (1 - t) * startPt.y + 2 * (1 - t) * t * cy + t * t * endPt.y;
        const offsetSign = curve === 0 ? (e.labelSide || -1) : Math.sign(curve);
        const offsetDist = e.labelDist !== undefined ? e.labelDist : 13;
        const lx = bx + nx * offsetSign * offsetDist + (e.dx || 0);
        const ly = by + ny * offsetSign * offsetDist + 4 + (e.dy || 0);
        parts.push(`<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="13.5" font-weight="600" fill="#1B2330">${formatSvgLabel(e.label)}</text>`);
      }
    });

    // 2. ノード描画
    spec.nodes.forEach(raw => {
      const n = nodeMap[raw.id];
      const fill = n.accept ? "#F2FBF6" : "#FFFFFF";
      const stroke = n.accept ? "#1D6B4B" : "#1B2330";

      // 初期状態の二重矢印 (⇒)
      if (n.start) {
        const tipX = n.x - n.rx - 3;
        const tailX = tipX - 24;
        const y = n.y;
        parts.push(`<line x1="${tailX}" y1="${y - 3.2}" x2="${tipX - 5}" y2="${y - 3.2}" stroke="#244775" stroke-width="1.8"/>`);
        parts.push(`<line x1="${tailX}" y1="${y + 3.2}" x2="${tipX - 5}" y2="${y + 3.2}" stroke="#244775" stroke-width="1.8"/>`);
        parts.push(`<polyline points="${tipX - 8},${y - 7.5} ${tipX},${y} ${tipX - 8},${y + 7.5}" fill="none" stroke="#244775" stroke-width="1.8" stroke-linejoin="round"/>`);
      }

      parts.push(`<ellipse cx="${n.x}" cy="${n.y}" rx="${n.rx}" ry="${n.ry}" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`);
      if (n.accept) {
        parts.push(`<ellipse cx="${n.x}" cy="${n.y}" rx="${n.rx - 4}" ry="${n.ry - 4}" fill="none" stroke="${stroke}" stroke-width="1.4"/>`);
      }
      const fs = n.fontSize || (n.label.length > 6 ? 12 : 14);
      parts.push(`<text x="${n.x}" y="${n.y + 4.5}" text-anchor="middle" font-size="${fs}" font-weight="700" fill="#1B2330">${formatSvgLabel(n.label)}</text>`);

      if (n.note) {
        const ny = n.notePos === "bottom" ? n.y + n.ry + 16 : n.y - n.ry - 9;
        parts.push(`<text x="${n.x}" y="${ny}" text-anchor="middle" font-size="11" fill="#525E70">${esc(n.note)}</text>`);
      }
    });

    parts.push(`</svg>`);
    return parts.join("");
  }

  function renderDerivationTree(spec) {
    const w = spec.width || 320;
    const h = spec.height || 240;
    const nodeMap = {};
    spec.nodes.forEach(n => { nodeMap[n.id] = n; });

    const parts = [];
    parts.push(`<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="導出木">`);
    (spec.edges || []).forEach(([fid, tid]) => {
      const a = nodeMap[fid];
      const b = nodeMap[tid];
      if (!a || !b) return;
      parts.push(`<line x1="${a.x}" y1="${a.y + 11}" x2="${b.x}" y2="${b.y - 13}" stroke="#525E70" stroke-width="1.6"/>`);
    });
    spec.nodes.forEach(n => {
      if (n.terminal) {
        parts.push(`<rect x="${n.x - 13}" y="${n.y - 13}" width="26" height="24" rx="5" fill="#EBF1F8" stroke="#9DB8D8" stroke-width="1.2"/>`);
        parts.push(`<text x="${n.x}" y="${n.y + 4}" text-anchor="middle" font-size="15" font-weight="700" font-family="Consolas, monospace" fill="#244775">${esc(n.label)}</text>`);
      } else {
        parts.push(`<text x="${n.x}" y="${n.y + 5}" text-anchor="middle" font-size="16" font-weight="700" font-style="italic" fill="#1B2330">${esc(n.label)}</text>`);
      }
    });
    parts.push(`</svg>`);
    return parts.join("");
  }

  return { renderAutomaton, renderDerivationTree };
})();
