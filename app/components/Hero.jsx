"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full bg-[var(--color-offwhite)] pt-32 pb-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center items-start z-10 space-y-4 md:pr-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-[90px] text-[var(--color-accent)] font-[family-name:var(--font-playfair)] leading-[1.1] mb-2">
          Babies
        </h1>

        {/* Placeholder for script font */}
        <h2 className="text-3xl md:text-5xl text-[var(--color-rose-dark)] font-[family-name:var(--font-cormorant)] italic mb-8">
          Lorem Ipsum Dolor
        </h2>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contacto"
            className="bg-[var(--color-accent)] text-white text-sm font-semibold tracking-wide px-10 py-4 rounded-[25px] text-center hover:bg-opacity-90 transition-all shadow-lg"
          >
            LOREM IPSUM
          </a>
          <a
            href="#servicios"
            className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-semibold tracking-wide px-10 py-4 rounded-[25px] text-center hover:bg-[var(--color-accent)] hover:text-white transition-all"
          >
            CONSETETUR
          </a>
        </div>
      </motion.div>

      {/* Right side: Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-1/2 mt-12 md:mt-0 h-[60vh] md:h-[80vh] relative"
      >
        <div
          className="w-full h-full bg-gradient-to-br from-[var(--color-rose)] to-[var(--color-secondary)] rounded-tl-[100px] rounded-br-[100px] shadow-2xl opacity-50 flex items-center justify-center"
        >
          <span className="text-[var(--color-accent)] font-[family-name:var(--font-playfair)] text-2xl">Babies Theme Mockup</span>
        </div>
      </motion.div>
    </section>
  );
}
