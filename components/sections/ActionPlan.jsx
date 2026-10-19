import Image from "next/image";
import markImg from "@/assets/images/kim-de-cuba-mark.png";

export default function ActionPlan({ t, outlineList, planTop, planSteps }) {
  return (
    <section
      style={{ padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          right: "-180px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(111,128,104,0.26), rgba(111,128,104,0) 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
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
              color: "#9A4A2E",
              margin: "0 0 24px",
            }}
          >
            <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "15px", letterSpacing: "0" }}>
              06
            </span>
            {t.k6}
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
            {t.apH}
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 1.8vw, 20px)",
              lineHeight: "1.65",
              margin: "clamp(22px, 3vw, 30px) 0 0",
              maxWidth: "46ch",
              textWrap: "pretty",
            }}
          >
            {t.apIntro}
          </p>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#9A4A2E",
              margin: "clamp(30px, 4vw, 40px) 0 6px",
            }}
          >
            {t.apOutlines}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {outlineList.map((o, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(22,40,60,0.14)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "14px",
                    color: "#9A4A2E",
                    flexShrink: "0",
                  }}
                >
                  {o.num}
                </span>
                <span style={{ fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: "1.45" }}>{o.text}</span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(21px, 2.3vw, 28px)",
              lineHeight: "1.3",
              margin: "clamp(30px, 4vw, 40px) 0 0",
              maxWidth: "30ch",
              textWrap: "pretty",
            }}
          >
            {t.apNot} <span style={{ color: "#9A4A2E" }}>{t.apIs}</span>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
          <p
            style={{
              alignSelf: "center",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#16283C",
              background: "#E6EAE0",
              border: "1px solid rgba(22,40,60,0.18)",
              padding: "10px 18px",
              borderRadius: "100px",
              margin: "0",
              textAlign: "center",
            }}
          >
            {t.apLabel}
          </p>
          <div style={{ perspective: "1500px", width: "min(100%, 470px)" }}>
            <div
              className="hv-7"
              style={{
                position: "relative",
                transformStyle: "preserve-3d",
                transform: "rotateY(9deg) rotateX(5deg) rotateZ(-1.5deg)",
                transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "#E9E1CE",
                  borderRadius: "4px",
                  transform: "translateZ(-60px) rotate(5deg)",
                  boxShadow: "0 30px 60px -36px rgba(22,40,60,0.5)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "#F3EDDF",
                  borderRadius: "4px",
                  transform: "translateZ(-30px) rotate(2.5deg)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  background: "#FFFFFF",
                  borderRadius: "4px",
                  padding: "clamp(26px, 3.4vw, 40px)",
                  boxShadow: "0 50px 90px -40px rgba(22,40,60,0.6)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "clamp(22px, 2.4vw, 28px)",
                        lineHeight: "1.1",
                        margin: "0",
                      }}
                    >
                      {t.docTitle}
                    </p>
                    <p style={{ fontSize: "12px", color: "#3D5063", margin: "8px 0 0" }}>{t.docFor}</p>
                  </div>
                  <Image
                    src={markImg}
                    alt=""
                    style={{
                      height: "40px",
                      width: "auto",
                      display: "block",
                      mixBlendMode: "multiply",
                      flexShrink: "0",
                    }}
                  />
                </div>
                <div style={{ height: "2px", background: "#C96F4E", margin: "20px 0 6px" }} />
                {planTop.map((r, i) => (
                  <div key={i} style={{ padding: "13px 0", borderBottom: "1px solid rgba(22,40,60,0.1)" }}>
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#9A4A2E",
                        margin: "0 0 5px",
                      }}
                    >
                      {r.label}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.5", margin: "0", textWrap: "pretty" }}>{r.text}</p>
                  </div>
                ))}
                <div style={{ padding: "13px 0", borderBottom: "1px solid rgba(22,40,60,0.1)" }}>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9A4A2E",
                      margin: "0 0 7px",
                    }}
                  >
                    {t.docSteps}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    {planSteps.map((ps, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.45" }}>
                        <span style={{ color: "#9A4A2E", flexShrink: "0" }}>{ps.num}</span>
                        <span>{ps.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "16px",
                    background: "#16283C",
                    color: "#F7F2E7",
                    borderRadius: "4px",
                    padding: "14px 16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#E8A184",
                      margin: "0 0 5px",
                    }}
                  >
                    {t.docFirstLabel}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", margin: "0" }}>{t.docFirst}</p>
                </div>
                <p style={{ fontSize: "10px", color: "#5A6B7A", margin: "16px 0 0", textAlign: "center" }}>
                  {t.apLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
