"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const locations = [
    {
      name: "LOREM IPSUM 1",
      address: "123 Lorem Street\nCity, Country\nZip Code",
      tel: "00 0000 0000",
      whatsapp: "0000000000",
      email: "hello@babies.com"
    },
    {
      name: "LOREM IPSUM 2",
      address: "456 Dolor Street\nCity, Country\nZip Code",
      tel: "00 0000 0000",
      whatsapp: "0000000000",
      email: "hello@babies.com"
    },
    {
      name: "LOREM IPSUM 3",
      address: "789 Sit Street\nCity, Country\nZip Code",
      tel: "00 0000 0000",
      whatsapp: "0000000000",
      email: "hello@babies.com"
    }
  ];

  return (
    <section id="contacto" className="bg-[var(--color-accent)] text-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] tracking-wide mb-6">
            LOREM IPSUM
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 tracking-widest">{loc.name}</h3>
              <p className="whitespace-pre-line mb-6 font-light leading-relaxed">
                {loc.address}
              </p>
              <div className="text-sm font-light space-y-2">
                {loc.tel && <p>Lorem: <span className="font-medium">{loc.tel}</span></p>}
                {loc.whatsapp && (
                  <p>
                    <a href="#" className="hover:underline font-medium">
                      Ipsum: {loc.whatsapp}
                    </a>
                  </p>
                )}
                {loc.email && (
                  <p>
                    <a href="#" className="hover:underline font-medium">
                      Dolor: {loc.email}
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
