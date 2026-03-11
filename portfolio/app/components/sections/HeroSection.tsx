"use client";
import { useEffect, useState } from "react";

const roles = ["UI/UX Designer", "Frontend Developer", "React Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const displayed = roles[roleIndex].slice(0, charIndex);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 50);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start pt-20 text-center px-6 relative transition-colors duration-300"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle background glow — visible in both modes */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)" }}
      />

      {/* Main Heading */}
      <h1
        className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 relative"
        style={{ color: "var(--text-primary)" }}
      >
        Hello, I&apos;m{" "}
        <span className="text-cyan-500 dark:text-cyan-400">Belatreche Ishak</span>
      </h1>

      {/* Typewriter */}
      <p
        className="text-xl md:text-2xl font-semibold mb-6 relative"
        style={{ color: "var(--text-primary)" }}
      >
        I&apos;m a{" "}
        <span className="text-pink-500 dark:text-pink-400">{displayed}</span>
        <span className="animate-pulse text-pink-500 dark:text-pink-400">|</span>
      </p>

      {/* Description */}
      <p
        className="text-base md:text-lg max-w-xl leading-relaxed mb-10 relative"
        style={{ color: "var(--text-secondary)" }}
      >
        I create beautiful, functional websites and applications with a focus on
        user experience and clean code.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center relative">
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-[#0f172a] font-semibold px-8 py-3 rounded transition-colors duration-200"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="font-semibold px-8 py-3 rounded transition-all duration-200"
          style={{
            border: "1.5px solid var(--text-secondary)",
            color: "var(--text-primary)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--text-primary)";
            e.currentTarget.style.color = "var(--bg-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
        >
          Contact Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-30 animate-bounce transition-colors duration-200 cursor-pointer text-5xl"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        &#8964;
      </div>
    </section>
  );
}