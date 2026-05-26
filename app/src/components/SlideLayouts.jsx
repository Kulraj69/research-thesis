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

function countItems(blocks) {
  let n = 0;
  for (const b of blocks) {
    if (b.kind === "bullets" || b.kind === "numbered") n += (b.items?.length || 0);
    else if (b.kind === "table") n += (b.rows?.length || 0) + 1;
    else if (b.kind === "columns") {
      for (const c of b.cols || []) n += (c.items?.length || 0);
    } else if (b.kind === "split") {
      n += countItems([b.left, b.right].filter(Boolean));
    } else n += 1;
  }
  return n;
}

export function BodySlide({ data }) {
  const blocks = data.content;
  const hasGrowable = blocks.some(
    (b) =>
      b.kind === "split" ||
      b.kind === "chart" ||
      (b.kind === "columns" && !b.compact) ||
      b.kind === "tripleChart" ||
      b.kind === "image" ||
      b.kind === "dualImage" ||
      b.kind === "mol3d" ||
      b.kind === "checklist"
  );
  const items = countItems(blocks);
  const density = items <= 4 ? "sparse" : items <= 8 ? "medium" : "";

  return (
    <div className={`slide-content body-layout ${density}`}>
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
          <div key={i} className="person-tag" style={{ "--i": i }}>
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
    </div>
  );
}
