export default function Faq({ t, faqs }) {
  return (
    <section id="faq" style={{ padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(32px, 5vw, 80px)",
        }}
      >
        <div style={{ flex: "1 1 260px" }}>
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
            {t.k10}
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
              opacity: "0",
              animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 6% cover 30%",
            }}
          >
            {t.faqH}
          </h2>
        </div>
        <div
          style={{
            flex: "2 1 460px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid rgba(22,40,60,0.16)",
          }}
        >
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(22,40,60,0.16)" }}>
              <button
                className="hv-11"
                onClick={f.onToggle}
                style={{
                  width: "100%",
                  minHeight: "56px",
                  background: "none",
                  border: "0",
                  padding: "22px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(19px, 2vw, 23px)",
                  lineHeight: "1.3",
                  color: "#16283C",
                  transition: "color 0.3s",
                }}
              >
                {f.q}
                <span
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontSize: "22px",
                    color: "#A64F33",
                    flexShrink: "0",
                  }}
                >
                  {f.sign}
                </span>
              </button>
              {f.isOpen && (
                <p
                  style={{
                    fontSize: "clamp(16px, 1.6vw, 17px)",
                    lineHeight: "1.8",
                    color: "#3D5063",
                    margin: "0 0 26px",
                    maxWidth: "62ch",
                    textWrap: "pretty",
                  }}
                >
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
