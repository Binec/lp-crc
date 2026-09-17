import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { PHONE_DISPLAY, PHONE_TEL, PhoneCta } from "./Navbar";
import { Logo, Reveal } from "./ui";

const pageLinks = [
  { label: "Our Facility", href: "#facility" },
  { label: "PHP Program", href: "#php" },
  { label: "IOP Program", href: "#iop" },
  { label: "Supportive Housing", href: "#supportive" },
  { label: "Center Overview", href: "#insurance" },
  { label: "Insurance", href: "#insurance" },
  { label: "Reviews", href: "#reviews" },
];

const programs = [
  { label: "Partial Hospitalization (PHP)", href: "#php" },
  { label: "Intensive Outpatient (IOP)", href: "#iop" },
  { label: "Evening IOP", href: "#iop" },
  { label: "Aftercare", href: "#supportive" },
  { label: "Supportive Housing", href: "#supportive" },
];

const resources = [
  { label: "Free Insurance Verification", href: "#verify" },
  { label: "Admissions 24/7", href: PHONE_TEL },
  { label: "Joint Commission Accredited", href: "#insurance" },
  { label: "Privacy Policy", href: "#top" },
  { label: "Terms of Service", href: "#top" },
];

const socials = [
  { label: "Facebook", Icon: Share2, href: "#top" },
  { label: "Instagram", Icon: Camera, href: "#top" },
  { label: "Twitter / X", Icon: MessageCircle, href: "#top" },
  { label: "LinkedIn", Icon: Globe, href: "#top" },
];

const ctaPerks = [
  "Most private insurance accepted",
  "Exceptional remission rates",
  "Career and educational planning",
];

function FooterNavCol({
  title,
  items,
  cols = 1,
}: {
  title: string;
  items: { label: string; href: string }[];
  cols?: 1 | 2;
}) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">{title}</h4>
      <ul
        className={cn(
          "space-y-2.5 text-sm",
          cols === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-2.5",
        )}
      >
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-white/70 transition-colors duration-300 hover:text-brand-300"
            >
              <span className="border-b border-transparent transition-colors duration-300 group-hover:border-brand-300/40">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_0%,rgba(241,183,83,0.12),transparent_60%)]" />
        <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[55rem] -translate-x-1/2 rounded-full bg-brand-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="container-x relative pb-10 pt-20 lg:pt-28">
        {/* CTA band */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-12 text-center shadow-2xl shadow-brand-500/30 sm:rounded-[2.5rem] sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-navy-950/20 blur-2xl" />
              <div className="absolute left-12 top-10 h-3 w-3 rounded-full bg-white/40" />
              <div className="absolute bottom-12 left-1/4 h-2 w-2 rounded-full bg-white/30" />
              <div className="absolute right-1/4 top-16 h-2.5 w-2.5 rounded-full bg-white/25" />
            </div>

            <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Start Your Recovery Today
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-navy-900/75 sm:text-base">
              Call now to verify your insurance — our admissions team is available 24/7, 100% confidential.
            </p>

            <div className="relative mt-7 flex justify-center sm:mt-8">
              <PhoneCta tone="gold" size="lg" />
            </div>

            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:mt-8">
              {ctaPerks.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-xs font-bold text-navy-900/80">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Main footer grid */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1.2fr_2.8fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Top-rated PHP &amp; IOP outpatient programs designed to fit your life. Confidential, evidence-based care,
              24/7 admissions.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <PhoneCta tone="dark" size="sm" />
              <a
                href="mailto:admissions@createrecoverycenter.com"
                className="group flex items-center gap-3 text-white/80 transition-colors duration-300 hover:text-brand-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-brand-400/40">
                  <Mail className="h-3.5 w-3.5 text-brand-400" />
                </span>
                <span className="truncate text-xs font-semibold sm:text-sm">
                  admissions@createrecoverycenter.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-brand-400" />
                </span>
                <span className="text-xs font-medium sm:text-sm">California · Joint Commission Accredited</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10">
            <FooterNavCol title="On This Page" items={pageLinks} />
            <FooterNavCol title="Programs" items={programs} />
            <FooterNavCol title="Resources" items={resources} />
          </div>
        </div>

        {/* Accreditations strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-white/10 py-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 sm:gap-x-10">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-400" />
            Joint Commission Accredited
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>HIPAA Compliant</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>Insurance Accepted</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span>Cash Pay Options</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/45">
            Copyright © 2026 Create Recovery Center. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/45">
            <a href="#top" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Floating call button — appears after scrolling */
export function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={PHONE_TEL}
          aria-label={`Call ${PHONE_DISPLAY}`}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl shadow-brand-500/40 transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500" />
          <Phone className="relative h-5 w-5 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* Scroll-to-top arrow — used inline by the footer */
export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-navy-900/90 text-white shadow-xl shadow-navy-950/40 backdrop-blur transition-colors hover:bg-brand-500 hover:text-navy-900"
        >
          <ArrowUpRight className="h-5 w-5 -rotate-45" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
