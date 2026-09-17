import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import CtaButton from "./CtaButton";

const insurers = [
  "Aetna",
  "Anthem Blue Cross",
  "Cigna",
  "UnitedHealthcare",
  "Kaiser Permanente",
  "Blue Shield",
  "Self-Pay / Cash",
  "Other",
];

const trustBadges = ["Joint Commission Accredited", "Insurance accepted", "Cash pay options"];

export default function InsuranceForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 1500);
  };

  return (
    <div className="glass-light relative rounded-[2rem] p-6 sm:p-8">
      {/* top highlight line */}
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent" />

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30">
          <ShieldCheck className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-navy-900">Free Insurance Verification</h2>
          <p className="mt-0.5 text-xs font-medium text-navy-500">100% confidential — responses within 24 hours</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="flex flex-col items-center py-14 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 15 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15"
            >
              <CheckCircle2 className="h-8 w-8 text-brand-400" />
            </motion.div>
            <h3 className="mt-5 font-display text-lg font-bold text-navy-900">Thank you!</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-600">
              Our admissions team will reach out shortly to verify your benefits — 100% confidential.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-xs font-bold text-brand-700 underline-offset-4 transition-colors hover:text-brand-800 hover:underline"
            >
              Verify another plan
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="first" className="field-label">
                  First Name <span className="text-brand-600">*</span>
                </label>
                <input id="first" required placeholder="John" className="field" autoComplete="given-name" />
              </div>
              <div>
                <label htmlFor="last" className="field-label">
                  Last Name <span className="text-brand-600">*</span>
                </label>
                <input id="last" required placeholder="Doe" className="field" autoComplete="family-name" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="field-label">
                  Phone <span className="text-brand-600">*</span>
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="field"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="email" className="field-label">
                  Email <span className="text-brand-600">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="john@email.com"
                  className="field"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="insurance" className="field-label">
                Insurance Provider
              </label>
              <select id="insurance" className="field" defaultValue="">
                <option value="" disabled>
                  Select your provider
                </option>
                {insurers.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Anything we should know?
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Tell us a little about your situation (optional)"
                className="field resize-none"
              />
            </div>

            <CtaButton type="submit" fluid loading={status === "sending"} disabled={status === "sending"}>
              {status === "sending" ? "Verifying…" : "Verify My Insurance"}
            </CtaButton>

            <p className="text-center text-[11px] text-navy-400">
              <span className="text-brand-600">*</span> indicates required fields
            </p>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-navy-100 pt-5">
        {trustBadges.map((b) => (
          <span key={b} className="flex items-center gap-1.5 text-[11px] font-semibold text-navy-500">
            <BadgeCheck className="h-3.5 w-3.5 text-brand-600" />
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
