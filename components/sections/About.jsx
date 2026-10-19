import Image from "next/image";
import aboutImg from "@/assets/images/kim-about.jpg";

export default function About({ t, pillarWords }) {
  return (
    <section
      id="about"
      style={{ padding: "clamp(72px, 10vw, 132px) clamp(20px, 4vw, 44px)", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-180px",
          width: "620px",
          height: "620px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,111,78,0.18), rgba(201,111,78,0) 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(48px, 7vw, 100px)",
        }}
      >
        <div style={{ flex: "1 1 300px", maxWidth: "440px", margin: "0 auto", perspective: "1400px" }}>
          <div
            className="hv-9"
            data-kdc-reveal=""
            style={{
              position: "relative",
              transformStyle: "preserve-3d",
              transform: "rotateY(8deg)",
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
                inset: "18px 18px -18px -18px",
                background: "#E6EAE0",
                borderRadius: "6px",
                transform: "translateZ(-50px)",
              }}
            />
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 46px 80px -40px rgba(22,40,60,0.65)",
              }}
            >
              <Image
                src={aboutImg}
                alt="Kim de Cuba"
                fill
                sizes="(max-width: 980px) 100vw, 440px"
                style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ flex: "1.4 1 420px", minWidth: "0" }}>
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
              08
            </span>
            {t.k8}
          </p>
          <h2
            data-kdc-reveal=""
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(42px, 6vw, 84px)",
              lineHeight: "1",
              letterSpacing: "-0.03em",
              margin: "0",
              opacity: "0",
              animation: "kdc-wipe 1s cubic-bezier(0.16,1,0.3,1) both",
              animationTimeline: "view()",
              animationRange: "entry 6% cover 30%",
            }}
          >
            {t.abH}
          </h2>
          <p
            style={{
              fontSize: "clamp(18px, 1.9vw, 22px)",
              lineHeight: "1.6",
              margin: "clamp(24px, 3vw, 34px) 0 0",
              maxWidth: "54ch",
              textWrap: "pretty",
            }}
          >
            {t.abP1}
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 18px)",
              lineHeight: "1.8",
              color: "#3D5063",
              margin: "20px 0 0",
              maxWidth: "60ch",
              textWrap: "pretty",
            }}
          >
            {t.abP2}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(24px, 2.6vw, 32px)",
              lineHeight: "1.25",
              color: "#9A4A2E",
              margin: "clamp(26px, 3vw, 34px) 0 0",
            }}
          >
            {t.abP3}
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 18px)",
              lineHeight: "1.8",
              color: "#3D5063",
              margin: "16px 0 0",
              maxWidth: "60ch",
              textWrap: "pretty",
            }}
          >
            {t.abP4}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "14px 20px",
              marginTop: "clamp(30px, 4vw, 42px)",
              paddingTop: "26px",
              borderTop: "1px solid rgba(22,40,60,0.16)",
            }}
          >
            {pillarWords.map((w, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(20px, 2.2vw, 26px)" }}>
                  {w.text}
                </span>
                {w.sep && <span style={{ color: "#C96F4E", fontSize: "12px" }}>&#9670;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
