import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PptxGenJS from "pptxgenjs";
import { slides } from "../slides";

export function Toolbar({ current, total, onPrev, onNext, slideRef }) {
  const downloadPDF = async () => {
    const el = slideRef.current;
    if (!el) return;
    const btn = document.querySelector(".toolbar");
    btn.style.display = "none";

    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });
    const originalSlide = current;

    for (let i = 0; i < total; i++) {
      const evt = new CustomEvent("go-to-slide", { detail: i });
      window.dispatchEvent(evt);
      await delay(300);

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FAF8EF",
        width: el.offsetWidth,
        height: el.offsetHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720);
    }

    const goBack = new CustomEvent("go-to-slide", { detail: originalSlide });
    window.dispatchEvent(goBack);
    btn.style.display = "";

    pdf.save("Thesis_Presentation_KulrajSingh.pdf");
  };

  const downloadPPTX = async () => {
    const el = slideRef.current;
    if (!el) return;
    const btn = document.querySelector(".toolbar");
    btn.style.display = "none";

    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
    pptx.layout = "WIDE";
    const originalSlide = current;

    for (let i = 0; i < total; i++) {
      const evt = new CustomEvent("go-to-slide", { detail: i });
      window.dispatchEvent(evt);
      await delay(300);

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FAF8EF",
        width: el.offsetWidth,
        height: el.offsetHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const s = pptx.addSlide();
      s.addImage({ data: imgData, x: 0, y: 0, w: 13.33, h: 7.5 });
    }

    const goBack = new CustomEvent("go-to-slide", { detail: originalSlide });
    window.dispatchEvent(goBack);
    btn.style.display = "";

    pptx.writeFile({ fileName: "Thesis_Presentation_KulrajSingh.pptx" });
  };

  return (
    <div className="toolbar">
      <div className="toolbar-nav">
        <button onClick={onPrev} disabled={current === 0} className="nav-btn">
          ← Prev
        </button>
        <span className="toolbar-count">
          {current + 1} / {total}
        </span>
        <button onClick={onNext} disabled={current === total - 1} className="nav-btn">
          Next →
        </button>
      </div>
      <div className="toolbar-downloads">
        <button className="dl-btn pdf" onClick={downloadPDF}>
          ↓ PDF
        </button>
        <button className="dl-btn pptx" onClick={downloadPPTX}>
          ↓ PPTX
        </button>
      </div>
    </div>
  );
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
