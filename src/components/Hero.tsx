"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden md:min-h-screen">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <div className="animate-ken-burns h-full w-full">
          <Image
            src="/hero.webp"
            alt="Luxury treatment room at Velour Med Spa in Beverly Hills"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.6) 50%, rgba(15,15,15,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center md:min-h-screen">
        <div className="mx-auto w-full max-w-content px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[640px]"
          >
            <h1 className="font-display text-5xl font-medium leading-tight text-text-primary sm:text-6xl lg:text-[64px]">
              Where science meets refinement
            </h1>

            <p className="mt-6 max-w-md text-lg text-text-secondary">
              Board-certified aesthetics in Beverly Hills. Personalized
              treatments. Natural results.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-cta-accent px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-cta-hover"
              >
                Book Your Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-cta-accent px-8 py-3.5 text-base font-medium text-cta-accent transition-colors hover:bg-cta-accent/10"
              >
                View Treatments
              </a>
            </div>

            {/* Voice agent placeholder */}
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card-bg/60 px-5 py-2.5 text-sm text-text-secondary backdrop-blur-sm transition-colors hover:border-brand-accent hover:text-text-primary"
              aria-label="Speak to our AI concierge"
            >
              <Phone size={16} className="text-brand-accent" />
              Speak to Our AI Concierge
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
