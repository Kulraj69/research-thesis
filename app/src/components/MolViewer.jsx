import { useEffect, useRef, useState } from "react";
import $3Dmol from "3dmol";

const LEGEND = [
  { color: "#00d4ff", label: "Zn²⁺ ion", sub: "cyan · large sphere", size: 16, halo: true },
  { color: "#c8b200", label: "SO₄²⁻ sulfate", sub: "golden · S atom", size: 12, halo: false },
  { color: "#cc2222", label: "H₂O water", sub: "red · O atom", size: 10, halo: false },
  { color: "#2255cc", label: "Thiourea N", sub: "blue · N atom", size: 11, halo: false },
  { color: "#444444", label: "Thiourea C", sub: "dark · C atom", size: 10, halo: false },
];

export default function MolViewer({ pdbUrl = "/md_visualization.pdb" }) {
  const wrapperRef = useRef(null);
  const viewerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 50 && height > 50 && !ready) setReady(true);
      if (viewerRef.current) viewerRef.current.resize();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ready]);

  useEffect(() => {
    if (!ready || !wrapperRef.current) return;

    const el = wrapperRef.current;
    // Clear any previous viewer
    el.innerHTML = "";

    const viewerDiv = document.createElement("div");
    viewerDiv.style.cssText = "width:100%;height:100%;position:absolute;top:0;left:0;";
    el.appendChild(viewerDiv);

    const viewer = $3Dmol.createViewer(viewerDiv, {
      backgroundColor: "white",
      antialias: true,
    });
    viewerRef.current = viewer;

    fetch(pdbUrl)
      .then((r) => r.text())
      .then((pdb) => {
        viewer.addModel(pdb, "pdb");
        viewer.setStyle({}, {});

        // Zn²⁺ — bright cyan, large and prominent
        viewer.addStyle({ elem: "ZN" }, {
          sphere: { radius: 1.4, color: "#00d4ff" },
        });
        // Zn halo — larger, more visible
        viewer.addStyle({ elem: "ZN" }, {
          sphere: { radius: 2.2, color: "#00d4ff", opacity: 0.35 },
        });
        viewer.addStyle({ elem: "S" }, {
          sphere: { radius: 0.6, color: "#c8b200" },
        });
        // Oxygen — slightly smaller so Zn stands out
        viewer.addStyle({ elem: "O" }, {
          sphere: { radius: 0.32, color: "#cc2222" },
        });
        viewer.addStyle({ elem: "N" }, {
          sphere: { radius: 0.45, color: "#2255cc" },
        });
        viewer.addStyle({ elem: "C" }, {
          sphere: { radius: 0.4, color: "#333333" },
        });
        viewer.addStyle({ elem: "H" }, {
          sphere: { radius: 0.18, color: "#ffffff", opacity: 0.35 },
        });

        viewer.zoomTo();
        viewer.spin("y", 0.4);
        viewer.render();
      });

    return () => {
      viewer.clear();
      viewerRef.current = null;
    };
  }, [ready, pdbUrl]);

  return (
    <div style={{
      width: "100%", height: "100%", position: "relative",
      borderRadius: "6px", border: "1px solid #c8c4b8", overflow: "hidden",
      minHeight: "280px",
    }} ref={wrapperRef}>
      {/* Legend overlay */}
      <div style={{
        position: "absolute", top: 8, right: 8, zIndex: 10,
        background: "rgba(20,20,20,0.82)", backdropFilter: "blur(6px)",
        borderRadius: "8px", padding: "8px 12px",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex", flexDirection: "column", gap: "5px",
        pointerEvents: "none",
        minWidth: "148px",
      }}>
        <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>
          Atom Legend
        </div>
        {LEGEND.map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ position: "relative", width: item.size + 4, height: item.size + 4, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.halo && (
                <span style={{
                  position: "absolute",
                  width: item.size + 8, height: item.size + 8,
                  borderRadius: "50%",
                  background: item.color,
                  opacity: 0.3,
                }} />
              )}
              <span style={{
                display: "inline-block",
                width: item.size, height: item.size,
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
                position: "relative",
              }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <span style={{ fontSize: "10px", color: "#fff", fontWeight: 600, lineHeight: 1.2 }}>{item.label}</span>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.45)", lineHeight: 1.2 }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
