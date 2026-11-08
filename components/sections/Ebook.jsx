// Ebook: "From Idea to Action" guide & workbook, bought through WhatsApp.
// Text lives in content/ebook.js.

const serif = "var(--font-serif), Georgia, serif";

export default function Ebook({ e, buyHref }) {
  return (
    <section id="ebook" style={{ background: "#16283C", color: "#F7F2E7", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-180px",
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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(48px, 7vw, 96px)",
          alignItems: "center",
        }}
      >
        {/* Book cover, drawn in the brand colours */}
        <div style={{ perspective: "1500px", display: "flex", justifyContent: "center" }}>
          <div
            className="hv-5"
            data-kdc-reveal=""
            style={{
              position: "relative",
              width: "min(78%, 360px)",
              transformStyle: "preserve-3d",
              transform: "rotateY(12deg) rotateX(3deg)",
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
                inset: "10px -14px -10px 14px",
                background: "#E9E1CE",
                borderRadius: "4px 10px 10px 4px",
                transform: "translateZ(-30px)",
              }}
            />
            <div
              role="img"
              aria-label={`${e.title} — ${e.coverBy}`}
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                background: "#A64F33",
                borderRadius: "4px 10px 10px 4px",
                boxShadow: "0 60px 100px -40px rgba(0,0,0,0.85), inset 10px 0 0 rgba(22,40,60,0.25)",
                padding: "clamp(24px, 3.4vw, 38px) clamp(22px, 3vw, 34px) clamp(22px, 3vw, 32px) clamp(30px, 4vw, 44px)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-30%",
                  right: "-40%",
                  width: "120%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(247,242,231,0.18), rgba(247,242,231,0) 65%)",
                }}
              />
              <span style={{ fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "#F7F2E7" }}>
                {e.coverKicker}
              </span>
              <span
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(38px, 5vw, 58px)",
                  lineHeight: "0.98",
                  letterSpacing: "-0.02em",
                  marginTop: "auto",
                  position: "relative",
                }}
              >
                From Idea
                <br />
                to <em style={{ fontStyle: "italic", color: "#16283C" }}>Action.</em>
              </span>
              <span style={{ height: "2px", background: "#F7F2E7", width: "48px", margin: "22px 0 16px" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Clarity · Strategy · Action
              </span>
              <span style={{ fontFamily: serif, fontSize: "19px", marginTop: "auto", paddingTop: "28px" }}>
                {e.coverBy}
              </span>
            </div>
          </div>
        </div>

        <div>
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
            <span style={{ fontFamily: serif, fontSize: "15px", letterSpacing: "0" }}>05</span>
            {e.k}
          </p>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B9C7D4", margin: "0 0 14px" }}>
            {e.tag}
          </p>
          <h2
            data-kdc-reveal=""
            style={{
              fontFamily: serif,
              fontWeight: "400",
              fontSize: "clamp(40px, 6vw, 80px)",
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
            {e.title}
          </h2>
          <p
            style={{
              fontFamily: serif,
              fontSize: "clamp(20px, 2.2vw, 26px)",
              lineHeight: "1.35",
              margin: "clamp(18px, 2.4vw, 24px) 0 0",
              maxWidth: "34ch",
              textWrap: "pretty",
            }}
          >
            {e.sub}
          </p>

          <p style={{ fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#E8A184", margin: "clamp(28px, 4vw, 40px) 0 4px" }}>
            {e.insideH}
          </p>
          {e.inside.map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                padding: "11px 0",
                borderBottom: "1px solid rgba(247,242,231,0.14)",
              }}
            >
              <span style={{ color: "#E8A184", fontSize: "15px", flexShrink: "0" }}>&#10003;</span>
              <span style={{ fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: "1.45" }}>{text}</span>
            </div>
          ))}
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#B9C7D4", margin: "14px 0 0" }}>{e.includes}</p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "18px 28px",
              marginTop: "clamp(28px, 4vw, 40px)",
            }}
          >
            <div>
              <span style={{ fontFamily: serif, fontSize: "clamp(52px, 6vw, 72px)", lineHeight: "1", display: "block" }}>
                {e.price}
              </span>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B9C7D4", display: "block", marginTop: "8px" }}>
                {e.priceNote}
              </span>
            </div>
            <a
              className="hv-13"
              href={buyHref}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "56px",
                padding: "0 34px",
                textDecoration: "none",
                background: "#A64F33",
                color: "#F7F2E7",
                borderRadius: "100px",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: "500",
                boxShadow: "0 16px 34px -14px rgba(201,111,78,0.95)",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {e.cta}
            </a>
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#B9C7D4", margin: "16px 0 0", maxWidth: "46ch" }}>{e.how}</p>
        </div>
      </div>
    </section>
  );
}
