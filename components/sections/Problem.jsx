export default function Problem({ t, maybes }) {
  return (
    <section style={{ background: "#E6EAE0", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-160px",
          right: "-140px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,111,78,0.18), rgba(201,111,78,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(36px, 6vw, 96px)",
        }}
      >
        <div style={{ flex: "1 1 340px", minWidth: "0" }}>
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
              02
            </span>
            {t.k2}
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
            {t.probH}
          </h2>
        </div>
        <div style={{ flex: "1.2 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "0" }}>
          {maybes.map((m, i) => (
            <p
              key={i}
              data-kdc-reveal=""
              style={{
                fontSize: "clamp(18px, 1.9vw, 23px)",
                lineHeight: "1.55",
                margin: "0",
                padding: "clamp(18px, 2.2vw, 24px) 0",
                borderBottom: "1px solid rgba(22,40,60,0.16)",
                textWrap: "pretty",
                opacity: "0",
                animation: "kdc-rise 0.9s cubic-bezier(0.16,1,0.3,1) both",
                animationTimeline: "view()",
                animationRange: "entry 6% cover 28%",
              }}
            >
              {m.text}
            </p>
          ))}
          <p
            data-kdc-reveal=""
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(24px, 2.8vw, 36px)",
              lineHeight: "1.25",
              margin: "clamp(32px, 4vw, 48px) 0 0",
              color: "#9A4A2E",
              textWrap: "balance",
              opacity: "0",
              animation: "kdc-rise 0.9s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 6% cover 30%",
            }}
          >
            {t.probTurn}
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 19px)",
              lineHeight: "1.75",
              color: "#3D5063",
              margin: "16px 0 0",
              maxWidth: "52ch",
              textWrap: "pretty",
            }}
          >
            {t.probClose}
          </p>
        </div>
      </div>
    </section>
  );
}
