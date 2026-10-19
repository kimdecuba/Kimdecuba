export default function FinalCta({ t, finQs, bookHref, bookTarget }) {
  return (
    <section id="book" style={{ background: "#A64F33", color: "#F7F2E7", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(247,242,231,0.16), transparent 44%), radial-gradient(circle at 84% 80%, rgba(22,40,60,0.34), transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "clamp(80px, 12vw, 160px) clamp(20px, 4vw, 44px)",
          position: "relative",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          data-kdc-reveal=""
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: "400",
            fontSize: "clamp(34px, 5.4vw, 70px)",
            lineHeight: "1.08",
            letterSpacing: "-0.02em",
            margin: "0",
            textWrap: "balance",
            opacity: "0",
            animation: "kdc-rise 1s cubic-bezier(0.16,1,0.3,1) both",
            animationTimeline: "view()",
            animationRange: "entry 8% cover 36%",
          }}
        >
          {t.finH}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "clamp(32px, 4vw, 48px)" }}>
          {finQs.map((q, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.2vw, 27px)",
                lineHeight: "1.35",
                margin: "0",
              }}
            >
              {q.text}
            </p>
          ))}
        </div>
        <p style={{ fontSize: "clamp(17px, 1.8vw, 20px)", margin: "clamp(24px, 3vw, 32px) 0 0" }}>{t.finTogether}</p>
        <a
          className="hv-12"
          href={bookHref}
          target={bookTarget}
          rel="noopener"
          style={{
            marginTop: "clamp(32px, 4vw, 44px)",
            textDecoration: "none",
            background: "#F7F2E7",
            color: "#16283C",
            padding: "22px 38px",
            minHeight: "56px",
            boxSizing: "border-box",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: "500",
            boxShadow: "0 22px 44px -18px rgba(22,40,60,0.7)",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s",
          }}
        >
          {t.finCta}
        </a>
        <p style={{ fontSize: "13px", letterSpacing: "0.08em", margin: "18px 0 0" }}>{t.finFacts}</p>
      </div>
    </section>
  );
}
