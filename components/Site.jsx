"use client";

import { useEffect, useState } from "react";
import { COPY, SKINS } from "@/content/copy";
import siteConfig from "@/site.config";
import Header from "./sections/Header";
import MobileMenu from "./sections/MobileMenu";
import Hero from "./sections/Hero";
import Band from "./sections/Band";
import Problem from "./sections/Problem";
import Transformation from "./sections/Transformation";
import WhatIDo from "./sections/WhatIDo";
import PhotoStrip from "./sections/PhotoStrip";
import Offer from "./sections/Offer";
import ActionPlan from "./sections/ActionPlan";
import WhoItsFor from "./sections/WhoItsFor";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

const num = (i) => String(i + 1).padStart(2, "0");
const wrap = (arr) => arr.map((text, i) => ({ text, num: num(i) }));

export default function Site() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    // Close the mobile menu when the window grows past the mobile breakpoint.
    const mq = window.matchMedia("(max-width: 980px)");
    const onMq = (e) => !e.matches && setMenu(false);
    mq.addEventListener("change", onMq);

    // Tilt the hero portrait towards the pointer.
    const onTilt = (e) => {
      const el = document.getElementById("kdc-tilt");
      if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = el.getBoundingClientRect();
      if (!r.width || r.bottom < 0 || r.top > window.innerHeight) return;
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `rotateY(${Math.max(-1, Math.min(1, dx)) * 9}deg) rotateX(${Math.max(-1, Math.min(1, -dy)) * 7}deg)`;
    };
    window.addEventListener("pointermove", onTilt, { passive: true });

    return () => {
      mq.removeEventListener("change", onMq);
      window.removeEventListener("pointermove", onTilt);
    };
  }, []);

  const t = COPY[lang];
  const contactEmail = siteConfig.contactEmail.trim();
  const url = siteConfig.bookingUrl.trim();
  const mailto = "mailto:" + contactEmail;
  const bookHref = url || mailto + "?subject=" + encodeURIComponent(t.mailSubject);
  const bookTarget = url ? "_blank" : "_self";
  const book = { t, bookHref, bookTarget };

  const langProps = {
    onEn: () => setLang("en"),
    onEs: () => setLang("es"),
    enColor: lang === "en" ? "#16283C" : "#5A6B7A",
    esColor: lang === "es" ? "#16283C" : "#5A6B7A",
    enLine: lang === "en" ? "#C96F4E" : "transparent",
    esLine: lang === "es" ? "#C96F4E" : "transparent",
    enBg: lang === "en" ? "#A64F33" : "transparent",
    esBg: lang === "es" ? "#A64F33" : "transparent",
  };
  const onMenu = () => setMenu(!menu);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        background: "#F7F2E7",
        color: "#16283C",
        overflowX: "hidden",
      }}
    >
      <Header t={t} onMenu={onMenu} {...langProps} />
      {menu && <MobileMenu t={t} onMenu={onMenu} {...langProps} />}
      <Hero {...book} />
      {siteConfig.showBand && <Band marquee={[...t.band, ...t.band, ...t.band, ...t.band].map((text) => ({ text }))} />}
      <Problem t={t} maybes={wrap(t.maybes)} />
      <Transformation t={t} beforeList={wrap(t.beforeList)} afterList={wrap(t.afterList)} />
      <WhatIDo t={t} pillarCards={t.pillarCards.map((p, i) => ({ ...p, ...SKINS[i], num: num(i) }))} />
      <PhotoStrip />
      <Offer {...book} sessionList={wrap(t.sessionList)} leaveList={wrap(t.leaveList)} />
      <ActionPlan
        t={t}
        outlineList={wrap(t.outlineList)}
        planTop={t.planTop}
        planSteps={wrap(t.planSteps).map((s, i) => ({ ...s, num: i + 1 + "." }))}
      />
      <WhoItsFor t={t} forList={t.forList.map((text, i) => ({ text, bg: i % 2 === 0 ? "#FFFFFF" : "#F7F2E7" }))} />
      <About t={t} pillarWords={t.pillarWords.map((text, i) => ({ text, sep: i < t.pillarWords.length - 1 }))} />
      <HowItWorks t={t} steps={t.steps.map((s, i) => ({ ...s, num: num(i) }))} />
      <Faq
        t={t}
        faqs={t.faqs.map((f, i) => ({
          ...f,
          isOpen: open === i,
          sign: open === i ? "−" : "+",
          onToggle: () => setOpen(open === i ? -1 : i),
        }))}
      />
      <FinalCta {...book} finQs={wrap(t.finQs)} />
      <Footer t={t} mailto={mailto} contactEmail={contactEmail} />
    </div>
  );
}
