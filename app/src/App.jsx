import { useState, useEffect, useRef, useCallback } from "react";
import { slides } from "./slides";
import {
  TitleSlide,
  BodySlide,
  ThankYouSlide,
} from "./components/SlideLayouts";
import { Toolbar } from "./components/Toolbar";
import "./index.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const slideRef = useRef(null);

  const go = useCallback(
    (dir) => {
      setCurrent((c) => Math.max(0, Math.min(total - 1, c + dir)));
    },
    [total]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  useEffect(() => {
    const handler = (e) => setCurrent(e.detail);
    window.addEventListener("go-to-slide", handler);
    return () => window.removeEventListener("go-to-slide", handler);
  }, []);

  const slide = slides[current];

  const renderSlide = () => {
    switch (slide.type) {
      case "title":
        return <TitleSlide data={slide} />;
      case "thankyou":
        return <ThankYouSlide data={slide} />;
      default:
        return <BodySlide data={slide} />;
    }
  };

  return (
    <div className="app">
      <Toolbar
        current={current}
        total={total}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        slideRef={slideRef}
      />

      <div className="slide-viewport">
        <div className="slide-frame" ref={slideRef} id="slide-frame">
          <div className="slide-inner">{renderSlide()}</div>
          <div className="slide-footer">
            <img src="/logos/intellects-logo.png" alt="Intellects" className="footer-intellects" />
            <div className="footer-line-container">
              <div
                className="footer-line-fill"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
            <span className="footer-page">{current + 1}</span>
            <svg className="footer-bulb" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="18" r="14" stroke="#00b4d8" strokeWidth="2.5" fill="none"/>
              <path d="M14 32h12M15 36h10M16 40h8" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 18c0-3 2-5 5-5" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
