import { motion } from "framer-motion";
import { BadgeCheck, Lock, Star } from "lucide-react";
import CtaButton from "./CtaButton";
import InsuranceForm from "./InsuranceForm";
import { PhoneCta } from "./Navbar";
import { EASE, Stagger, StaggerItem } from "./ui";

const HERO_BG =
  "https://images.pexels.com/photos/806155/pexels-photo-806155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2400";

const heroChecks = ["Verified", "Insurance accepted", "Cash pay options available"];

function Stars() {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Background image + white-wash overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.img
          src={HERO_BG}
          alt=""
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* White wash — copy stays crisp on the left, photo breathes on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-white/30" />
        <div className="absolute inset-0 bg-white/10" />
        {/* Soft gold ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_82%_15%,rgba(241,183,83,0.16),transparent_60%)]" />
        <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] animate-float rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(75%_65%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="container-x relative grid gap-14 pb-24 pt-36 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-32 lg:pt-48">
        {/* Left — copy */}
        <Stagger className="max-w-2xl">
          <StaggerItem className="flex flex-wrap items-center gap-3">
            <span className="glass-light inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold tracking-wide text-navy-800">
              <Stars />
              5-Star Outpatient Treatment Center
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700">
              <Lock className="h-3.5 w-3.5" />
              100% Confidential Admissions 24/7
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl lg:text-[4.15rem]">
              Flexible PHP &amp; IOP Programs for{" "}
              <span className="relative inline-block bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
                Lasting Recovery
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial="hidden"
                  animate="show"
                  aria-hidden
                >
                  <motion.path
                    d="M3 9C60 3 150 2 297 7"
                    stroke="url(#underline-gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f1b753" />
                      <stop offset="1" stopColor="#dd9f3a" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              Create Recovery Center offers evidence-based outpatient programs designed to fit your life. Our programs
              are built for individuals ready to step down from a higher level of care or those seeking structure while
              managing work, school, and family life.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-500">
              Choose from Partial Hospitalization (PHP), Intensive Outpatient (IOP), Evening IOP, and Aftercare
              options, all tailored to support you at every stage. We also encourage clients to enhance their progress
              with additional support options aligned with their personal goals.
            </p>
          </StaggerItem>

          <StaggerItem>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                  <BadgeCheck className="h-4.5 w-4.5 text-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton href="#verify">Verify Insurance</CtaButton>
              <PhoneCta tone="light" size="md" />
            </div>
          </StaggerItem>
        </Stagger>

        {/* Right — glass form */}
        <motion.div
          id="verify"
          className="scroll-mt-32"
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <InsuranceForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
