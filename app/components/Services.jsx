"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainServices = [
    {
      title: "LOREM IPSUM 1",
      desc: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: ""
    },
    {
      title: "LOREM IPSUM 2",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: ""
    },
    {
      title: "LOREM IPSUM 3",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      img: ""
    },
    {
      title: "LOREM IPSUM 4",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
      img: ""
    },
    {
      title: "LOREM IPSUM 5",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: ""
    },
    {
      title: "LOREM IPSUM 6",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: ""
    }
  ];

  return (
    <section id="servicios" className="bg-[var(--color-white)] overflow-hidden">
      {/* Ticker */}
      <div className="w-full bg-[var(--color-accent)] text-white py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xl md:text-2xl font-semibold tracking-widest mx-4">
              • LOREM • IPSUM • DOLOR • SIT • AMET
            </span>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] mb-8 text-[var(--color-accent)]">
            Babies Mockup
          </h2>
          <p className="text-lg md:text-2xl text-[var(--color-primary)] leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 pb-24" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative rounded-sm bg-gradient-to-t from-[var(--color-rose)] to-[var(--color-white-warm)] border border-[var(--color-rose-dark)] opacity-60">
                <div className="w-full h-full flex items-center justify-center text-[var(--color-accent)] font-medium">
                  Placeholder
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--color-accent)] tracking-wide">
                {service.title}
              </h3>
              <p className="text-[var(--color-primary)] mb-6 font-light text-base md:text-lg">
                {service.desc}
              </p>
              <button className="border-b-2 border-[var(--color-accent)] text-sm md:text-base uppercase font-semibold pb-1 text-[var(--color-accent)] hover:text-[var(--color-rose-dark)] hover:border-[var(--color-rose-dark)] transition-colors tracking-widest">
                LOREM
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
