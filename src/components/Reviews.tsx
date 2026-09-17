import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { EASE, Reveal, SectionTag } from "./ui";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

type Review = { name: string; short: string; more?: string };

const reviews: Review[] = [
  {
    name: "Shelley Henn",
    short: "I can\u2019t express my gratitude for what Create Recovery Center has done for my son. After years of struggling with addiction and attempting other inpatient facilities with no success, we were beginning to lose hope.",
    more: "That\u2019s when he found Create Recovery Center, and it truly was a life-changing experience. The level of care, compassion, and expertise provided by the staff is nothing short of remarkable.",
  },
  {
    name: "Andy Kaiser",
    short: "I can attest to what the rest of these reviews say when they say that Create literally saved their life because it LITERALLY saved mine too. I can\u2019t thank them enough for their understanding staff that put me back on the right track in life.",
  },
  {
    name: "Mia Austin",
    short: "Create recovery is the best level of care I\u2019ve experienced. This company has a great focus on success after leaving the program and discharge planning.",
    more: "Case management is phenomenal and one on one therapy with extremely qualified professionals. Create recovery center has played a primary role in my sobriety and became the foundation for my success. Thank you create recovery!",
  },
  {
    name: "Stuart Lyon",
    short: "Create was a phenomenal, vital experience for me. It created within me a solid, deep foundation of recovery. I have been to many treatments \u2013 Create was special.",
    more: "From bottom to top, staff was always positive leading me to a solution. The facilitators, the therapist, all staff were fabulous. This place rocks. If you\u2019re looking to recover \u2013 look no further!",
  },
  {
    name: "Diane Holliday",
    short: "I will forever be grateful to Create Recovery Center for all the many ways they helped me through my recovery journey. The facilitators, therapists, doctor & nurse, case workers and management are top notch.",
    more: "I am nothing like the wreck I was when I walked in their doors. I\u2019m sober now, finished the 12 steps with the help of a sponsor and the staff at Create and never want to look back. They truly care about their clients.",
  },
  {
    name: "Simon Thomas",
    short: "CREATE IS ABSOLUTELY AMAZING! The amount of consideration they have toward clients is unparalleled! They have gone above and beyond what any other outpatient center would have done for me.",
    more: "The staff at Create definitely make it a point to get to know each person individually and make each client feel special. The environment is very connected and no one is ever left out here.",
  },
  {
    name: "Jeremy Farr",
    short: "Create recovery is truly a home. The staff are what create the entire experience here. This is a place that is absolutely ran by servant leaders in their own right.",
    more: "Special shout out to Garrett and Zeena they are absolutely phenomenal with making a seamless process to get started. The clinical team here is unmatched and unlike any other. I am so grateful to have found create.",
  },
  {
    name: "Trenn Medlin",
    short: "I absolutely love this place. Create provided so much support for me while I was there and has continued to show support for me through aftercare.",
    more: "The groups are amazing and the staff truly cares about their clients. Since attending Create I have been able to maintain my sobriety and even got a job working in treatment myself. I recommend Create for anyone looking to get sober and change their life.",
  },
];

const AUTO_MS = 6000;

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);

  const paginate = useCallback((step: number) => {
    setDir(step);
    setIndex((i) => (i + step + reviews.length) % reviews.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  }, [index]);

  // Autoplay
  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [index]);

  const review = reviews[index];

  return (
    <section
      id="reviews"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-white via-navy-50/40 to-white py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag icon={() => <GoogleG className="h-3.5 w-3.5" />}>Google Reviews</SectionTag>
          <h2 className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy-900 sm:mt-5 sm:text-4xl lg:text-[2.75rem]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-600 sm:mt-5 sm:text-base">
            Real stories from clients and families who found lasting recovery at Create Recovery Center.
          </p>
        </Reveal>

        {/* Simple slider */}
        <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Prev — desktop only */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous review"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-600 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Card viewport */}
            <div
              className="relative min-h-[400px] w-full flex-1 overflow-hidden xs:min-h-[360px] sm:min-h-[300px]"
              onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchX.current == null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 45) paginate(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-full flex-col rounded-2xl border border-navy-100/80 bg-white p-5 shadow-[0_14px_40px_-20px_rgba(28,28,32,0.18)] sm:p-8 lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-brand-500 text-brand-500 sm:h-4 sm:w-4" />
                      ))}
                    </span>
                    <Quote className="h-6 w-6 text-brand-500/40 sm:h-7 sm:w-7" />
                  </div>

                  <blockquote className="mt-4 flex-1 sm:mt-5">
                    <p className="text-[15px] leading-relaxed text-navy-700 sm:text-base lg:text-lg">
                      &ldquo;{review.more ? `${review.short} ${review.more}` : review.short}&rdquo;
                    </p>
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100/70 pt-4 sm:mt-6 sm:gap-3.5 sm:pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-sm">
                      {initials(review.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-bold text-navy-900 sm:text-base">
                        {review.name}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-navy-400 sm:text-xs">
                        <GoogleG className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                        Google Review · Verified
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Next — desktop only */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next review"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-600 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600 sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile arrows + counter */}
          <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[3.5rem] text-center font-display text-xs font-bold text-navy-500">
              <span className="text-navy-900">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-navy-300">/</span>
              {String(reviews.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => paginate(1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-8">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === index ? "w-7 bg-brand-500" : "w-2.5 bg-navy-200 hover:bg-navy-300",
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
