export default function Offer({ t, sessionList, leaveList, bookHref, bookTarget }) {
  return (
    <section id="offer" style={{ background: "#A64F33", color: "#F7F2E7", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(247,242,231,0.14), transparent 42%), radial-gradient(circle at 88% 84%, rgba(22,40,60,0.32), transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 44px)",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "clamp(48px, 7vw, 96px)",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#F7F2E7",
              margin: "0 0 24px",
            }}
          >
            <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "15px", letterSpacing: "0" }}>
              02
            </span>
            {t.k5}
          </p>
          <h2
            data-kdc-reveal=""
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(42px, 6.4vw, 88px)",
              lineHeight: "0.98",
              letterSpacing: "-0.03em",
              margin: "0",
              textWrap: "balance",
              opacity: "0",
              animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 6% cover 30%",
            }}
          >
            {t.offH}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(21px, 2.3vw, 28px)",
              lineHeight: "1.3",
              margin: "clamp(20px, 3vw, 28px) 0 0",
              maxWidth: "28ch",
              textWrap: "pretty",
            }}
          >
            {t.offSub}
          </p>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              margin: "clamp(36px, 5vw, 52px) 0 8px",
            }}
          >
            {t.offDuring}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {sessionList.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                  padding: "15px 0",
                  borderBottom: "1px solid rgba(247,242,231,0.28)",
                }}
              >
                <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "14px", flexShrink: "0" }}>
                  {s.num}
                </span>
                <span style={{ fontSize: "clamp(16px, 1.7vw, 19px)", lineHeight: "1.45", textWrap: "pretty" }}>
                  {s.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ perspective: "1500px", display: "flex", justifyContent: "center" }}>
          <div
            className="hv-5"
            data-kdc-reveal=""
            style={{
              position: "relative",
              width: "min(100%, 480px)",
              transformStyle: "preserve-3d",
              transform: "rotateY(-7deg) rotateX(4deg)",
              transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              opacity: "0",
              animation: "kdc-rise 1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 6% cover 32%",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "24px -24px -24px 24px",
                background: "#16283C",
                borderRadius: "10px",
                transform: "translateZ(-70px)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "12px -12px -12px 12px",
                background: "#6F8068",
                borderRadius: "10px",
                transform: "translateZ(-35px)",
              }}
            />
            <div
              style={{
                position: "relative",
                background: "#F7F2E7",
                color: "#16283C",
                borderRadius: "10px",
                padding: "clamp(28px, 3.6vw, 44px)",
                boxShadow: "0 60px 100px -40px rgba(22,40,60,0.75)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#9A4A2E",
                  margin: "0 0 12px",
                }}
              >
                {t.offLeave}
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {leaveList.map((l, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "14px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(22,40,60,0.12)",
                    }}
                  >
                    <span style={{ color: "#A64F33", fontSize: "16px", flexShrink: "0" }}>&#10003;</span>
                    <span style={{ fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: "1.4" }}>{l.text}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "16px",
                  marginTop: "28px",
                }}
              >
                <span
                  style={{ fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#3D5063" }}
                >
                  {t.offInvest}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(52px, 6vw, 72px)",
                    lineHeight: "1",
                    transform: "translateZ(40px)",
                  }}
                >
                  $125
                </span>
              </div>
              <a
                className="hv-6"
                href={bookHref}
                target={bookTarget}
                rel="noopener"
                style={{
                  marginTop: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "56px",
                  textDecoration: "none",
                  background: "#16283C",
                  color: "#F7F2E7",
                  borderRadius: "100px",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  boxShadow: "0 18px 34px -18px rgba(22,40,60,0.9)",
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                }}
              >
                {t.offCta}
              </a>
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 1.8vw, 20px)",
                  lineHeight: "1.4",
                  color: "#9A4A2E",
                  margin: "26px 0 0",
                  paddingTop: "22px",
                  borderTop: "1px solid rgba(22,40,60,0.14)",
                  textAlign: "center",
                }}
              >
                {t.offBoundary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
