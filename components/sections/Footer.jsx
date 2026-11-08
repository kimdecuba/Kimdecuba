import Image from "next/image";
import markImg from "@/assets/images/kim-de-cuba-mark.png";

export default function Footer({ t, mailto, contactEmail, whatsapp }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(22,40,60,0.1)" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(48px, 7vw, 80px) clamp(20px, 4vw, 44px) clamp(28px, 4vw, 40px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(36px, 6vw, 80px)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
          <Image
            src={markImg}
            alt=""
            style={{ height: "64px", width: "auto", display: "block", mixBlendMode: "multiply" }}
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "26px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                margin: "0",
                lineHeight: "1",
              }}
            >
              Kim de Cuba
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontStyle: "italic",
                fontSize: "19px",
                color: "#9A4A2E",
                margin: "12px 0 0",
              }}
            >
              {t.tagline}
            </p>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#3D5063",
                margin: "12px 0 0",
              }}
            >
              {t.pillars}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "14px 28px",
            alignItems: "baseline",
            fontSize: "15px",
          }}
        >
          <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5A6B7A" }}>
            WhatsApp
          </span>
          <a href={whatsapp.href} target="_blank" rel="noopener" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
            {whatsapp.label}
          </a>
          <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5A6B7A" }}>
            Instagram
          </span>
          <a
            href="https://www.instagram.com/kimdecuba"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none" }}
          >
            @kimdecuba
          </a>
          <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5A6B7A" }}>
            Facebook
          </span>
          <span>Kimberly de Cuba</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5A6B7A" }}>
            {t.fWebsite}
          </span>
          <a href="https://www.kimdecuba.com" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            www.kimdecuba.com
          </a>
          <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5A6B7A" }}>
            Email
          </span>
          <a href={mailto} style={{ textDecoration: "none", wordBreak: "break-word" }}>
            {contactEmail}
          </a>
        </div>
      </div>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 44px) clamp(28px, 4vw, 40px)" }}>
        <p
          style={{
            fontSize: "12px",
            color: "#5A6B7A",
            margin: "0",
            paddingTop: "22px",
            borderTop: "1px solid rgba(22,40,60,0.1)",
          }}
        >
          © 2026 Kim de Cuba · Aruba
        </p>
      </div>
    </footer>
  );
}
