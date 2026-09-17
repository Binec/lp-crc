import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import CtaButton from "./CtaButton";
import { EASE } from "./ui";

const LOGO_URL =
  "https://raw.githubusercontent.com/Binec/lp-crc/refs/heads/main/src/Captura%20de%20pantalla%202026-09-17%20004355%20(1).png";

const links = [
  { label: "Facility", href: "#facility" },
  { label: "PHP Program", href: "#php" },
  { label: "IOP Program", href: "#iop" },
  { label: "Supportive Housing", href: "#supportive" },
  { label: "Insurance", href: "#insurance" },
  { label: "Reviews", href: "#reviews" },
];

export const PHONE_DISPLAY = "(866) 913-7063";
export const PHONE_TEL = "tel:8669137063";

/* Shared calling CTA — circle icon + number, same design everywhere */
export function PhoneCta({
  tone = "dark",
  size = "sm",
  className,
}: {
  tone?: "dark" | "light" | "gold";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}) {
  const tones = {
    dark: {
      link: "text-white hover:text-brand-300",
      circle:
        "border border-white/15 bg-white/10 text-white group-hover:scale-110 group-hover:border-brand-400/50 group-hover:bg-brand-500/15 group-hover:text-brand-300",
    },
    light: {
      link: "text-navy-900 hover:text-brand-700",
      circle:
        "border border-navy-900/10 bg-navy-900/[0.06] text-navy-900 group-hover:scale-110 group-hover:border-brand-500/50 group-hover:bg-brand-500/15 group-hover:text-brand-700",
    },
    gold: {
      link: "text-navy-900 hover:text-navy-950",
      circle:
        "border border-navy-900/20 bg-navy-900/10 text-navy-900 group-hover:scale-110 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white",
    },
  } as const;

  const sizes = {
    xs: { link: "gap-1.5 text-[11px] font-semibold tracking-wide", circle: "h-6 w-6", icon: "h-3 w-3" },
    sm: { link: "gap-2.5 text-sm font-bold", circle: "h-9 w-9", icon: "h-4 w-4" },
    md: { link: "gap-3 text-base font-bold sm:text-lg", circle: "h-11 w-11", icon: "h-[18px] w-[18px]" },
    lg: {
      link: "gap-4 font-display text-xl font-extrabold tracking-tight sm:text-2xl",
      circle: "h-14 w-14 sm:h-16 sm:w-16",
      icon: "h-6 w-6 sm:h-7 sm:w-7",
    },
  } as const;

  const t = tones[tone];
  const s = sizes[size];

  return (
    <a
      href={PHONE_TEL}
      className={cn(
        "group inline-flex items-center transition-colors duration-300",
        s.link,
        t.link,
        className,
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full backdrop-blur transition-all duration-300",
          s.circle,
          t.circle,
        )}
      >
        <Phone className={s.icon} />
      </span>
      {PHONE_DISPLAY}
    </a>
  );
}

/* Site logo — uses the provided image */
function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5">
      <img
        src={LOGO_URL}
        alt="CRC Logo"
        className="h-10 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:max-w-[220px]"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar — hidden on mobile */}
      <div
        className={cn(
          "hidden overflow-hidden bg-navy-950/95 transition-all duration-500 sm:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container-x flex h-10 items-center justify-between text-[11px] font-semibold tracking-wide text-white/70">
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            100% Confidential Admissions — 24/7
          </p>
          <PhoneCta tone="dark" size="xs" />
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b border-white/10 bg-navy-950/95 backdrop-blur-xl transition-shadow duration-500",
          scrolled ? "shadow-2xl shadow-navy-950/40" : "shadow-none",
        )}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-semibold text-white/75 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            
            <CtaButton href="#verify" tone="dark" size="sm" className="hidden sm:inline-flex">
              Verify Insurance
            </CtaButton>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-b border-white/10 bg-navy-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <CtaButton
                href="#verify"
                tone="dark"
                fluid
                onClick={() => setOpen(false)}
                className="mt-3"
              >
                Verify Insurance
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
