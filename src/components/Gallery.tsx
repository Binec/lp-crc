import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Reveal, SectionTag } from "./ui";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "patio",
    title: "Outdoor Relaxation Patio",
    category: "Amenities",
    src: "https://images.pexels.com/photos/34277709/pexels-photo-34277709.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Sunny modern outdoor patio with lush greenery and cozy lounge seating",
  },
  {
    id: "ocean-lounge",
    title: "Ocean-View Therapy Lounge",
    category: "Living Space",
    src: "https://images.pexels.com/photos/12715501/pexels-photo-12715501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Minimalist living room with natural light overlooking the ocean",
  },
  {
    id: "meditation-hall",
    title: "Mindfulness & Meditation Space",
    category: "Therapy",
    src: "https://images.pexels.com/photos/35129859/pexels-photo-35129859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Serene meditation room with natural wood, cushions, and peaceful light",
  },
  {
    id: "cozy-fireplace",
    title: "Quiet Hearth Lounge",
    category: "Supportive Housing",
    src: "https://images.pexels.com/photos/13278381/pexels-photo-13278381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Inviting white couches beside a modern fireplace for group sharing",
  },
  {
    id: "beachside-living",
    title: "Beachside Community Living",
    category: "Supportive Housing",
    src: "https://images.pexels.com/photos/34277710/pexels-photo-34277710.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Bright indoor-outdoor residence with open doors to coastal air",
  },
  {
    id: "sunlit-parlor",
    title: "Sunlit Peer Support Parlor",
    category: "Living Space",
    src: "https://images.pexels.com/photos/7546600/pexels-photo-7546600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Comfortable seating area with floor-to-ceiling windows for quiet discussion",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setActiveIdx(i);
  const closeLightbox = () => setActiveIdx(null);

  const prev = useCallback(() => {
    setActiveIdx((curr) =>
      curr === null
        ? null
        : (curr - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveIdx((curr) =>
      curr === null ? null : (curr + 1) % galleryPhotos.length,
    );
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIdx, next, prev]);

  return (
    <section
      id="facility"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle ambient light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-96 w-[45rem] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-navy-100/50 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag icon={Images}>Our Facility &amp; Grounds</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            A Peaceful Environment Built for{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
              Healing
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-600 sm:text-base">
            Take a look inside Create Recovery Center — comfortable living
            spaces, serene meditation lounges, private counseling rooms, and
            coastal outdoor amenities designed to support your journey.
          </p>
        </Reveal>

        {/* Photo Grid: 3 photos on mobile (< sm), full asymmetric bento on tablet/desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {galleryPhotos.map((photo, i) => {
            // First and sixth photo span 2 columns on larger screens for editorial rhythm
            const isFeatured = i === 0 || i === 5;
            // On mobile (< sm), only show the first 3 photos in the grid
            const mobileVisibility = i >= 3 ? "hidden sm:block" : "block";

            return (
              <Reveal
                key={photo.id}
                delay={i * 0.05}
                className={`${mobileVisibility} ${
                  isFeatured ? "lg:col-span-2" : "col-span-1"
                }`}
              >
                <div
                  onClick={() => openLightbox(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${photo.title}`}
                  className="group relative h-64 sm:h-72 w-full cursor-pointer overflow-hidden rounded-2xl border border-navy-100/80 bg-navy-100 shadow-[0_8px_30px_-16px_rgba(28,28,32,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-[0_20px_40px_-18px_rgba(28,28,32,0.22)] focus:outline-none focus:ring-4 focus:ring-brand-500/25"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay — always on mobile, fades in on desktop hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95 lg:opacity-0 lg:group-hover:opacity-95" />

                  {/* Category chip */}
                  <span className="glass-light absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-800 shadow-sm">
                    {photo.category}
                  </span>

                  {/* Quick-view icon top-right */}
                  <span className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-navy-900 lg:opacity-0 lg:group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>

                  {/* Mobile "+3 more" indicator on the 3rd card */}
                  {i === 2 && (
                    <span className="absolute right-3.5 bottom-4 rounded-full border border-white/25 bg-navy-950/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md sm:hidden">
                      +{galleryPhotos.length - 3} more in gallery
                    </span>
                  )}

                  {/* Title — always visible on mobile, reveals on hover for desktop */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-out sm:p-5 lg:translate-y-5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-brand-300 sm:text-lg">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile-only button to launch full 6-photo lightbox */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => openLightbox(3)}
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50/80 px-5 py-2.5 text-xs font-bold text-navy-800 shadow-xs transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
          >
            <Images className="h-4 w-4 text-brand-600" />
            View All {galleryPhotos.length} Photos (+{galleryPhotos.length - 3} More)
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Animated Transitions & Navigation */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-md sm:p-6 lg:p-10"
            aria-modal="true"
            role="dialog"
            aria-label="Photo gallery preview"
          >
            {/* Top bar controls */}
            <div
              className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {galleryPhotos[activeIdx].category}
                </span>
                <span className="text-xs text-white/50">
                  {activeIdx + 1} of {galleryPhotos.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Close photo preview"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-200 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brand-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-navy-950/80 text-white shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-brand-400 hover:bg-brand-500 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-400 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-navy-950/80 text-white shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-brand-400 hover:bg-brand-500 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-400 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Photo content container */}
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[82vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-2xl"
            >
              <img
                src={galleryPhotos[activeIdx].src}
                alt={galleryPhotos[activeIdx].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Photo caption footer */}
              <div className="flex flex-col gap-1 border-t border-white/10 bg-navy-950/95 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div>
                  <h4 className="font-display text-base font-bold text-white sm:text-lg">
                    {galleryPhotos[activeIdx].title}
                  </h4>
                  <p className="text-xs text-white/60">
                    {galleryPhotos[activeIdx].alt}
                  </p>
                </div>

                {/* Thumbnail strip inside modal */}
                <div className="mt-2 flex items-center gap-1.5 overflow-x-auto py-1 sm:mt-0">
                  {galleryPhotos.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIdx(i)}
                      aria-label={`Jump to photo ${i + 1}`}
                      className={`relative h-9 w-12 shrink-0 overflow-hidden rounded-md border transition-all ${
                        i === activeIdx
                          ? "border-brand-400 ring-2 ring-brand-400/40"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={p.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
