import { motion, useInView } from "framer-motion";
import { Check, Sprout, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";
import { cn } from "../utils/cn";

export type IconType = LucideIcon | ((props: { className?: string }) => ReactElement);

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------- Scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Stagger containers ---------------- */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section eyebrow tag ---------------- */
export function SectionTag({
  icon: Icon,
  children,
  dark = false,
  className,
}: {
  icon: IconType;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]",
        dark
          ? "border-brand-400/30 bg-brand-400/10 text-brand-300"
          : "border-brand-500/25 bg-brand-50 text-brand-700",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ---------------- Green check bullet ---------------- */
export function CheckItem({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          dark ? "bg-brand-500/20 text-brand-300" : "bg-brand-500/15 text-brand-700",
        )}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className={cn("text-sm font-medium", dark ? "text-white/80" : "text-navy-700")}>{children}</span>
    </div>
  );
}

/* ---------------- Brand logo ---------------- */
export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Create Recovery Center — home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Sprout className="h-5 w-5 text-white" />
      </span>
      <span className="font-display leading-none">
        <span className={cn("block text-[17px] font-extrabold tracking-tight", dark ? "text-white" : "text-navy-900")}>
          CREATE
        </span>
        <span className={cn("block pt-0.5 text-[9px] font-bold tracking-[0.3em]", dark ? "text-brand-300" : "text-brand-600")}>
          RECOVERY CENTER
        </span>
      </span>
    </a>
  );
}

/* ---------------- Animated counter ---------------- */
export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
