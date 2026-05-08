"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const branches = [
    {
      name: "LOREM IPSUM 1",
      address: "123 Lorem Street, City, Country",
      phone: "00 0000 0000",
      whatsapp: "00 0000 0000",
      hours: "Mon-Fri: 9:00 - 20:00 | Sat: 9:00 - 17:00"
    },
    {
      name: "LOREM IPSUM 2",
      address: "456 Dolor Street, City, Country",
      whatsapp: "00 0000 0000",
      hours: "Mon-Fri: 9:00 - 20:00 | Sat: 9:00 - 17:00"
    }
  ];

  return (
    <footer className="bg-[var(--color-white)] text-[var(--color-primary)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-b border-gray-100 pb-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl font-[family-name:var(--font-playfair)] tracking-tight text-[var(--color-accent)]">
              BABIES
            </h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all">
                <span className="sr-only">Instagram</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Branches Column */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {branches.map((branch, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-semibold uppercase tracking-widest text-xs text-[var(--color-accent)]">LOREM {branch.name}</h3>
                <p className="text-sm font-light leading-snug">{branch.address}</p>
                <div className="flex flex-col space-y-1 text-sm">
                  {branch.phone && <a href="#" className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)]">Tel: {branch.phone}</a>}
                  <a href="#" className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-accent)]">WhatsApp: {branch.whatsapp}</a>
                </div>
                <p className="text-[10px] text-gray-400 font-medium italic">{branch.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
          <p>&copy; {new Date().getFullYear()} BABIES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
