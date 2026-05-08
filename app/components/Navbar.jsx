"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, Phone, Clock, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    // Check initial theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "PORTAFOLIO", href: "#portafolio" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--color-accent)] text-white text-[10px] py-2 px-6 hidden md:flex justify-between items-center z-50 relative uppercase tracking-widest font-medium">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={12} />
            <span>+00 00 0000 0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={12} />
            <span>LOREM IPSUM ST, 123</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-200 transition-colors"><Instagram size={14} /></a>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "top-0 bg-[var(--color-white)] shadow-sm py-4" : "top-[32px] md:top-[32px] bg-[var(--color-white)] py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-wide text-[var(--color-accent)]">
              BABIES
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--color-offwhite)] text-[var(--color-accent)] hover:bg-[var(--color-rose)] transition-colors shadow-sm"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-sm font-semibold tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contacto"
              className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-[25px] font-semibold tracking-wide hover:bg-opacity-90 transition-all shadow-md"
            >
              LOREM
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--color-offwhite)] text-[var(--color-accent)]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-[var(--color-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-white)] shadow-lg overflow-hidden flex flex-col items-center pt-10 pb-10 space-y-6 h-screen"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl text-[var(--color-primary)] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
