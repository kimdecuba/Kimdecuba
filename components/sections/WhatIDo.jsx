export default function WhatIDo({ t, pillarCards }) {
  return (
    <section
      style={{ padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#9A4A2E",
            margin: "0 0 24px",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "15px", letterSpacing: "0" }}>
            04
          </span>
          {t.k4}
        </p>
        <h2
          data-kdc-reveal=""
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: "400",
            fontSize: "clamp(42px, 7vw, 100px)",
            lineHeight: "1",
            letterSpacing: "-0.03em",
            margin: "0",
            textWrap: "balance",
            opacity: "0",
            animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
            animationTimeline: "view()",
            animationRange: "entry 6% cover 30%",
          }}
        >
          {t.doA} <em style={{ fontStyle: "italic", color: "#C96F4E" }}>{t.doB}</em>
        </h2>
        <div
          style={{
            marginTop: "clamp(44px, 6vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(18px, 2.4vw, 26px)",
            perspective: "1600px",
          }}
        >
          {pillarCards.map((p, i) => (
            <article
              key={i}
              className="hv-4"
              data-kdc-reveal=""
              style={{
                background: p.bg,
                color: p.fg,
                borderRadius: "8px",
                padding: "clamp(28px, 3.4vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                minHeight: "260px",
                boxSizing: "border-box",
                transformStyle: "preserve-3d",
                boxShadow: "0 26px 50px -34px rgba(22,40,60,0.6)",
                transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.55s cubic-bezier(0.16,1,0.3,1)",
                opacity: "0",
                animation: "kdc-depth 1s cubic-bezier(0.16,1,0.3,1) both",
                animationTimeline: "view()",
                animationRange: "entry 4% cover 30%",
              }}
            >
              <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "15px", color: p.accent }}>
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontWeight: "400",
                  fontSize: "clamp(30px, 3.4vw, 42px)",
                  margin: "auto 0 0",
                  lineHeight: "1",
                  transform: "translateZ(30px)",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "clamp(15px, 1.5vw, 17px)",
                  lineHeight: "1.7",
                  color: p.body,
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
