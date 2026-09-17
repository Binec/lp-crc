import {
  Anchor,
  BookOpenCheck,
  Building2,
  CalendarCheck2,
  ClipboardList,
  Compass,
  Sparkle,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./ui";

const features = [
  { icon: Building2, title: "Center Overview" },
  { icon: Compass, title: "Our Approach" },
  { icon: ClipboardList, title: "Personalized Treatment Plans" },
  { icon: BookOpenCheck, title: "Evidence-Based Therapies" },
  { icon: CalendarCheck2, title: "Flexible Scheduling" },
  { icon: Anchor, title: "Focus on Lasting Stability" },
];

const marqueeItems = [
  "1-on-1 Counseling",
  "CBT",
  "DBT",
  "Meditation & Mindfulness",
  "Twelve Step Facilitation",
  "Family & Group Therapy",
  "Dual-Diagnosis Treatment",
  "Evening IOP",
  "Aftercare",
  "Supportive Housing",
];

export default function Programs() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag icon={Sparkles}>Outpatient Programs</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              Flexible PHP &amp; IOP Programs for Lasting Recovery
            </h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              Flexible outpatient programs built around your schedule, whether you&rsquo;re stepping down from a higher
              level of care or looking for structured support while managing work, school, or family life.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-navy-100/80 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700">
                    <f.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="font-display text-[15px] font-bold text-navy-900">{f.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Scrolling services strip */}
      <div className="relative overflow-hidden border-y border-navy-800/20 bg-navy-900 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-7 flex items-center gap-3 whitespace-nowrap text-sm font-semibold tracking-wide text-white/70"
            >
              <Sparkle className="h-4 w-4 fill-brand-400/30 text-brand-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
