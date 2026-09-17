import {
  BedDouble,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CalendarClock,
  Car,
  ClipboardList,
  Flower2,
  GraduationCap,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Home,
  Layers,
  Lock,
  MessagesSquare,
  PawPrint,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  UserRound,
  Users,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./ui";

type DetailItem = { icon: LucideIcon; label: string };
type DetailCard = { icon: LucideIcon; title: string; items: DetailItem[] };

const cards: DetailCard[] = [
  {
    icon: Sparkles,
    title: "What Sets Us Apart",
    items: [
      { icon: Route, label: "Our Approach" },
      { icon: ClipboardList, label: "Personalized Treatment Plans" },
      { icon: Lock, label: "Confidential & Judgment-Free Care" },
      { icon: CalendarClock, label: "Convenient Day & Evening Scheduling" },
    ],
  },
  {
    icon: Users,
    title: "Who We Treat",
    items: [
      { icon: Briefcase, label: "Working Professionals" },
      { icon: HardHat, label: "Union Members" },
      { icon: GraduationCap, label: "College Students" },
      { icon: UserRound, label: "Young Adults" },
      { icon: UsersRound, label: "Adult Men & Women" },
    ],
  },
  {
    icon: Home,
    title: "Amenities & Accommodations",
    items: [
      { icon: BedDouble, label: "Private or Shared Rooms" },
      { icon: Smartphone, label: "Cell Phones Allowed" },
      { icon: PawPrint, label: "Pet Friendly" },
      { icon: ShieldCheck, label: "Safe Environment" },
      { icon: Car, label: "Transportation Assistance" },
      { icon: Sun, label: "Weekend Outings" },
      { icon: Waves, label: "Beach Access" },
    ],
  },
  {
    icon: HeartHandshake,
    title: "Services & Therapies",
    items: [
      { icon: MessagesSquare, label: "1-on-1 Counseling" },
      { icon: Flower2, label: "Meditation & Mindfulness" },
      { icon: Brain, label: "Cognitive Behavioral Therapy (CBT)" },
      { icon: HeartPulse, label: "Dialectical Behavior Therapy (DBT)" },
      { icon: BookOpen, label: "Twelve Step Facilitation" },
      { icon: Users, label: "Family and Group Therapy" },
      { icon: Layers, label: "Dual-Diagnosis Treatment" },
    ],
  },
];

export default function Details() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 py-16 sm:py-24 lg:py-32">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_85%_10%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_10%_90%,rgba(28,28,32,0.08),transparent_60%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 animate-float-slow rounded-full bg-white/15 blur-3xl" />
        <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag icon={Building2} className="border-navy-900/15 bg-navy-900/90 text-white">
            Center Overview
          </SectionTag>
          <h2 className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy-900 sm:mt-5 sm:text-4xl lg:text-[2.75rem]">
            Care Designed Around <span className="text-white drop-shadow-[0_2px_0_rgba(28,28,32,0.35)]">Your Life</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/70 sm:mt-5 sm:text-base">
            Structure, support, and real-world flexibility — everything you need to rebuild, at every stage of
            recovery.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="glass-light h-full rounded-2xl p-5 sm:rounded-[1.75rem] sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <card.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                  </span>
                  <h3 className="font-display text-[15px] font-bold leading-tight text-navy-900 sm:text-lg">
                    {card.title}
                  </h3>
                  <span className="ml-auto shrink-0 rounded-full border border-navy-100 bg-navy-50 px-2.5 py-1 text-[10px] font-bold text-navy-500 sm:px-3 sm:text-[11px]">
                    {card.items.length}
                    <span className="hidden sm:inline"> items</span>
                  </span>
                </div>

                <ul className="mt-4 grid gap-0.5 sm:mt-5 sm:grid-cols-2 sm:gap-1">
                  {card.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] font-medium text-navy-700 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-sm"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-brand-600" />
                      <span className="leading-snug">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
