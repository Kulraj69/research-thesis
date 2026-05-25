import { ContentBlock } from "./ContentBlock";

function bold(text) {
  if (!text) return text;
  return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export function TitleSlide({ data }) {
  return (
    <div className="slide-content title-layout">
      <div className="title-banner">
        <h1>{data.heading}</h1>
        {data.sub && <p className="title-sub">{data.sub}</p>}
      </div>

      <div className="title-middle">
        <img src="/logos/iitbhu-crest.png" alt="" className="title-crest" />
        <img src="/logos/iitbhu-text.png" alt="IIT BHU" className="title-iit-text" />
      </div>

      <div className="title-bottom">
        <div className="title-col">
          {data.left.map((line, i) => (
            <p key={i} className={i === 0 ? "col-heading" : "col-line"}>
              {bold(line)}
            </p>
          ))}
        </div>
        <div className="title-col title-col-right">
          {data.right.map((line, i) => (
            <p key={i} className={i === 0 ? "col-heading" : "col-line"}>
              {bold(line)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BodySlide({ data }) {
  const blocks = data.content;
  const hasGrowable = blocks.some(
    (b) => b.kind === "split" || b.kind === "chart" || b.kind === "columns" || b.kind === "tripleChart" || b.kind === "image" || b.kind === "dualImage"
  );

  return (
    <div className="slide-content body-layout">
      <h2 className="slide-heading">{data.heading}</h2>
      <div className="slide-body" style={!hasGrowable ? { justifyContent: "space-evenly" } : undefined}>
        {blocks.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>
    </div>
  );
}

export function ThankYouSlide({ data }) {
  return (
    <div className="slide-content thankyou-layout">
      <img src="/logos/iitbhu-crest.png" alt="" className="thankyou-crest" />
      <h1 className="thankyou-heading">{data.heading}</h1>
      <div className="thankyou-info">
        <p className="thankyou-name">Kulraj Singh Sabharwal</p>
        <p className="thankyou-meta">21054013 · IDD Chemistry · IIT (BHU) Varanasi</p>
      </div>
      <div className="thankyou-people">
        {data.people.map((p, i) => (
          <div key={i} className="person-tag">
            <span className="person-role">{p.role}</span>
            <span className="person-name">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="thankyou-tools">
        {data.tools.map((t, i) => (
          <span key={i} className="tool-chip">{t}</span>
        ))}
      </div>
      <p className="thankyou-cta">Questions?</p>
    </div>
  );
}
