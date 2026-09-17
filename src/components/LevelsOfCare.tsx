import { Route } from "lucide-react";
import CtaButton from "./CtaButton";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./ui";

const programs = [
  {
    id: "php",
    num: "01",
    tag: "PHP",
    title: "Partial Hospitalization Program",
    text: "Comprehensive PHP designed to provide structure and consistent care while allowing you to maintain independence and continue living at home. Our program combines individual therapy, group sessions, and medical oversight, all delivered through a trauma-informed approach tailored to your needs.",
    tags: ["Individual Therapy", "Group Sessions", "Medical Oversight"],
    img: "https://images.pexels.com/photos/5711021/pexels-photo-5711021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A diverse group therapy session sitting in a circle",
  },
  {
    id: "iop",
    num: "02",
    tag: "IOP",
    title: "Intensive Outpatient Program",
    text: "Our IOP is designed for those who need consistent support and accountability while managing work, school, or family responsibilities. With flexible scheduling, including Evening IOP options, the program combines evidence-based therapy with continued access to the tools and structure that help you build lasting stability.",
    tags: ["Flexible Scheduling", "Evening IOP", "Evidence-Based Therapy"],
    img: "https://images.pexels.com/photos/9064678/pexels-photo-9064678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A one-on-one therapy session in a modern office",
  },
  {
    id: "supportive",
    num: "03",
    tag: "Housing + Aftercare",
    title: "Supportive Housing & Aftercare",
    text: "For those who need continued support, we offer supportive housing and aftercare options that provide a safe, structured environment alongside ongoing therapy and peer support. It's there when you need it, to help you keep the progress you've made while rebuilding your daily life.",
    tags: ["Safe Environment", "Peer Support", "Ongoing Therapy"],
    img: "https://images.pexels.com/photos/8556339/pexels-photo-8556339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Friends supporting each other outdoors",
  },
];

export default function LevelsOfCare() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-navy-50/60 to-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-navy-100/50 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag icon={Route}>Levels of Care</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            Your Path to Recovery
          </h2>
          <p className="mt-5 text-lg text-navy-600">Guiding you through every stage of recovery.</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.id}>
              <article
                id={p.id}
                className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[1.75rem] border border-navy-100/80 bg-white shadow-[0_10px_40px_-18px_rgba(28,28,32,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_60px_-20px_rgba(28,28,32,0.3)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.85] transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <span className="glass-dark absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-3 right-5 font-display text-5xl font-extrabold text-white/25 transition-transform duration-500 group-hover:-translate-y-1">
                    {p.num}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700 transition-colors duration-300 group-hover:bg-brand-500/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <CtaButton href="#verify" size="sm" className="mt-6 self-start">
                    Verify Insurance
                  </CtaButton>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
