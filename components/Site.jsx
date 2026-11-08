"use client";

import { useEffect, useState } from "react";
import { COPY } from "@/content/copy";
import { SERVICES } from "@/content/services";
import siteConfig from "@/site.config";
import Header from "./sections/Header";
import MobileMenu from "./sections/MobileMenu";
import Hero from "./sections/Hero";
import Band from "./sections/Band";
import Problem from "./sections/Problem";
import PhotoStrip from "./sections/PhotoStrip";
import Offer from "./sections/Offer";
import ActionPlan from "./sections/ActionPlan";
import WhoItsFor from "./sections/WhoItsFor";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

const num = (i) => String(i + 1).padStart(2, "0");
const wrap = (arr) => arr.map((text, i) => ({ text, num: num(i) }));

// Card colours for the Services section.
const PKG_SKINS = [
  { bg: "#FFFFFF", fg: "#16283C", body: "#3D5063", accent: "#9A4A2E", line: "rgba(22,40,60,0.1)", ctaBg: "#16283C", ctaFg: "#F7F2E7" },
  { bg: "#16283C", fg: "#F7F2E7", body: "#B9C7D4", accent: "#E8A184", line: "rgba(247,242,231,0.14)", ctaBg: "#A64F33", ctaFg: "#F7F2E7" },
];
const CARE_SKINS = [
  { bg: "#FFFFFF", fg: "#16283C", body: "#3D5063", accent: "#9A4A2E", line: "rgba(22,40,60,0.1)", ctaBg: "#16283C", ctaFg: "#F7F2E7" },
  { bg: "#FFFFFF", fg: "#16283C", body: "#3D5063", accent: "#9A4A2E", line: "rgba(22,40,60,0.1)", ctaBg: "#A64F33", ctaFg: "#F7F2E7" },
  { bg: "#16283C", fg: "#F7F2E7", body: "#B9C7D4", accent: "#E8A184", line: "rgba(247,242,231,0.14)", ctaBg: "#F7F2E7", ctaFg: "#16283C" },
];

// page: "home" (the short homepage) or "about" (About Kim, How it works, Action plan, FAQ).
export default function Site({ page = "home" }) {
  const [lang, setLangState] = useState("en");
  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem("kdc-lang", l);
    } catch {}
  };

  useEffect(() => {
    // Keep the chosen language when moving between pages.
    try {
      const saved = localStorage.getItem("kdc-lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);
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
  const whatsapp = { label: siteConfig.whatsapp, href: "https://wa.me/" + siteConfig.whatsapp.replace(/\D/g, "") };
  const bookHref = url || mailto + "?subject=" + encodeURIComponent(t.mailSubject);
  const bookTarget = url ? "_blank" : "_self";
  const book = { t, bookHref, bookTarget };
  const s = SERVICES[lang];
  // Package buttons open a WhatsApp chat with a ready-made message naming the package.
  const waWith = (name) => whatsapp.href + "?text=" + encodeURIComponent(s.waMsg.replace("{name}", name));

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
      <Header t={t} s={s} onMenu={onMenu} {...langProps} />
      {menu && <MobileMenu t={t} s={s} onMenu={onMenu} {...langProps} />}
      {page === "home" && (
        <>
          <Hero {...book} />
          {siteConfig.showBand && <Band marquee={[...t.band, ...t.band, ...t.band, ...t.band].map((text) => ({ text }))} />}
          <Problem t={t} maybes={wrap(t.maybes)} />
          <PhotoStrip />
          <Offer {...book} sessionList={wrap(t.sessionList)} leaveList={wrap(t.leaveList)} />
          <WhoItsFor t={t} forList={t.forList.map((text, i) => ({ text, bg: i % 2 === 0 ? "#FFFFFF" : "#F7F2E7" }))} />
          <Services
            t={t}
            s={s}
            whatsapp={whatsapp}
            webHref={waWith(s.webH)}
            launchHref={waWith(s.launch.name)}
            monthly={s.monthly.map((m, i) => ({ ...m, ...PKG_SKINS[i], href: waWith(m.name) }))}
            care={s.care.map((c, i) => ({ ...c, ...CARE_SKINS[i], href: waWith(c.tier + " " + c.name) }))}
          />
        </>
      )}
      {page === "about" && (
        <>
          <About t={t} pillarWords={t.pillarWords.map((text, i) => ({ text, sep: i < t.pillarWords.length - 1 }))} />
          <HowItWorks t={t} steps={t.steps.map((s, i) => ({ ...s, num: num(i) }))} />
          <ActionPlan
            t={t}
            outlineList={wrap(t.outlineList)}
            planTop={t.planTop}
            planSteps={wrap(t.planSteps).map((s, i) => ({ ...s, num: i + 1 + "." }))}
          />
          <Faq
            t={t}
            faqs={t.faqs.map((f, i) => ({
              ...f,
              isOpen: open === i,
              sign: open === i ? "−" : "+",
              onToggle: () => setOpen(open === i ? -1 : i),
            }))}
          />
        </>
      )}
      <FinalCta {...book} finQs={wrap(t.finQs)} />
      <Footer t={t} mailto={mailto} contactEmail={contactEmail} whatsapp={whatsapp} />
    </div>
  );
}
