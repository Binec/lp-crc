import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import CtaButton from "./CtaButton";

type Who = "myself" | "loved-one";

export default function InsuranceForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [who, setWho] = useState<Who>("myself");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 1500);
  };

  const toggleBase =
    "rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500";

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
            <p className="text-xs text-navy-500">
              <span className="text-brand-600">*</span> indicates required fields
            </p>

            {/* For myself / For loved one */}
            <div
              role="group"
              aria-label="Who is this for?"
              className="grid grid-cols-2 gap-1 rounded-2xl bg-navy-100 p-1"
            >
              <button
                type="button"
                aria-pressed={who === "myself"}
                onClick={() => setWho("myself")}
                className={`${toggleBase} ${
                  who === "myself" ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-700"
                }`}
              >
                For myself
              </button>
              <button
                type="button"
                aria-pressed={who === "loved-one"}
                onClick={() => setWho("loved-one")}
                className={`${toggleBase} ${
                  who === "loved-one" ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-700"
                }`}
              >
                For loved one
              </button>
            </div>

            {/* Full Name */}
            <div>
              <span className="field-label">
                Full Name <span className="text-brand-600">*</span>
              </span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  id="first"
                  name="firstName"
                  required
                  aria-label="First name"
                  placeholder="First name"
                  className="field"
                  autoComplete="given-name"
                />
                <input
                  id="last"
                  name="lastName"
                  required
                  aria-label="Last name"
                  placeholder="Last Name"
                  className="field"
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Phone / Email */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="field-label">
                  Phone <span className="text-brand-600">*</span>
                </label>
                <input id="phone" name="phone" required type="tel" className="field" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input id="email" name="email" type="email" className="field" autoComplete="email" />
              </div>
            </div>

            {/* DOB / Insurance Provider */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="dob" className="field-label">
                  DOB <span className="text-brand-600">*</span>
                </label>
                <input
                  id="dob"
                  name="dob"
                  required
                  type="date"
                  className="field"
                  autoComplete="bday"
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label htmlFor="insurance" className="field-label">
                  Insurance Provider <span className="text-brand-600">*</span>
                </label>
                <input id="insurance" name="insuranceProvider" required type="text" className="field" />
              </div>
            </div>

            {/* Member ID */}
            <div>
              <label htmlFor="memberId" className="field-label">
                Member ID Policy Number <span className="text-brand-600">*</span>
              </label>
              <input
                id="memberId"
                name="memberId"
                required
                type="text"
                className="field"
                autoComplete="off"
              />
            </div>

            <CtaButton type="submit" fluid loading={status === "sending"} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Get Admissions info"}
            </CtaButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}