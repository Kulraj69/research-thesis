import { useEffect, useRef, useState } from "react";
import $3Dmol from "3dmol";

const LEGEND = [
  { color: "#00d4ff", label: "Zn²⁺", size: 14 },
  { color: "#c8b200", label: "Sulfur (S)", size: 10 },
  { color: "#cc2222", label: "Oxygen (O)", size: 8 },
  { color: "#2255cc", label: "Nitrogen (N)", size: 9 },
  { color: "#333333", label: "Carbon (C)", size: 8 },
  { color: "#cccccc", label: "Hydrogen (H)", size: 6 },
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
      {/* Legend overlay — pointer-events none so it doesn't block interaction */}
      <div style={{
        position: "absolute", bottom: 8, left: 8, zIndex: 10,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)",
        borderRadius: "6px", padding: "6px 10px",
        border: "1px solid #e0ddd5",
        display: "flex", flexDirection: "column", gap: "3px",
        pointerEvents: "none",
      }}>
        {LEGEND.map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              display: "inline-block",
              width: item.size, height: item.size,
              borderRadius: "50%",
              background: item.color,
              border: item.color === "#cccccc" ? "1px solid #aaa" : "none",
              flexShrink: 0,
            }} />
            <span style={{ fontSize: "9px", color: "#444", fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
