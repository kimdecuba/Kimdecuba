export default function HowItWorks({ t, steps }) {
  return (
    <section style={{ background: "#16283C", color: "#F7F2E7", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "linear-gradient(rgba(111,128,104,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(111,128,104,0.14) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
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
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#E8A184",
            margin: "0 0 24px",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "15px", letterSpacing: "0" }}>
            09
          </span>
          {t.k9}
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
          {t.howH}
        </h2>
        <div
          style={{
            marginTop: "clamp(44px, 6vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
            gap: "clamp(16px, 2vw, 22px)",
            perspective: "1400px",
          }}
        >
          {steps.map((st, i) => (
            <div
              key={i}
              className="hv-10"
              data-kdc-reveal=""
              style={{
                background: "rgba(247,242,231,0.05)",
                border: "1px solid rgba(247,242,231,0.12)",
                borderRadius: "8px",
                padding: "clamp(24px, 2.8vw, 30px)",
                transformStyle: "preserve-3d",
                transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), background 0.55s",
                opacity: "0",
                animation: "kdc-depth 1s cubic-bezier(0.16,1,0.3,1) both",
                animationTimeline: "view()",
                animationRange: "entry 6% cover 32%",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(44px, 5vw, 64px)",
                  lineHeight: "1",
                  color: "#8FA087",
                  display: "block",
                  transform: "translateZ(40px)",
                }}
              >
                {st.num}
              </span>
              <span
                aria-hidden="true"
                data-kdc-reveal=""
                style={{
                  display: "block",
                  height: "1px",
                  background: "#C96F4E",
                  margin: "18px 0 0",
                  transformOrigin: "left",
                  animation: "kdc-rule 0.9s cubic-bezier(0.16,1,0.3,1) both",
                  animationTimeline: "view()",
                  animationRange: "entry 8% cover 34%",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontWeight: "400",
                  fontSize: "clamp(20px, 2vw, 23px)",
                  margin: "18px 0 10px",
                  lineHeight: "1.2",
                }}
              >
                {st.title}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#B9C7D4", margin: "0", textWrap: "pretty" }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
