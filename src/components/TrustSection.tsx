import { Award, Clock, Layers, ShieldCheck, Star } from "lucide-react";
import { PhoneCta } from "./Navbar";
import { CheckItem, CountUp, Reveal, SectionTag, Stagger, StaggerItem } from "./ui";

const bullets = [
  "Most private insurance accepted",
  "Exceptional remission rates",
  "Career and educational planning",
];

const stats = [
  { icon: Star, value: 5, suffix: "-Star", label: "Rated Outpatient Treatment Center" },
  { icon: Clock, value: 24, suffix: "/7", label: "Confidential Admissions" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Confidential Care" },
  { icon: Layers, value: 4, suffix: "+", label: "Programs — PHP, IOP, Evening & Aftercare" },
];

export default function TrustSection() {
  return (
    <section id="insurance" className="relative scroll-mt-28 overflow-hidden bg-white py-24 lg:py-32">
      {/* soft background tints */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-100/60 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <Reveal>
          <SectionTag icon={Award}>Joint Commission Accredited</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            Top-Rated Treatment in a Private, Supportive Setting
          </h2>
          <p className="mt-6 leading-relaxed text-navy-600">
            Create Recovery Center offers top-rated addiction treatment in a private, supportive setting. Our
            expert-led programs — Medically supervised detox, inpatient, IOP, PHP, and Online Outpatient — are
            tailored to your unique needs, ensuring lasting recovery. With evidence-based care, innovative therapies,
            and 24/7 support, we help you heal and rebuild your life.
          </p>
          <p className="mt-4 font-semibold text-navy-800">
            Start your recovery today — call now to verify insurance.
          </p>

          <div className="mt-7 space-y-3.5">
            {bullets.map((b, i) => (
              <Reveal key={b} delay={0.1 + i * 0.08} y={14}>
                <CheckItem>{b}</CheckItem>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-9">
            <PhoneCta tone="light" size="md" />
          </Reveal>
        </Reveal>

        {/* Stats grid */}
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass-light group h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(28,28,32,0.3)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-navy-900 group-hover:shadow-lg group-hover:shadow-brand-500/40">
                  <s.icon className="h-5.5 w-5.5" />
                </div>
                <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy-900">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-navy-500">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
