import { ArrowUpRight, Loader2, type LucideIcon } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "../utils/cn";

type Tone = "light" | "dark" | "gold";
type Size = "sm" | "md" | "lg";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  /** light = dark outline on white · dark = white outline on charcoal · gold = dark outline on gold band */
  tone?: Tone;
  size?: Size;
  icon?: LucideIcon;
  /** stretch to fill container width */
  fluid?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const tones: Record<Tone, { pill: string; pillHover: string; fill: string; circle: string; circleHover: string }> = {
  light: {
    pill: "border-navy-900 bg-white/80 text-navy-900 backdrop-blur-sm",
    pillHover: "group-hover:text-navy-900",
    fill: "bg-brand-500",
    circle: "border-navy-900 bg-white/80 text-navy-900 backdrop-blur-sm",
    circleHover: "group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-navy-900",
  },
  dark: {
    pill: "border-white/80 bg-white/5 text-white backdrop-blur-sm",
    pillHover: "group-hover:text-navy-900",
    fill: "bg-brand-500",
    circle: "border-white/80 bg-white/5 text-white backdrop-blur-sm",
    circleHover: "group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-navy-900",
  },
  gold: {
    pill: "border-navy-900 bg-white/15 text-navy-900",
    pillHover: "group-hover:text-white",
    fill: "bg-navy-900",
    circle: "border-navy-900 bg-white/15 text-navy-900",
    circleHover: "group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white",
  },
};

const sizes: Record<Size, { pill: string; circle: string; icon: string }> = {
  sm: {
    pill: "h-10 px-5 text-[11px] tracking-[0.08em]",
    circle: "h-10 w-10",
    icon: "h-4 w-4",
  },
  md: {
    pill: "h-[52px] px-7 text-[12.5px] tracking-[0.08em] sm:px-8",
    circle: "h-[52px] w-[52px]",
    icon: "h-[18px] w-[18px]",
  },
  lg: {
    pill: "h-14 px-8 text-[13px] tracking-[0.1em] sm:h-[60px] sm:px-10 sm:text-sm",
    circle: "h-14 w-14 sm:h-[60px] sm:w-[60px]",
    icon: "h-5 w-5",
  },
};

function Inner({
  children,
  tone,
  size,
  icon: Icon,
  fluid,
  loading,
}: {
  children: ReactNode;
  tone: Tone;
  size: Size;
  icon: LucideIcon;
  fluid?: boolean;
  loading?: boolean;
}) {
  const t = tones[tone];
  const s = sizes[size];

  return (
    <>
      {/* Pill */}
      <span
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full border font-display font-bold uppercase leading-none transition-colors duration-300",
          s.pill,
          t.pill,
          t.pillHover,
          fluid && "flex-1",
        )}
      >
        {/* Fill sweep on hover */}
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 translate-y-[101%] rounded-full  transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0",
            t.fill,
          )}
        />
        <span className="relative whitespace-nowrap">{children}</span>
      </span>

      {/* Circle */}
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors duration-300",
          s.circle,
          t.circle,
          t.circleHover,
        )}
      >
        {loading ? (
          <Loader2 className={cn(s.icon, "animate-spin")} />
        ) : (
          <>
            {/* Icon exits to the top-right… */}
            <Icon
              className={cn(
                s.icon,
                "transition-transform duration-300 ease-out group-hover:translate-x-7 group-hover:-translate-y-7",
              )}
            />
            {/* …while a clone enters from the bottom-left */}
            <Icon
              className={cn(
                s.icon,
                "absolute -translate-x-7 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0",
              )}
            />
          </>
        )}
      </span>
    </>
  );
}

export default function CtaButton({
  children,
  href,
  onClick,
  type = "button",
  tone = "light",
  size = "md",
  icon = ArrowUpRight,
  fluid = false,
  loading = false,
  disabled = false,
  className,
}: CtaButtonProps) {
  const base = cn(
    "group inline-flex select-none items-center gap-0 transition-transform duration-200 active:scale-[0.98]",
    fluid && "flex w-full",
    disabled && "pointer-events-none opacity-70",
    className,
  );

  const inner = (
    <Inner tone={tone} size={size} icon={icon} fluid={fluid} loading={loading}>
      {children}
    </Inner>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {inner}
    </button>
  );
}
