import Link from "next/link";
import Image from "next/image";
import markImg from "@/assets/images/kim-de-cuba-mark.png";

export default function Header({ t, s, e, onEn, enColor, enLine, onEs, esColor, esLine, onMenu }) {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "80",
        background: "rgba(247,242,231,0.88)",
        backdropFilter: "blur(16px) saturate(1.2)",
        borderBottom: "1px solid rgba(22,40,60,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(14px, 2vw, 20px) clamp(20px, 4vw, 44px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "13px", flexShrink: "0" }}
        >
          <Image
            src={markImg}
            alt="Kim de Cuba"
            style={{ height: "clamp(38px, 5vw, 48px)", width: "auto", display: "block", mixBlendMode: "multiply" }}
          />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
            <span
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(16px, 2vw, 19px)",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Kim de Cuba
            </span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#A64F33",
                marginTop: "7px",
                whiteSpace: "nowrap",
              }}
            >
              {t.tagline}
            </span>
          </span>
        </Link>
        <nav
          className="kdc-wide"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 1.8vw, 26px)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            {t.navHome}
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            {t.navAbout}
          </Link>
          <Link href="/#offer" style={{ textDecoration: "none" }}>
            Idea-to-Action
          </Link>
          <Link href="/#services" style={{ textDecoration: "none" }}>
            {s.navServices}
          </Link>
          <Link href="/#ebook" style={{ textDecoration: "none" }}>
            {e.navEbook}
          </Link>
          <Link href="/about#faq" style={{ textDecoration: "none" }}>
            {t.navFaq}
          </Link>
          <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <button
              onClick={onEn}
              style={{
                background: "none",
                border: "0",
                cursor: "pointer",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                padding: "4px 1px",
                color: enColor,
                borderBottom: `1px solid ${enLine}`,
              }}
            >
              EN
            </button>
            <span style={{ color: "#5A6B7A" }}>/</span>
            <button
              onClick={onEs}
              style={{
                background: "none",
                border: "0",
                cursor: "pointer",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                padding: "4px 1px",
                color: esColor,
                borderBottom: `1px solid ${esLine}`,
              }}
            >
              ES
            </button>
          </span>
          <a
            className="hv-1"
            href="#book"
            style={{
              textDecoration: "none",
              background: "#A64F33",
              color: "#F7F2E7",
              padding: "13px 26px",
              borderRadius: "100px",
              letterSpacing: "0.16em",
              fontWeight: "500",
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s",
              boxShadow: "0 8px 22px -10px rgba(201,111,78,0.9)",
            }}
          >
            {t.navBook}
          </a>
        </nav>
        <button
          className="kdc-narrow"
          onClick={onMenu}
          aria-label="Menu"
          style={{
            width: "48px",
            height: "48px",
            flexShrink: "0",
            borderRadius: "50%",
            border: "1px solid rgba(22,40,60,0.2)",
            background: "#16283C",
            color: "#F7F2E7",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: "18px", height: "1.5px", background: "#F7F2E7" }} />
          <span style={{ display: "block", width: "18px", height: "1.5px", background: "#F7F2E7" }} />
        </button>
      </div>
    </header>
  );
}
