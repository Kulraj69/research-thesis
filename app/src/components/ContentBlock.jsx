import { lazy, Suspense } from "react";
import {
  DiffusionBarChart, ArrheniusScatter, RDFOverlayChart, RDFTemperatureChart,
  CoordinationBarChart, SystemPieChart, DensityConvergenceChart,
  StokesEinsteinChart, CNTemperatureChart, HydrodynamicRadiusChart,
  BatteryComparisonChart, ThioureaPropertyChart,
  TempConvergenceChart, EnergyConvergenceChart, MSDCurvesChart,
  ZnSO4BigRDF, ZnWaterTempRDF, RDFConceptChart,
} from "./Charts";

const MolViewer = lazy(() => import("./MolViewer"));

const CHART_MAP = {
  diffusionBar: DiffusionBarChart,
  arrhenius: ArrheniusScatter,
  rdfOverlay: RDFOverlayChart,
  rdfTemp: RDFTemperatureChart,
  coordBar: CoordinationBarChart,
  systemPie: SystemPieChart,
  densityConv: DensityConvergenceChart,
  stokesEinstein: StokesEinsteinChart,
  cnTemp: CNTemperatureChart,
  hydroRadius: HydrodynamicRadiusChart,
  batteryComparison: BatteryComparisonChart,
  thioureaStructure: ThioureaPropertyChart,
  tempConv: TempConvergenceChart,
  energyConv: EnergyConvergenceChart,
  msdCurves: MSDCurvesChart,
  znSO4RDF: ZnSO4BigRDF,
  znWaterTempRDF: ZnWaterTempRDF,
  rdfConcept: RDFConceptChart,
};

const colorMap = {
  lime: { bg: "#f3fce3", border: "#C9F234", text: "#3d5c0a" },
  olive: { bg: "#eef4e2", border: "#588421", text: "#3a5a10" },
  blue: { bg: "#e8f0fe", border: "#1a73e8", text: "#1a4fa0" },
  amber: { bg: "#fef7e0", border: "#d4a017", text: "#7a5c00" },
};

export function ContentBlock({ block }) {
  switch (block.kind) {
    case "bullets":
      return <Bullets block={block} />;
    case "numbered":
      return <Numbered block={block} />;
    case "table":
      return <Table block={block} />;
    case "columns":
      return <Columns block={block} />;
    case "callout":
      return <Callout block={block} />;
    case "pipeline":
      return <Pipeline block={block} />;
    case "bigstat":
      return <BigStat block={block} />;
    case "hierarchy":
      return <Hierarchy block={block} />;
    case "equation":
      return <Equation block={block} />;
    case "chart": {
      const ChartComp = CHART_MAP[block.chartType];
      return ChartComp ? <div className="cb-chart"><ChartComp /></div> : null;
    }
    case "tripleChart":
      return <TripleChart block={block} />;
    case "split":
      return <Split block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "dualImage":
      return <DualImage block={block} />;
    case "mol3d":
      return <Mol3D block={block} />;
    case "checklist":
      return <Checklist block={block} />;
    case "refs":
      return <Refs block={block} />;
    default:
      return null;
  }
}

function TripleChart({ block }) {
  return (
    <div className="cb-triple-chart">
      {block.charts.map((chartType, i) => {
        const C = CHART_MAP[chartType];
        return (
          <div key={i} className="cb-triple-item">
            {block.labels?.[i] && <span className="cb-triple-label">{block.labels[i]}</span>}
            <div className="cb-chart">{C ? <C /> : null}</div>
          </div>
        );
      })}
    </div>
  );
}

function Split({ block }) {
  return (
    <div className="cb-split">
      <div className="cb-split-left">
        <ContentBlock block={block.left} />
      </div>
      <div className="cb-split-right">
        <ContentBlock block={block.right} />
      </div>
    </div>
  );
}

function Bullets({ block }) {
  return (
    <div className="cb-bullets">
      {block.title && <h3 className="cb-title">{block.title}</h3>}
      <ul>
        {block.items.map((item, i) => (
          <li key={i} style={{ "--i": i }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Numbered({ block }) {
  return (
    <div className="cb-numbered">
      {block.title && <h3 className="cb-title">{block.title}</h3>}
      <ol>
        {block.items.map((item, i) => (
          <li key={i} style={{ "--i": i }}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

function Table({ block }) {
  return (
    <div className="cb-table-wrap">
      <table className="cb-table">
        <thead>
          <tr>
            {block.headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri} className={block.highlight === ri ? "row-highlight" : ""} style={{ "--i": ri }}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Columns({ block }) {
  const compact = block.compact;
  return (
    <div
      className={`cb-columns${compact ? " cb-columns-compact" : ""}`}
      style={{ gridTemplateColumns: `repeat(${block.cols.length}, 1fr)` }}
    >
      {block.cols.map((col, i) => {
        const c = colorMap[col.color] || colorMap.lime;
        return (
          <div key={i} className="cb-card" style={{ borderLeftColor: c.border, background: c.bg, "--i": i }}>
            <h4 style={{ color: c.text }}>{col.title}</h4>
            <ul>
              {col.items.map((item, j) => (
                <li key={j} style={{ color: "#333" }}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Callout({ block }) {
  return (
    <div className="cb-callout">
      <p>{block.text}</p>
    </div>
  );
}

function Pipeline({ block }) {
  return (
    <div className="cb-pipeline">
      {block.steps.map((step, i) => (
        <div key={i} className="pipe-item" style={{ "--i": i }}>
          {i > 0 && <span className="pipe-arrow">{"\u2192"}</span>}
          <div className="pipe-box">
            <span className="pipe-num">{i + 1}</span>
            <strong>{step.label}</strong>
            <span className="pipe-detail">{step.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function BigStat({ block }) {
  return (
    <div className="cb-bigstat">
      <div className="bigstat-value">{block.value}</div>
      <div className="bigstat-label">{block.label}</div>
      {block.sub && <div className="bigstat-sub">{block.sub}</div>}
    </div>
  );
}

function Hierarchy({ block }) {
  return (
    <div className="cb-hierarchy">
      {block.items.map((item, i) => {
        const c = colorMap[item.color] || colorMap.lime;
        return (
          <div key={i} className="hier-group" style={{ "--i": i }}>
            {i > 0 && <span className="hier-sep">&gt;&gt;</span>}
            <div className="hier-box" style={{ borderColor: c.border, background: c.bg }}>
              <div className="hier-value" style={{ color: c.text }}>{item.value}</div>
              <div className="hier-label">{item.label}</div>
              <div className="hier-sub">{item.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Equation({ block }) {
  return (
    <div className="cb-equation">
      <span>{block.tex}</span>
    </div>
  );
}

function ImageBlock({ block }) {
  return (
    <div className="cb-image" style={block.maxWidth ? { maxWidth: block.maxWidth } : {}}>
      {block.caption && <p className="cb-image-caption">{block.caption}</p>}
      <img src={block.src} alt={block.alt || block.caption || ""} />
    </div>
  );
}

function DualImage({ block }) {
  return (
    <div className="cb-dual-image">
      {block.images.map((img, i) => (
        <div key={i} className="cb-dual-item">
          <img src={img.src} alt={img.alt || img.caption || ""} />
          {img.caption && <p className="cb-dual-caption">{img.caption}</p>}
        </div>
      ))}
    </div>
  );
}

function Refs({ block }) {
  return (
    <div className="cb-refs">
      <ol>
        {block.items.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ol>
    </div>
  );
}

function Checklist({ block }) {
  const allPassed = block.items.every((it) => it.pass !== false);
  return (
    <div className="cb-checklist">
      <div className="cb-checklist-grid">
        {block.items.map((item, i) => (
          <div key={i} className={`cb-check-card ${item.pass === false ? "fail" : "pass"}`} style={{ "--i": i }}>
            <div className="cb-check-icon">{item.pass === false ? "✗" : "✓"}</div>
            <div className="cb-check-body">
              <div className="cb-check-label">{item.label}</div>
              <div className="cb-check-value">{item.value}</div>
              {item.detail && <div className="cb-check-detail">{item.detail}</div>}
            </div>
            <div className="cb-check-criterion">{item.criterion}</div>
          </div>
        ))}
      </div>
      {allPassed && (
        <div className="cb-checklist-banner pass">
          All {block.items.length} / {block.items.length} equilibration criteria PASSED — system ready for production MD
        </div>
      )}
    </div>
  );
}

function Mol3D({ block }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
      {block.caption && (
        <p style={{ fontSize: "11px", color: "#666", textAlign: "center", marginBottom: "4px", fontWeight: 500 }}>
          {block.caption}
        </p>
      )}
      <div style={{ flex: 1, minHeight: 0 }}>
        <Suspense fallback={<div style={{ textAlign: "center", padding: "40px", color: "#999" }}>Loading 3D viewer…</div>}>
          <MolViewer pdbUrl={block.src || "/md_visualization.pdb"} />
        </Suspense>
      </div>
      <p style={{ fontSize: "9px", color: "#999", textAlign: "center", marginTop: "3px" }}>
        Drag to rotate · Scroll to zoom · Right-click to pan
      </p>
    </div>
  );
}
