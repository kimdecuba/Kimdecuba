import Image from "next/image";
import portraitImg from "@/assets/images/kim-portrait.jpg";

export default function Hero({ t, bookHref, bookTarget }) {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "clamp(56px, 8vw, 104px) clamp(20px, 4vw, 44px) clamp(60px, 8vw, 110px)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-220px",
          right: "-180px",
          width: "720px",
          height: "720px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,111,78,0.26), rgba(201,111,78,0) 66%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-260px",
          left: "-200px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(111,128,104,0.3), rgba(111,128,104,0) 66%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(48px, 7vw, 80px)",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            data-kdc-reveal=""
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
              fontSize: "clamp(46px, 8vw, 116px)",
              lineHeight: "0.98",
              margin: "0",
              letterSpacing: "-0.03em",
              textWrap: "balance",
              opacity: "0",
              animation: "kdc-rise 1s cubic-bezier(0.16,1,0.3,1) 0.1s both",
            }}
          >
            {t.h1a} <em style={{ fontStyle: "italic", color: "#C96F4E" }}>{t.h1b}</em>
          </h1>
          <p
            data-kdc-reveal=""
            style={{
              fontSize: "clamp(17px, 1.7vw, 20px)",
              lineHeight: "1.7",
              color: "#3D5063",
              margin: "clamp(24px, 3vw, 34px) 0 0",
              maxWidth: "44ch",
              textWrap: "pretty",
              opacity: "0",
              animation: "kdc-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.26s both",
            }}
          >
            {t.heroSub}
          </p>
          <div
            data-kdc-reveal=""
            style={{
              marginTop: "clamp(30px, 4vw, 44px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "18px",
              opacity: "0",
              animation: "kdc-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both",
            }}
          >
            <a
              className="hv-2"
              href={bookHref}
              target={bookTarget}
              rel="noopener"
              style={{
                textDecoration: "none",
                background: "#A64F33",
                color: "#F7F2E7",
                padding: "20px 34px",
                minHeight: "52px",
                boxSizing: "border-box",
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "100px",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: "500",
                boxShadow: "0 16px 34px -14px rgba(201,111,78,0.95)",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s",
              }}
            >
              {t.heroCta}
            </a>
            <p style={{ fontSize: "13px", letterSpacing: "0.04em", color: "#3D5063", margin: "0", paddingLeft: "4px" }}>
              {t.heroFacts}
            </p>
          </div>
        </div>
        <div style={{ perspective: "1400px", display: "flex", justifyContent: "center" }}>
          <div
            id="kdc-tilt"
            style={{
              position: "relative",
              width: "min(100%, 460px)",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "22px -22px -22px 22px",
                background: "#6F8068",
                borderRadius: "6px",
                transform: "translateZ(-70px)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "11px -11px -11px 11px",
                background: "#C96F4E",
                borderRadius: "6px",
                transform: "translateZ(-35px)",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "6px",
                boxShadow: "0 50px 90px -40px rgba(22,40,60,0.7)",
                overflow: "hidden",
              }}
            >
              <Image
                src={portraitImg}
                alt="Kim de Cuba"
                fill
                sizes="(max-width: 980px) 100vw, 460px"
                priority
                style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              />
            </div>
            <div
              data-kdc-float=""
              style={{
                position: "absolute",
                right: "-6%",
                bottom: "8%",
                background: "#F7F2E7",
                borderRadius: "4px",
                padding: "16px 22px",
                boxShadow: "0 30px 60px -24px rgba(22,40,60,0.6)",
                transform: "translateZ(60px) rotate(-3deg)",
                animation: "kdc-float 7s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(17px, 1.8vw, 21px)",
                  margin: "0",
                  lineHeight: "1.2",
                  whiteSpace: "nowrap",
                }}
              >
                {t.pillars}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
