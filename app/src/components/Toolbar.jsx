import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PptxGenJS from "pptxgenjs";
import { slides } from "../slides";

export function Toolbar({ current, total, onPrev, onNext, slideRef, onPresent }) {
  const downloadPDF = async () => {
    const el = slideRef.current;
    if (!el) return;
    
    const btn = document.querySelector(".toolbar");
    const statusDiv = document.createElement("div");
    statusDiv.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#333;color:#fff;padding:20px 40px;border-radius:8px;z-index:9999;font-size:16px;";
    statusDiv.textContent = "Generating PDF... 0/" + total;
    document.body.appendChild(statusDiv);
    btn.style.display = "none";

    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1280, 720] });
    const originalSlide = current;

    for (let i = 0; i < total; i++) {
      statusDiv.textContent = `Generating PDF... ${i + 1}/${total}`;
      const evt = new CustomEvent("go-to-slide", { detail: i });
      window.dispatchEvent(evt);
      await delay(600); // Increased delay for rendering

      try {
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#FAF8EF",
          width: el.offsetWidth,
          height: el.offsetHeight,
          logging: false,
          imageTimeout: 5000,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720);
      } catch (err) {
        console.error("Error capturing slide", i, err);
      }
    }

    const goBack = new CustomEvent("go-to-slide", { detail: originalSlide });
    window.dispatchEvent(goBack);
    btn.style.display = "";
    document.body.removeChild(statusDiv);

    pdf.save("Thesis_Presentation_KulrajSingh.pdf");
  };

  const downloadPPTX = async () => {
    const el = slideRef.current;
    if (!el) return;
    
    const btn = document.querySelector(".toolbar");
    const statusDiv = document.createElement("div");
    statusDiv.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#333;color:#fff;padding:20px 40px;border-radius:8px;z-index:9999;font-size:16px;";
    statusDiv.textContent = "Generating PPTX... 0/" + total;
    document.body.appendChild(statusDiv);
    btn.style.display = "none";

    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
    pptx.layout = "WIDE";
    const originalSlide = current;

    for (let i = 0; i < total; i++) {
      statusDiv.textContent = `Generating PPTX... ${i + 1}/${total}`;
      const evt = new CustomEvent("go-to-slide", { detail: i });
      window.dispatchEvent(evt);
      await delay(600);

      try {
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#FAF8EF",
          width: el.offsetWidth,
          height: el.offsetHeight,
          logging: false,
          imageTimeout: 5000,
        });

        const imgData = canvas.toDataURL("image/png");
        const s = pptx.addSlide();
        s.addImage({ data: imgData, x: 0, y: 0, w: 13.33, h: 7.5 });
      } catch (err) {
        console.error("Error capturing slide", i, err);
      }
    }

    const goBack = new CustomEvent("go-to-slide", { detail: originalSlide });
    window.dispatchEvent(goBack);
    btn.style.display = "";
    document.body.removeChild(statusDiv);

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
        <button className="dl-btn present" onClick={onPresent}>
          ▶ Present
        </button>
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
