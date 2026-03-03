"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
      <div
        className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg" : "bg-transparent"
        }`}
        style={scrolled ? { boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5)" } : {}}
      >
        <span className="text-sm font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.9)" }}>
          Tu Nombre
        </span>

        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="text-sm transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.8)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          Contactar
        </a>
      </div>
    </nav>
  );
};
