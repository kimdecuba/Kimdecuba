export default function WhoItsFor({ t, forList }) {
  return (
    <section style={{ background: "#E6EAE0", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)",
          position: "relative",
        }}
      >
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
            07
          </span>
          {t.k7}
        </p>
        <h2
          data-kdc-reveal=""
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: "400",
            fontSize: "clamp(34px, 5vw, 64px)",
            lineHeight: "1.06",
            letterSpacing: "-0.02em",
            margin: "0",
            textWrap: "balance",
            opacity: "0",
            animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
            animationTimeline: "view()",
            animationRange: "entry 6% cover 30%",
          }}
        >
          {t.forH}
        </h2>
        <div
          style={{
            marginTop: "clamp(40px, 5vw, 60px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
            gap: "clamp(12px, 1.6vw, 16px)",
          }}
        >
          {forList.map((f, i) => (
            <div
              key={i}
              className="hv-8"
              data-kdc-reveal=""
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                border: "1px solid rgba(22,40,60,0.14)",
                borderRadius: "6px",
                padding: "clamp(20px, 2.4vw, 26px)",
                background: f.bg,
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.5s, box-shadow 0.5s",
                opacity: "0",
                animation: "kdc-rise 0.9s cubic-bezier(0.16,1,0.3,1) both",
                animationTimeline: "view()",
                animationRange: "entry 4% cover 28%",
              }}
            >
              <span style={{ color: "#A64F33", fontSize: "16px", flexShrink: "0", paddingTop: "1px" }}>&#10003;</span>
              <span style={{ fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: "1.5", textWrap: "pretty" }}>
                {f.text}
              </span>
            </div>
          ))}
        </div>
        <div
          data-kdc-reveal=""
          style={{
            marginTop: "clamp(28px, 4vw, 44px)",
            background: "#16283C",
            color: "#F7F2E7",
            borderRadius: "8px",
            padding: "clamp(28px, 4vw, 48px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(20px, 4vw, 64px)",
            boxShadow: "0 46px 80px -40px rgba(22,40,60,0.75)",
            opacity: "0",
            animation: "kdc-depth 1s cubic-bezier(0.16,1,0.3,1) both",
            animationTimeline: "view()",
            animationRange: "entry 6% cover 32%",
          }}
        >
          <p
            style={{
              flex: "1 1 260px",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(24px, 2.8vw, 34px)",
              lineHeight: "1.2",
              margin: "0",
              color: "#E8A184",
            }}
          >
            {t.notH}
          </p>
          <div style={{ flex: "2 1 380px", minWidth: "0" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: "1.5", margin: "0", textWrap: "pretty" }}>
              {t.notA}
            </p>
            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 17px)",
                lineHeight: "1.75",
                color: "#B9C7D4",
                margin: "14px 0 0",
                textWrap: "pretty",
              }}
            >
              {t.notB}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
