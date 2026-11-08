import Link from "next/link";
export default function MobileMenu({ t, s, e, onMenu, onEn, enBg, onEs, esBg }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        zIndex: "90",
        background: "#16283C",
        color: "#F7F2E7",
        display: "flex",
        flexDirection: "column",
        padding: "24px clamp(20px, 6vw, 40px) 40px",
        overflowY: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "44px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#E8A184" }}>
          {t.tagline}
        </span>
        <button
          onClick={onMenu}
          aria-label="Close"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(247,242,231,0.3)",
            background: "none",
            color: "#F7F2E7",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          &#215;
        </button>
      </div>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(30px, 9vw, 46px)",
        }}
      >
        <Link
          href="/"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          {t.navHome}
        </Link>
        <Link
          href="/about"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          {t.navAbout}
        </Link>
        <Link
          href="/#offer"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          Idea-to-Action
        </Link>
        <Link
          href="/#services"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          {s.navServices}
        </Link>
        <Link
          href="/#ebook"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          {e.navEbook}
        </Link>
        <Link
          href="/about#faq"
          onClick={onMenu}
          style={{
            textDecoration: "none",
            color: "#F7F2E7",
            padding: "12px 0",
            borderBottom: "1px solid rgba(247,242,231,0.14)",
          }}
        >
          {t.navFaq}
        </Link>
      </nav>
      <div style={{ display: "flex", gap: "14px", marginTop: "36px" }}>
        <button
          onClick={onEn}
          style={{
            flex: "1",
            minHeight: "48px",
            borderRadius: "100px",
            border: "1px solid rgba(247,242,231,0.35)",
            background: enBg,
            color: "#F7F2E7",
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            cursor: "pointer",
          }}
        >
          EN
        </button>
        <button
          onClick={onEs}
          style={{
            flex: "1",
            minHeight: "48px",
            borderRadius: "100px",
            border: "1px solid rgba(247,242,231,0.35)",
            background: esBg,
            color: "#F7F2E7",
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            cursor: "pointer",
          }}
        >
          ES
        </button>
      </div>
      <a
        href="#book"
        onClick={onMenu}
        style={{
          marginTop: "20px",
          textAlign: "center",
          textDecoration: "none",
          background: "#A64F33",
          color: "#F7F2E7",
          padding: "19px 28px",
          borderRadius: "100px",
          fontSize: "12px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      >
        {t.navBook}
      </a>
    </div>
  );
}
