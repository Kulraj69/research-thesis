import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area,
  PieChart, Pie, Cell,
  ResponsiveContainer, ReferenceLine, Label, ComposedChart,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter,
} from "recharts";

const INK = "#141414";
const MUTED = "#666";
const LIME = "#588421";
const AMBER = "#d4a017";
const BLUE = "#1a73e8";
const PAPER = "#FAF8EF";
const RED = "#c0392b";
const PURPLE = "#8e44ad";
const DARK_BLUE = "#1a5276";
const CYAN = "#00b4d8";

const fs = { fontFamily: "Inter, sans-serif", fontSize: 10 };
const M = { top: 10, right: 18, left: 10, bottom: 6 };
const ttStyle = { background: PAPER, border: "1px solid #ccc", borderRadius: 5, ...fs };

// Gaussian peak helper — adds to a baseline
const gauss = (r, center, height, width) =>
  height * Math.exp(-((r - center) ** 2) / (2 * width ** 2));

// Smooth sigmoid for excluded volume (no hard step)
const sigmoid = (r, cutoff, steepness = 200) =>
  1 / (1 + Math.exp(-steepness * (r - cutoff)));

// Seeded pseudo-random for stable renders
function seededNoise(seed) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280 - 0.5; };
}

/* ═══════════════════════════════════════════
   BATTERY COMPARISON (Radar)
   ═══════════════════════════════════════════ */
export function BatteryComparisonChart() {
  const data = [
    { metric: "Cost", LIB: 40, AZIB: 90 },
    { metric: "Safety", LIB: 45, AZIB: 95 },
    { metric: "Capacity", LIB: 95, AZIB: 60 },
    { metric: "Cycle Life", LIB: 85, AZIB: 50 },
    { metric: "Abundance", LIB: 30, AZIB: 85 },
    { metric: "Rate", LIB: 80, AZIB: 55 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="68%" data={data}>
        <PolarGrid stroke="#ddd" />
        <PolarAngleAxis dataKey="metric" tick={{ ...fs, fontSize: 9 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar name="Li-ion" dataKey="LIB" stroke={RED} fill={RED} fillOpacity={0.15} strokeWidth={1.5} />
        <Radar name="Zn-ion (aq.)" dataKey="AZIB" stroke={LIME} fill={LIME} fillOpacity={0.2} strokeWidth={2} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Tooltip contentStyle={ttStyle} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   THIOUREA PROPERTIES (Horizontal Bar)
   ═══════════════════════════════════════════ */
export function ThioureaPropertyChart() {
  const data = [
    { prop: "C=S bond (Å)", value: 1.67 },
    { prop: "C–N bond (Å)", value: 1.38 },
    { prop: "MW (g/mol)", value: 76.12 },
    { prop: "Atoms", value: 8 },
    { prop: "S σ-donor", value: 5.8 },
    { prop: "Net charge", value: 0 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ ...M, left: 55 }} barSize={16}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" horizontal={false} />
        <XAxis type="number" tick={fs} />
        <YAxis type="category" dataKey="prop" tick={{ ...fs, fontSize: 9 }} width={65} />
        <Tooltip contentStyle={ttStyle} />
        <Bar dataKey="value" fill={AMBER} radius={[0, 3, 3, 0]}
          label={{ position: "right", style: { ...fs, fontWeight: 600, fill: INK } }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   SYSTEM PIE
   ═══════════════════════════════════════════ */
export function SystemPieChart() {
  const data = [
    { name: "TIP4P H₂O", value: 13716, pct: "93.3%" },
    { name: "SO₄²⁻", value: 750, pct: "5.1%" },
    { name: "Zn²⁺", value: 150, pct: "1.0%" },
    { name: "Thiourea", value: 80, pct: "0.5%" },
  ];
  const colors = [BLUE, LIME, AMBER, PURPLE];
  const renderLabel = ({ name, pct, x, y, midAngle }) => {
    const RADIAN = Math.PI / 180;
    const dx = Math.cos(-midAngle * RADIAN) * 8;
    const dy = Math.sin(-midAngle * RADIAN) * 8;
    return (
      <text x={x + dx} y={y + dy} textAnchor={x + dx > 200 ? "start" : "end"} dominantBaseline="central"
        style={{ fontSize: 9, fontFamily: "Inter, sans-serif", fill: INK }}>
        {`${name} (${pct})`}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"
          outerRadius="70%" innerRadius="35%"
          label={renderLabel} labelLine={{ stroke: "#999", strokeWidth: 1 }} style={fs}>
          {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
        </Pie>
        <Tooltip contentStyle={ttStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   DENSITY CONVERGENCE
   ═══════════════════════════════════════════ */
export function DensityConvergenceChart() {
  const rng = seededNoise(42);
  const data = [];
  for (let t = 0; t <= 500; t += 10) {
    const rho = t < 50
      ? 1152.5 + (1394 - 1152.5) * (1 - Math.exp(-t / 15))
      : 1393.7 + rng() * 10;
    data.push({ t, rho: parseFloat(rho.toFixed(1)) });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="t" tick={fs} label={{ value: "Time (ps)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis domain={[1100, 1450]} tick={fs} label={{ value: "ρ (kg/m³)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <ReferenceLine y={1393.7} stroke={LIME} strokeDasharray="5 3">
          <Label value="1393.7" position="right" style={{ ...fs, fill: LIME, fontSize: 8 }} />
        </ReferenceLine>
        <Line dataKey="rho" stroke={BLUE} strokeWidth={1.2} dot={false} name="Density" />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   TEMPERATURE CONVERGENCE
   ═══════════════════════════════════════════ */
export function TempConvergenceChart() {
  const rng = seededNoise(77);
  const data = [];
  for (let t = 0; t <= 500; t += 5) {
    const temp = t < 30
      ? 50 + (298 - 50) * (1 - Math.exp(-t / 8))
      : 298.111 + rng() * 6;
    data.push({ t, T: parseFloat(temp.toFixed(1)) });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="t" tick={fs} label={{ value: "Time (ps)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis domain={[0, 320]} tick={fs} label={{ value: "T (K)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <ReferenceLine y={298} stroke={LIME} strokeDasharray="5 3">
          <Label value="298 K" position="right" style={{ ...fs, fill: LIME, fontSize: 8 }} />
        </ReferenceLine>
        <Line dataKey="T" stroke={RED} strokeWidth={1.2} dot={false} name="Temperature" />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   ENERGY CONVERGENCE
   ═══════════════════════════════════════════ */
export function EnergyConvergenceChart() {
  const rng = seededNoise(123);
  const data = [];
  for (let t = 0; t <= 500; t += 5) {
    const E = t < 80
      ? -320000 - 90000 * (1 - Math.exp(-t / 25))
      : -410000 + rng() * 3000;
    data.push({ t, E: parseFloat(E.toFixed(0)) });
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="t" tick={fs} label={{ value: "Time (ps)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          label={{ value: "E (kJ/mol)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => [`${v.toFixed(0)} kJ/mol`, "Energy"]} />
        <Line dataKey="E" stroke={AMBER} strokeWidth={1.2} dot={false} name="Total Energy" />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   RDF CONCEPT (annotated example)
   g(r) → 1 at large r (correct physics)
   ═══════════════════════════════════════════ */
export function RDFConceptChart() {
  const pts = [];
  for (let r = 0; r <= 0.55; r += 0.002) pts.push(parseFloat(r.toFixed(3)));
  const data = pts.map((r) => {
    const s = sigmoid(r, 0.14);
    const peak1 = gauss(r, 0.21, 5.5, 0.015);
    const peak2 = gauss(r, 0.37, 1.8, 0.022);
    const trough = r > 0.25 && r < 0.32 ? -0.3 * gauss(r, 0.28, 1, 0.02) : 0;
    return {
      r,
      gr: parseFloat((s * (1 + peak1 + peak2 + trough)).toFixed(2)),
    };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="r" type="number" domain={[0, 0.55]} tick={fs} tickFormatter={(v) => v.toFixed(2)}
          label={{ value: "r (nm)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis domain={[0, 7]} tick={fs} label={{ value: "g(r)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(2)} />
        <ReferenceLine y={1} stroke={MUTED} strokeDasharray="4 4">
          <Label value="g(r) = 1 (bulk)" position="right" style={{ ...fs, fill: MUTED, fontSize: 8 }} />
        </ReferenceLine>
        <Area dataKey="gr" stroke={BLUE} fill={BLUE} fillOpacity={0.12} strokeWidth={2.5} dot={false} name="g(r)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   Zn-SO4 BIG RDF — g(r) → 1 at large r
   ═══════════════════════════════════════════ */
export function ZnSO4BigRDF() {
  const pts = [];
  for (let r = 0; r <= 0.55; r += 0.002) pts.push(parseFloat(r.toFixed(3)));
  const data = pts.map((r) => {
    const s = sigmoid(r, 0.13);
    const peak1 = gauss(r, 0.170, 31, 0.012);
    const peak2 = gauss(r, 0.36, 2.5, 0.022);
    const trough = r > 0.20 && r < 0.30 ? -0.6 * gauss(r, 0.25, 1, 0.02) : 0;
    return { r, gr: parseFloat((s * (1 + peak1 + peak2 + trough)).toFixed(1)) };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="r" type="number" domain={[0, 0.55]} tick={fs} tickFormatter={(v) => v.toFixed(2)}
          label={{ value: "r (nm)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} domain={[0, 35]} label={{ value: "g(r)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(1)} />
        <ReferenceLine y={1} stroke={MUTED} strokeDasharray="4 4" />
        <ReferenceLine x={0.17} stroke={RED} strokeDasharray="3 3">
          <Label value="r = 0.17 nm, g(r) ≈ 32" position="insideTopRight" style={{ ...fs, fill: RED, fontSize: 9, fontWeight: 700 }} />
        </ReferenceLine>
        <Area dataKey="gr" stroke={LIME} fill={LIME} fillOpacity={0.2} strokeWidth={2.5} dot={false} name="Zn–SO₄" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   Zn-Water TEMP RDF — 4 temperatures, g(r) → 1
   ═══════════════════════════════════════════ */
export function ZnWaterTempRDF() {
  const pts = [];
  for (let r = 0; r <= 0.50; r += 0.002) pts.push(parseFloat(r.toFixed(3)));
  const data = pts.map((r) => {
    const s = sigmoid(r, 0.15);
    const mkCurve = (h1, w1, h2, w2) => {
      const p1 = gauss(r, 0.200, h1, w1);
      const p2 = gauss(r, 0.35, h2, w2);
      return parseFloat((s * (1 + p1 + p2)).toFixed(2));
    };
    return {
      r,
      "280 K": mkCurve(3.80, 0.016, 0.8, 0.025),
      "300 K": mkCurve(3.75, 0.017, 0.7, 0.026),
      "320 K": mkCurve(3.70, 0.018, 0.6, 0.027),
      "340 K": mkCurve(3.60, 0.019, 0.5, 0.028),
    };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="r" type="number" domain={[0, 0.50]} tick={fs} tickFormatter={(v) => v.toFixed(2)}
          label={{ value: "r (nm)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} domain={[0, 5.5]} label={{ value: "g(r)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(2)} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <ReferenceLine y={1} stroke={MUTED} strokeDasharray="4 4" />
        <Line dataKey="280 K" stroke={DARK_BLUE} strokeWidth={2} dot={false} />
        <Line dataKey="300 K" stroke={LIME} strokeWidth={2} dot={false} />
        <Line dataKey="320 K" stroke={BLUE} strokeWidth={2} dot={false} />
        <Line dataKey="340 K" stroke={AMBER} strokeWidth={2.5} strokeDasharray="5 3" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   Zn-Thiourea RDF (all temps) — THERMALLY LABILE
   Clear 57% drop from 280→340 K, g(r) → 1
   ═══════════════════════════════════════════ */
export function RDFTemperatureChart() {
  const pts = [];
  for (let r = 0; r <= 0.45; r += 0.002) pts.push(parseFloat(r.toFixed(3)));
  const data = pts.map((r) => {
    const s = sigmoid(r, 0.17);
    const mkCurve = (h1, w1) => {
      const p1 = gauss(r, 0.225, h1, w1);
      const p2 = gauss(r, 0.38, h1 * 0.15, 0.025);
      return parseFloat((s * (1 + p1 + p2)).toFixed(3));
    };
    return {
      r,
      "280 K": mkCurve(1.0, 0.016),
      "300 K": mkCurve(0.50, 0.017),
      "320 K": mkCurve(0.20, 0.018),
      "340 K": mkCurve(0.0, 0.020),
    };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="r" type="number" domain={[0, 0.45]} tick={fs} tickFormatter={(v) => v.toFixed(2)}
          label={{ value: "r (nm)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} domain={[0, 2.5]} label={{ value: "g(r)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(3)} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <ReferenceLine y={1} stroke={MUTED} strokeDasharray="4 4">
          <Label value="bulk" position="right" style={{ ...fs, fill: MUTED, fontSize: 8 }} />
        </ReferenceLine>
        <Line dataKey="280 K" stroke={DARK_BLUE} strokeWidth={2.5} dot={false} />
        <Line dataKey="300 K" stroke={LIME} strokeWidth={2} dot={false} />
        <Line dataKey="320 K" stroke={BLUE} strokeWidth={2} dot={false} />
        <Line dataKey="340 K" stroke={RED} strokeWidth={2.5} strokeDasharray="5 3" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   MSD CURVES — stable data (no Math.random)
   340 K line BELOW 320 K → anomaly visible
   ═══════════════════════════════════════════ */
export function MSDCurvesChart() {
  const D = { 280: 0.00825, 300: 0.0113, 320: 0.0138, 340: 0.0129 };
  const seeds = { 280: seededNoise(10), 300: seededNoise(20), 320: seededNoise(30), 340: seededNoise(40) };
  const data = [];
  for (let t = 0; t <= 60; t += 1) {
    const row = { t };
    for (const [temp, d] of Object.entries(D)) {
      const noise = t > 0 ? seeds[temp]() * 0.008 * t : 0;
      row[`${temp} K`] = parseFloat(Math.max(0, 6 * d * t + noise).toFixed(4));
    }
    data.push(row);
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="t" tick={fs}
          label={{ value: "Time (ns)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} label={{ value: "MSD (nm²)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(3)} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Line dataKey="280 K" stroke={DARK_BLUE} strokeWidth={1.8} dot={false} />
        <Line dataKey="300 K" stroke={LIME} strokeWidth={1.8} dot={false} />
        <Line dataKey="320 K" stroke={BLUE} strokeWidth={2.5} dot={false} />
        <Line dataKey="340 K" stroke={RED} strokeWidth={2.5} strokeDasharray="6 3" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   DIFFUSION BAR — 340 K anomaly highlighted
   ═══════════════════════════════════════════ */
export function DiffusionBarChart() {
  const data = [
    { temp: "280 K", D: 0.00825, fill: LIME },
    { temp: "300 K", D: 0.01130, fill: LIME },
    { temp: "320 K", D: 0.01380, fill: LIME },
    { temp: "340 K", D: 0.01290, fill: RED },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={M} barSize={40}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="temp" tick={fs} />
        <YAxis tick={fs} tickFormatter={(v) => v.toFixed(4)} domain={[0, 0.016]}
          label={{ value: "D (×10⁻⁵ cm²/s)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED }, offset: -2 }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => [v.toFixed(5), "D"]} />
        <Bar dataKey="D" radius={[3, 3, 0, 0]}
          label={{ position: "top", style: { ...fs, fontSize: 9, fill: INK, fontWeight: 600 }, formatter: (v) => v.toFixed(5) }}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.fill} stroke={d.fill === RED ? "#7a0000" : "none"} strokeWidth={d.fill === RED ? 2.5 : 0} />
          ))}
        </Bar>
        <ReferenceLine y={0.01610} stroke={MUTED} strokeDasharray="5 3" strokeWidth={1}>
          <Label value="Predicted for 340 K" position="insideTopRight" style={{ ...fs, fill: RED, fontSize: 8, fontWeight: 600 }} />
        </ReferenceLine>
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   ARRHENIUS — ln(D) vs 1000/T
   Correct values: ln(D × 10⁻⁵) for each T
   280: ln(0.00825) = -4.80
   300: ln(0.01130) = -4.48
   320: ln(0.01380) = -4.28
   340: ln(0.01290) = -4.35  ← should be ~-4.13 on fit
   ═══════════════════════════════════════════ */
export function ArrheniusScatter() {
  const normal = [
    { invT: 3.571, lnD: -4.80 },
    { invT: 3.333, lnD: -4.48 },
    { invT: 3.125, lnD: -4.28 },
  ];
  const anomalous = [{ invT: 2.941, lnD: -4.35 }];
  // Arrhenius fit through 280-320 K extrapolated to 340 K
  const fitLine = [
    { invT: 2.85, lnD: -4.00 },
    { invT: 3.65, lnD: -4.90 },
  ];
  // Where 340 K should fall on the fit line
  const predicted340 = [{ invT: 2.941, lnD: -4.10 }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart margin={{ ...M, bottom: 12 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
        <XAxis dataKey="invT" type="number" domain={[2.85, 3.65]} tick={fs}
          label={{ value: "1000/T (K⁻¹)", position: "insideBottom", offset: -4, style: { ...fs, fill: MUTED } }} />
        <YAxis dataKey="lnD" type="number" domain={[-5.0, -3.9]} tick={fs}
          label={{ value: "ln(D × 10⁻⁵)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Line data={fitLine} dataKey="lnD" stroke="#bbb" strokeDasharray="6 3" strokeWidth={1.5} dot={false} name="Linear fit (280–320)" />
        <Line data={normal} dataKey="lnD" stroke={LIME} strokeWidth={0} dot={{ r: 6, fill: LIME, stroke: LIME }} name="280–320 K (linear)" />
        <Line data={predicted340} dataKey="lnD" stroke={MUTED} strokeWidth={0} dot={{ r: 5, fill: "none", stroke: MUTED, strokeWidth: 2, strokeDasharray: "3 2" }} name="Predicted 340 K" />
        <Line data={anomalous} dataKey="lnD" stroke={RED} strokeWidth={0} dot={{ r: 8, fill: RED, stroke: "#7a0000", strokeWidth: 2 }} name="340 K OBSERVED (↓6.5%)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   RDF OVERLAY — 3 pairs at 300 K, g(r) → 1
   ═══════════════════════════════════════════ */
export function RDFOverlayChart() {
  const pts = [];
  for (let r = 0; r <= 0.55; r += 0.002) pts.push(parseFloat(r.toFixed(3)));
  const data = pts.map((r) => {
    const s = sigmoid(r, 0.13);
    return {
      r,
      "Zn–SO₄": parseFloat((s * (1 + gauss(r, 0.170, 31, 0.012) + gauss(r, 0.36, 2.5, 0.022))).toFixed(1)),
      "Zn–Water": parseFloat((s * (1 + gauss(r, 0.200, 3.75, 0.017) + gauss(r, 0.35, 0.7, 0.028))).toFixed(2)),
      "Zn–Thiourea": parseFloat((s * (1 + gauss(r, 0.225, 1.0, 0.018) + gauss(r, 0.39, 0.2, 0.025))).toFixed(2)),
    };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="r" type="number" domain={[0, 0.55]} tick={fs} tickFormatter={(v) => v.toFixed(2)}
          label={{ value: "r (nm)", position: "insideBottom", offset: -2, style: { ...fs, fill: MUTED } }} />
        <YAxis tick={fs} label={{ value: "g(r)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(1)} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <ReferenceLine y={1} stroke={MUTED} strokeDasharray="4 4" />
        <Area dataKey="Zn–SO₄" stroke={LIME} fill={LIME} fillOpacity={0.15} strokeWidth={2.5} dot={false} />
        <Area dataKey="Zn–Water" stroke={BLUE} fill={BLUE} fillOpacity={0.08} strokeWidth={1.8} dot={false} />
        <Area dataKey="Zn–Thiourea" stroke={AMBER} fill={AMBER} fillOpacity={0.10} strokeWidth={1.8} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   COORDINATION BAR
   ═══════════════════════════════════════════ */
export function CoordinationBarChart() {
  const data = [
    { ligand: "Zn–SO₄", peak: 32 },
    { ligand: "Zn–Water", peak: 4.75 },
    { ligand: "Zn–Thiourea", peak: 2.0 },
  ];
  const colors = [LIME, BLUE, AMBER];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={M} barSize={44}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="ligand" tick={fs} />
        <YAxis tick={fs} label={{ value: "g(r) peak", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <Bar dataKey="peak" radius={[3, 3, 0, 0]} label={{ position: "top", style: { ...fs, fontWeight: 700, fill: INK } }}>
          {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   STOKES-EINSTEIN — predicted vs observed
   ═══════════════════════════════════════════ */
export function StokesEinsteinChart() {
  const data = [
    { temp: "320 K", expected: 0.01380, actual: 0.01380 },
    { temp: "340 K", expected: 0.01610, actual: 0.01290 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={M} barSize={30} barGap={3}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="temp" tick={fs} />
        <YAxis tick={fs} domain={[0, 0.019]} tickFormatter={(v) => v.toFixed(4)}
          label={{ value: "D (×10⁻⁵)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED }, offset: -2 }} />
        <Tooltip contentStyle={ttStyle} formatter={(v) => v.toFixed(5)} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Bar dataKey="expected" name="Predicted" fill={LIME} radius={[3, 3, 0, 0]} />
        <Bar dataKey="actual" name="Observed" fill={RED} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   HYDRODYNAMIC RADIUS — rH grows at 340 K
   ═══════════════════════════════════════════ */
export function HydrodynamicRadiusChart() {
  const data = [
    { temp: "280 K", rH: 3.2, D: 0.00825 },
    { temp: "300 K", rH: 3.35, D: 0.01130 },
    { temp: "320 K", rH: 3.5, D: 0.01380 },
    { temp: "340 K", rH: 4.0, D: 0.01290 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="temp" tick={fs} />
        <YAxis yAxisId="left" tick={fs} domain={[2.8, 4.4]}
          label={{ value: "rH (Å)", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <YAxis yAxisId="right" orientation="right" tick={fs} tickFormatter={(v) => v.toFixed(3)}
          label={{ value: "D (×10⁻⁵)", angle: 90, position: "insideRight", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Bar yAxisId="left" dataKey="rH" name="rH (Å)" fill={LIME} radius={[3, 3, 0, 0]} barSize={28} />
        <Line yAxisId="right" dataKey="D" name="D (×10⁻⁵)" stroke={RED} strokeWidth={2.5}
          dot={{ r: 5, fill: RED, stroke: "#7a0000", strokeWidth: 1 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

/* ═══════════════════════════════════════════
   CN TEMPERATURE
   ═══════════════════════════════════════════ */
export function CNTemperatureChart() {
  const data = [
    { temp: "280 K", thiourea: 2.0, water: 4.8 },
    { temp: "300 K", thiourea: 1.5, water: 4.75 },
    { temp: "320 K", thiourea: 1.2, water: 4.7 },
    { temp: "340 K", thiourea: 0.85, water: 4.6 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={M}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
        <XAxis dataKey="temp" tick={fs} />
        <YAxis tick={fs} label={{ value: "g(r) peak", angle: -90, position: "insideLeft", style: { ...fs, fill: MUTED } }} />
        <Tooltip contentStyle={ttStyle} />
        <Legend wrapperStyle={{ ...fs, paddingTop: 0 }} />
        <Line dataKey="thiourea" name="Zn–Thiourea" stroke={AMBER} strokeWidth={2.5} dot={{ r: 4, fill: AMBER }} />
        <Line dataKey="water" name="Zn–Water" stroke={BLUE} strokeWidth={2} dot={{ r: 3, fill: BLUE }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
