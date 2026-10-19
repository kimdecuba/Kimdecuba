export default function Band({ marquee }) {
  return (
    <div style={{ background: "#16283C", color: "#F7F2E7", overflow: "hidden", padding: "clamp(16px, 2.4vw, 24px) 0" }}>
      <div
        data-kdc-marquee=""
        style={{ display: "flex", width: "max-content", animation: "kdc-marquee 28s linear infinite" }}
      >
        {marquee.map((m, i) => (
          <span
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "28px", paddingRight: "28px", whiteSpace: "nowrap" }}
          >
            <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(20px, 2.6vw, 34px)" }}>
              {m.text}
            </span>
            <span style={{ color: "#C96F4E", fontSize: "18px" }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
