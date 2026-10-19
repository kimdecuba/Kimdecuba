export default function Transformation({ t, beforeList, afterList }) {
  return (
    <section style={{ background: "#16283C", color: "#F7F2E7", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-220px",
          left: "-180px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,111,78,0.28), rgba(201,111,78,0) 68%)",
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
            03
          </span>
          {t.k3}
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
            maxWidth: "20ch",
            textWrap: "balance",
            opacity: "0",
            animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
            animationTimeline: "view()",
            animationRange: "entry 6% cover 30%",
          }}
        >
          {t.trH}
        </h2>
        <div
          style={{
            marginTop: "clamp(44px, 6vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(20px, 3vw, 36px)",
            perspective: "1600px",
            alignItems: "stretch",
          }}
        >
          <div
            data-kdc-reveal=""
            style={{
              border: "1px solid rgba(247,242,231,0.16)",
              background: "rgba(247,242,231,0.04)",
              borderRadius: "8px",
              padding: "clamp(28px, 3.6vw, 44px)",
              opacity: "0",
              animation: "kdc-depth 1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 4% cover 30%",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#B9C7D4",
                margin: "0 0 22px",
              }}
            >
              {t.before}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {beforeList.map((b, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: "1.35",
                    color: "#B9C7D4",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  &#8220;{b.text}&#8221;
                </p>
              ))}
            </div>
          </div>
          <div
            className="hv-3"
            data-kdc-reveal=""
            style={{
              background: "#F7F2E7",
              color: "#16283C",
              borderRadius: "8px",
              padding: "clamp(28px, 3.6vw, 44px)",
              boxShadow: "0 60px 100px -46px rgba(0,0,0,0.8)",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              opacity: "0",
              animation: "kdc-depth 1.1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 8% cover 34%",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#9A4A2E",
                margin: "0 0 22px",
              }}
            >
              <span style={{ fontSize: "16px", letterSpacing: "0" }}>&#8594;</span>
              {t.after}
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {afterList.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(22,40,60,0.12)",
                  }}
                >
                  <span style={{ color: "#A64F33", fontSize: "16px", flexShrink: "0" }}>&#10003;</span>
                  <span style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: "1.45", textWrap: "pretty" }}>
                    {a.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
