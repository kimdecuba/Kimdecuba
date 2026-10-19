import Image from "next/image";
import workshopImg from "@/assets/images/kim-session-workshop-strategy.jpg";

export default function PhotoStrip({}) {
  return (
    <section style={{ background: "#16283C", padding: "0", overflow: "hidden" }}>
      <div
        data-kdc-reveal=""
        style={{
          maxWidth: "1680px",
          margin: "0 auto",
          opacity: "0",
          animation: "kdc-rise 1s cubic-bezier(0.16,1,0.3,1) both",
          animationTimeline: "view()",
          animationRange: "entry 4% cover 30%",
        }}
      >
        <Image
          src={workshopImg}
          alt="Kim in an Idea-to-Action session, leading a workshop, and doing strategy work"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
