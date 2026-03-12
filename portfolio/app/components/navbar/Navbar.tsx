"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Apply dark class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Detect scroll for elevated shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { name: "Home",     href: "#" },
    { name: "About",    href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills",   href: "#skills" },
    { name: "Contact",  href: "#contact" },
  ];

  const navBg    = darkMode ? "rgba(6,11,20,0.92)"    : "rgba(255,255,255,0.92)";
  const borderC  = darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const linkC    = darkMode ? "#cbd5e1"                : "#334155";
  const mobileC  = darkMode ? "#060b14"               : "#ffffff";
  const toggleBg = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const toggleC  = darkMode ? "#e2e8f0"               : "#334155";

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: #22d3ee;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          background: navBg,
          borderBottom: `1px solid ${borderC}`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: scrolled ? (darkMode ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.08)") : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">

            {/* Logo */}
            <Link href="#" className="shrink-0">
              <span
                className="text-xl md:text-2xl font-bold tracking-wide"
                style={{ color: "#22d3ee" }}
              >
                Belatrache Ishak
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  style={{ color: linkC }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkC)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Divider */}
              <div style={{ width: "1px", height: "20px", background: borderC }} />

              {/* Theme toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 cursor-pointer"
                style={{ background: toggleBg, color: toggleC }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#22d3ee";
                  e.currentTarget.style.background = darkMode ? "rgba(34,211,238,0.12)" : "rgba(34,211,238,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = toggleC;
                  e.currentTarget.style.background = toggleBg;
                }}
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
              </button>

              {/* Download CV */}
              <a
                href="/Belatrache_Ishak_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV in new tab"
                className="shrink-0 font-semibold text-sm px-5 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #0891b2, #22d3ee)",
                  color: "#ffffff",
                  boxShadow: "0 2px 12px rgba(34,211,238,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(34,211,238,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(34,211,238,0.3)";
                }}
              >
                Download CV
              </a>
            </div>

            {/* Mobile right side: theme toggle + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                style={{ background: toggleBg, color: toggleC }}
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>

              <button
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                style={{ background: toggleBg, color: toggleC }}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu — smooth slide */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: open ? "420px" : "0px",
            borderTop: open ? `1px solid ${borderC}` : "none",
          }}
        >
          <div
            className="px-4 py-4 flex flex-col gap-1"
            style={{ background: mobileC }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: linkC }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#22d3ee";
                  e.currentTarget.style.background = darkMode ? "rgba(34,211,238,0.06)" : "rgba(34,211,238,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = linkC;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div style={{ height: "1px", background: borderC, margin: "6px 0" }} />

            {/* Toggle theme row */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left"
              style={{ color: linkC }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22d3ee";
                e.currentTarget.style.background = darkMode ? "rgba(34,211,238,0.06)" : "rgba(34,211,238,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = linkC;
                e.currentTarget.style.background = "transparent";
              }}
            >
              {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            {/* Download CV */}
            <a
              href="/Belatrache_Ishak_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV in new tab"
              onClick={() => setOpen(false)}
              className="mt-1 text-center font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #0891b2, #22d3ee)",
                color: "#ffffff",
                boxShadow: "0 2px 12px rgba(34,211,238,0.25)",
              }}
            >
              Download CV
            </a>
          </div>
        </div>

      </nav>
    </>
  );
}