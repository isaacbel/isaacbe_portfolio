"use client";
import { projectStyles } from "./Projectsstyles";
import { useInView } from "../Contact/Hooks";
import { projects } from "./Projectsdata";
import ProjectCard from "./Projectcard";

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{projectStyles}</style>

      <section
        id="projects"
        ref={ref}
        className="relative transition-colors duration-300 overflow-hidden"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)",
          background: "var(--bg-primary)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-[5%] right-[8%] w-64 h-64 md:w-[420px] md:h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--glow-purple) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[8%] left-[5%] w-52 h-52 md:w-80 md:h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)" }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-6xl mx-auto">

          {/* Header */}
          <SectionHeader inView={inView} />

          {/* Cards — 2 col on sm+, 1 col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                inView={inView}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>

          {/* CTA */}
          <BottomCTA inView={inView} />
        </div>
      </section>
    </>
  );
}

function SectionHeader({ inView }: { inView: boolean }) {
  return (
    <div
      className={`${inView ? "fade-up" : ""} text-center mb-12 md:mb-16 lg:mb-20`}
      style={{ opacity: inView ? 1 : 0 }}
    >
      <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
        <div style={{ width: "28px", height: "1px", background: "#a78bfa" }} />
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "#a78bfa",
          textTransform: "uppercase",
        }}>
          Projects
        </span>
        <div style={{ width: "28px", height: "1px", background: "#a78bfa" }} />
      </div>

      <h2
        className="font-bold leading-tight mb-4"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        Things I&apos;ve{" "}
        <span style={{
          background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Built
        </span>
      </h2>

      <p
        className="mx-auto text-base md:text-lg"
        style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "480px" }}
      >
        Hover any card to reveal details, screenshots, and links.
      </p>
    </div>
  );
}

function BottomCTA({ inView }: { inView: boolean }) {
  return (
    <div
      className={`${inView ? "fade-up" : ""} flex justify-center mt-12 md:mt-16`}
      style={{ opacity: inView ? 1 : 0, animationDelay: "0.55s" }}
    >
      <a
        href="https://github.com/isaacbel?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "13px 28px",
          borderRadius: "12px",
          background: "rgba(167,139,250,0.07)",
          border: "1.5px solid rgba(167,139,250,0.22)",
          color: "#a78bfa",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "0.03em",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = "0 8px 32px rgba(167,139,250,0.18)";
          el.style.background = "rgba(167,139,250,0.13)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "";
          el.style.boxShadow = "";
          el.style.background = "rgba(167,139,250,0.07)";
        }}
      >
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        View All on GitHub
      </a>
    </div>
  );
}