// Services: website creation, Website Care plans and social media packages.
// All text lives in content/services.js.

const serif = "var(--font-serif), Georgia, serif";

const reveal = (name, range = "entry 4% cover 28%", dur = "0.9s") => ({
  opacity: "0",
  animation: `${name} ${dur} cubic-bezier(0.16,1,0.3,1) both`,
  animationTimeline: "view()",
  animationRange: range,
});

const label = (color, margin = "0 0 14px") => ({
  fontSize: "11px",
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color,
  margin,
});

const cardShadow = "0 26px 50px -34px rgba(22,40,60,0.6)";

const button = (bg, fg, extra = {}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "52px",
  textDecoration: "none",
  background: bg,
  color: fg,
  borderRadius: "100px",
  fontSize: "12px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: "500",
  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
  ...extra,
});

function Check({ color, text, size = "15px", pad = "11px 0", line, textColor, mark = "✓" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "12px",
        padding: pad,
        borderBottom: line ? `1px solid ${line}` : "none",
      }}
    >
      <span style={{ color, fontSize: "15px", flexShrink: "0" }}>{mark}</span>
      <span style={{ fontSize: size, lineHeight: "1.5", color: textColor, textWrap: "pretty" }}>{text}</span>
    </div>
  );
}

function LabeledItem({ b, text, line, body }) {
  return (
    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.6",
        margin: "0",
        padding: "11px 0",
        borderBottom: `1px solid ${line}`,
        textWrap: "pretty",
      }}
    >
      <strong style={{ fontWeight: "500" }}>{b}:</strong> <span style={{ color: body }}>{text}</span>
    </p>
  );
}

function SubHeading({ title, text }) {
  return (
    <div
      style={{
        marginTop: "clamp(64px, 8vw, 104px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "16px 48px",
      }}
    >
      <h3
        style={{
          fontFamily: serif,
          fontWeight: "400",
          fontSize: "clamp(30px, 4vw, 52px)",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
          margin: "0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(16px, 1.6vw, 18px)",
          lineHeight: "1.7",
          color: "#3D5063",
          margin: "0",
          maxWidth: "50ch",
          textWrap: "pretty",
        }}
      >
        {text}
      </p>
    </div>
  );
}

const grid = (min, marginTop = "clamp(18px, 2.4vw, 26px)") => ({
  marginTop,
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}), 1fr))`,
  gap: "clamp(18px, 2.4vw, 26px)",
});

const whiteCard = {
  background: "#FFFFFF",
  borderRadius: "8px",
  padding: "clamp(26px, 3.2vw, 38px)",
  boxShadow: cardShadow,
  ...reveal("kdc-rise"),
};

const h4 = (size = "clamp(24px, 2.6vw, 32px)") => ({
  fontFamily: serif,
  fontWeight: "400",
  fontSize: size,
  lineHeight: "1.1",
  margin: "0 0 10px",
});

export default function Services({ t, s, whatsapp, webHref, launchHref, monthly, care }) {
  return (
    <section id="services" style={{ background: "#E6EAE0", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          left: "-180px",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,111,78,0.18), rgba(201,111,78,0) 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)",
          position: "relative",
        }}
      >
        <p style={{ ...label("#9A4A2E", "0 0 24px"), display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: serif, fontSize: "15px", letterSpacing: "0" }}>10</span>
          {s.svcK}
        </p>
        <h2
          data-kdc-reveal=""
          style={{
            fontFamily: serif,
            fontWeight: "400",
            fontSize: "clamp(38px, 6vw, 84px)",
            lineHeight: "1.02",
            letterSpacing: "-0.03em",
            margin: "0",
            maxWidth: "18ch",
            textWrap: "balance",
            ...reveal("kdc-wipe", "entry 6% cover 30%", "1s"),
          }}
        >
          {s.svcHa} <em style={{ fontStyle: "italic", color: "#A64F33" }}>{s.svcHb}</em>
        </h2>
        <p
          style={{
            fontSize: "clamp(17px, 1.8vw, 20px)",
            lineHeight: "1.65",
            color: "#3D5063",
            margin: "clamp(22px, 3vw, 30px) 0 0",
            maxWidth: "56ch",
            textWrap: "pretty",
          }}
        >
          {s.svcIntro}
        </p>

        {/* Website Starter Package */}
        <article
          data-kdc-reveal=""
          style={{
            marginTop: "clamp(44px, 6vw, 72px)",
            background: "#16283C",
            color: "#F7F2E7",
            borderRadius: "8px",
            padding: "clamp(28px, 4vw, 52px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(28px, 5vw, 72px)",
            boxShadow: "0 46px 80px -40px rgba(22,40,60,0.75)",
            ...reveal("kdc-depth", "entry 4% cover 30%", "1s"),
          }}
        >
          <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column" }}>
            <p style={label("#E8A184", "0 0 18px")}>{s.webTier}</p>
            <h3
              style={{
                fontFamily: serif,
                fontWeight: "400",
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: "1.04",
                letterSpacing: "-0.02em",
                margin: "0",
                textWrap: "balance",
              }}
            >
              {s.webH}
            </h3>
            <p
              style={{
                fontSize: "clamp(16px, 1.6vw, 18px)",
                lineHeight: "1.75",
                color: "#B9C7D4",
                margin: "20px 0 0",
                maxWidth: "46ch",
                textWrap: "pretty",
              }}
            >
              {s.webP}
            </p>
            <div style={{ marginTop: "clamp(28px, 4vw, 40px)" }}>
              <span
                style={{ fontFamily: serif, fontSize: "clamp(52px, 6vw, 76px)", lineHeight: "1", display: "block" }}
              >
                {s.webPrice}
              </span>
              <span style={{ ...label("#B9C7D4", "10px 0 0"), letterSpacing: "0.2em", display: "block" }}>
                {s.webPriceNote}
              </span>
            </div>
            <a
              className="hv-13"
              href={webHref}
              style={button("#F7F2E7", "#16283C", {
                marginTop: "26px",
                alignSelf: "flex-start",
                padding: "0 34px",
                minHeight: "56px",
                letterSpacing: "0.18em",
              })}
            >
              {s.webCta}
            </a>
          </div>
          <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column" }}>
            <p style={label("#E8A184", "0 0 6px")}>{s.webIncH}</p>
            {s.webList.map((text, i) => (
              <Check
                key={i}
                color="#E8A184"
                text={text}
                size="clamp(15px, 1.5vw, 17px)"
                line="rgba(247,242,231,0.14)"
              />
            ))}
          </div>
          <div
            style={{
              flex: "1 1 100%",
              paddingTop: "clamp(22px, 3vw, 30px)",
              borderTop: "1px solid rgba(247,242,231,0.2)",
            }}
          >
            <p style={label("#B9C7D4", "0 0 8px")}>{s.webNotH}</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                gap: "0 32px",
              }}
            >
              {s.webNot.map((text, i) => (
                <Check key={i} color="#B9C7D4" textColor="#B9C7D4" text={text} pad="9px 0" mark={"–"} />
              ))}
            </div>
          </div>
        </article>

        {/* Add-ons and domain options */}
        <div style={grid("320px")}>
          <div data-kdc-reveal="" style={whiteCard}>
            <p style={label("#9A4A2E")}>{s.addTag}</p>
            <h4 style={h4()}>{s.addH}</h4>
            {s.addons.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(22,40,60,0.1)",
                }}
              >
                <span style={{ fontSize: "15px", lineHeight: "1.45" }}>{a.name}</span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.45",
                    color: "#9A4A2E",
                    textAlign: "right",
                    flexShrink: "0",
                    maxWidth: "50%",
                  }}
                >
                  {a.price}
                </span>
              </div>
            ))}
          </div>
          {s.domainOpts.map((d, i) => (
            <div key={i} data-kdc-reveal="" style={whiteCard}>
              <p style={label("#9A4A2E")}>{d.tag}</p>
              <h4 style={h4()}>{d.name}</h4>
              {d.items.map((text, j) => (
                <Check key={j} color="#A64F33" textColor="#3D5063" text={text} line="rgba(22,40,60,0.1)" />
              ))}
            </div>
          ))}
        </div>

        {/* Website Care plans */}
        <SubHeading title={s.careH} text={s.careP} />
        <div style={grid("300px", "clamp(28px, 4vw, 44px)")}>
          {care.map((c, i) => (
            <article
              key={i}
              data-kdc-reveal=""
              style={{
                background: c.bg,
                color: c.fg,
                borderRadius: "8px",
                padding: "clamp(26px, 3.2vw, 40px)",
                display: "flex",
                flexDirection: "column",
                boxShadow: cardShadow,
                ...reveal("kdc-rise"),
              }}
            >
              <p style={label(c.accent)}>{c.tier}</p>
              <h4 style={{ ...h4("clamp(26px, 2.8vw, 34px)"), margin: "0" }}>{c.name}</h4>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
                <span style={{ fontFamily: serif, fontSize: "clamp(40px, 4.4vw, 54px)", lineHeight: "1" }}>
                  {c.price}
                </span>
                <span style={{ ...label(c.body, "0"), letterSpacing: "0.2em" }}>{s.perMonth}</span>
              </div>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: c.body, margin: "14px 0", textWrap: "pretty" }}>
                {c.who}
              </p>
              {c.items.map((text, j) => (
                <Check key={j} color={c.accent} text={text} pad="10px 0" line={c.line} />
              ))}
              <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                <a className="hv-13" href={c.href} style={button(c.ctaBg, c.ctaFg)}>
                  {s.pkgCta}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div
          style={{
            marginTop: "clamp(18px, 2.4vw, 26px)",
            border: "1px solid rgba(22,40,60,0.16)",
            borderRadius: "8px",
            padding: "clamp(24px, 3.2vw, 38px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(20px, 4vw, 56px)",
          }}
        >
          <div style={{ flex: "1 1 280px", minWidth: "0" }}>
            <p
              style={{
                fontFamily: serif,
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: "1.3",
                margin: "0",
                color: "#9A4A2E",
                textWrap: "pretty",
              }}
            >
              {s.careNote}
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#3D5063", margin: "14px 0 0", textWrap: "pretty" }}>
              {s.careRoll}
            </p>
          </div>
          <div style={{ flex: "2 1 420px", minWidth: "0" }}>
            <p style={label("#9A4A2E", "0 0 6px")}>{s.careOutH}</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap: "0 28px",
              }}
            >
              {s.careOut.map((text, i) => (
                <Check key={i} color="#5A6B7A" textColor="#3D5063" text={text} pad="8px 0" mark={"–"} />
              ))}
            </div>
          </div>
        </div>

        {/* Social media packages */}
        <SubHeading title={s.smH} text={s.smP} />
        <article
          data-kdc-reveal=""
          style={{
            marginTop: "clamp(28px, 4vw, 44px)",
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: "clamp(28px, 4vw, 48px)",
            boxShadow: cardShadow,
            ...reveal("kdc-rise"),
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px 48px",
              paddingBottom: "clamp(22px, 3vw, 32px)",
              borderBottom: "2px solid #C96F4E",
            }}
          >
            <div style={{ flex: "1 1 340px", minWidth: "0" }}>
              <p style={label("#9A4A2E")}>{s.launch.tier}</p>
              <h4 style={{ ...h4("clamp(30px, 3.6vw, 46px)"), lineHeight: "1.04", margin: "0" }}>{s.launch.name}</h4>
              <p
                style={{
                  fontSize: "clamp(16px, 1.6vw, 18px)",
                  lineHeight: "1.6",
                  color: "#3D5063",
                  margin: "14px 0 0",
                  maxWidth: "52ch",
                  textWrap: "pretty",
                }}
              >
                {s.launch.who}
              </p>
            </div>
            <div style={{ flex: "0 1 300px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <span
                  style={{ fontFamily: serif, fontSize: "clamp(40px, 4.6vw, 58px)", lineHeight: "1", display: "block" }}
                >
                  {s.launch.price}
                </span>
                <span style={{ ...label("#3D5063", "8px 0 0"), letterSpacing: "0.2em", display: "block" }}>
                  {s.launch.priceNote}
                </span>
              </div>
              <a className="hv-13" href={launchHref} style={button("#A64F33", "#F7F2E7")}>
                {s.pkgCta}
              </a>
            </div>
          </div>
          <div style={{ ...grid("270px", "clamp(22px, 3vw, 32px)"), gap: "clamp(24px, 3vw, 40px)" }}>
            {s.launch.groups.map((g, i) => (
              <div key={i}>
                <p style={{ ...label("#9A4A2E", "0 0 6px"), letterSpacing: "0.2em" }}>{g.h}</p>
                {g.items.map((it, j) => (
                  <LabeledItem key={j} {...it} line="rgba(22,40,60,0.1)" body="#3D5063" />
                ))}
              </div>
            ))}
          </div>
        </article>
        <div style={grid("380px")}>
          {monthly.map((m, i) => (
            <article
              key={i}
              data-kdc-reveal=""
              style={{
                background: m.bg,
                color: m.fg,
                borderRadius: "8px",
                padding: "clamp(28px, 3.6vw, 44px)",
                display: "flex",
                flexDirection: "column",
                boxShadow: cardShadow,
                ...reveal("kdc-rise"),
              }}
            >
              <p style={label(m.accent)}>{m.tier}</p>
              <h4 style={{ ...h4("clamp(28px, 3.2vw, 40px)"), lineHeight: "1.05", margin: "0" }}>{m.name}</h4>
              <p
                style={{
                  fontSize: "clamp(15px, 1.5vw, 17px)",
                  lineHeight: "1.6",
                  color: m.body,
                  margin: "12px 0 18px",
                  textWrap: "pretty",
                }}
              >
                {m.who}
              </p>
              {m.items.map((it, j) => (
                <LabeledItem key={j} {...it} line={m.line} body={m.body} />
              ))}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "28px",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontFamily: serif, fontSize: "clamp(40px, 4.6vw, 56px)", lineHeight: "1" }}>
                  {m.price}
                </span>
                <span style={{ ...label(m.body, "0"), letterSpacing: "0.2em" }}>{m.priceNote}</span>
              </div>
              <a className="hv-13" href={m.href} style={button(m.ctaBg, m.ctaFg, { marginTop: "22px" })}>
                {s.pkgCta}
              </a>
            </article>
          ))}
        </div>

        <p
          style={{
            fontFamily: serif,
            fontStyle: "italic",
            fontSize: "clamp(19px, 2vw, 24px)",
            lineHeight: "1.45",
            color: "#9A4A2E",
            margin: "clamp(36px, 5vw, 56px) auto 0",
            maxWidth: "60ch",
            textAlign: "center",
            textWrap: "pretty",
          }}
        >
          {s.svcNote}
        </p>
        <p style={{ fontSize: "13px", letterSpacing: "0.08em", color: "#3D5063", margin: "14px 0 0", textAlign: "center" }}>
          {s.svcContact}{" "}
          <a href={whatsapp.href} target="_blank" rel="noopener" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
            {whatsapp.label}
          </a>
        </p>
      </div>
    </section>
  );
}
