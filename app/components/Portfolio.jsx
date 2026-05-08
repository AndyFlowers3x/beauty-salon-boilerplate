"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portafolio" className="bg-[var(--color-white)]">
      {/* SECTION 1 */}
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="w-full md:w-1/2 min-h-[500px] md:min-h-[700px] bg-gradient-to-br from-[var(--color-rose)] to-[var(--color-secondary)] opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 text-center bg-[var(--color-offwhite)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-wide mb-6 text-[var(--color-accent)]">
              LOREM<br/>IPSUM
            </h2>
            <p className="text-[var(--color-primary)] mb-10 max-w-sm mx-auto font-light text-lg">
              Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-[var(--color-accent)] text-white px-10 py-4 uppercase text-sm tracking-widest font-semibold rounded-[25px] hover:bg-[var(--color-rose-dark)] transition-all shadow-md">
              LOREM
            </button>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col md:flex-row-reverse">
        <motion.div 
          className="w-full md:w-1/2 min-h-[500px] md:min-h-[700px] bg-gradient-to-bl from-[var(--color-rose-dark)] to-[var(--color-rose)] opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 text-center bg-[var(--color-white)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-wide mb-6 text-[var(--color-accent)]">
              DOLOR SIT
            </h2>
            <p className="text-[var(--color-primary)] mb-10 max-w-sm mx-auto font-light text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            <button className="bg-[var(--color-accent)] text-white px-10 py-4 uppercase text-sm tracking-widest font-semibold rounded-[25px] hover:bg-[var(--color-rose-dark)] transition-all shadow-md">
              AMET
            </button>
          </motion.div>
        </div>
      </div>
      {/* 3x3 GRID SECTION */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[var(--color-accent)] mb-4">
            GALLERY
          </h2>
          <div className="elegant-divider"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-tr from-[var(--color-rose)] to-[var(--color-white-warm)] rounded-sm shadow-sm border border-[var(--color-rose-dark)]/30 flex items-center justify-center overflow-hidden relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="text-[var(--color-accent)]/20 font-bold text-2xl md:text-4xl">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3D COVERFLOW CAROUSELS SECTION */}
      <div className="bg-[var(--color-offwhite)] py-32 overflow-hidden relative noise-overlay">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[var(--color-accent)] mb-4 uppercase tracking-tighter">
            Our Portfolio
          </h2>
          <div className="elegant-divider"></div>
        </div>
        
        <div className="space-y-20">
          {[1, 2, 3].map((row) => (
            <div key={row} className="relative w-full overflow-hidden py-10">
              <motion.div 
                className="flex gap-8 px-[10%]"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 20 + (row * 5), 
                  repeat: Infinity, 
                  ease: "linear",
                  reverse: row === 2 // Middle row moves the other way
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="min-w-[280px] md:min-w-[350px] aspect-[4/5] rounded-2xl border border-[var(--color-rose-dark)]/30 bg-[var(--color-white)] shadow-xl overflow-hidden relative preserve-3d"
                    whileInView={{ 
                      rotateY: 0,
                      scale: 1,
                      z: 0
                    }}
                    initial={{ 
                      rotateY: i % 2 === 0 ? 30 : -30,
                      scale: 0.85,
                      z: -100
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-rose)] to-transparent opacity-40"></div>
                    <div className="w-full h-full flex items-center justify-center text-[var(--color-accent)]/40 font-[family-name:var(--font-playfair)] text-xl italic">
                      Babies {row}-{i + 1}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/20 to-transparent">
                      <p className="text-white text-xs font-bold tracking-widest uppercase">Mockup Collection</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
