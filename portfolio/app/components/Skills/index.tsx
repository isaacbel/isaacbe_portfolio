// components/Skills/index.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import SkillBar from "./SkillBar";
import { skills, categories, Category } from "./skillsData";

export default function MySkills() {
  const [active, setActive]   = useState<Category | "All">("All");
  const [animate, setAnimate] = useState(false);
  const sectionRef  = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const filtered =
    active === "All" ? skills : skills.filter(s => s.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (cat: Category | "All") => {
    setAnimate(false);
    setActive(cat);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

        .expertise-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #0ea5e9;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .skills-desc {
          color: var(--text-secondary);
          font-size: clamp(14px, 2vw, 16px);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 480px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; }
        }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="transition-colors duration-300"
        style={{
          minHeight: "100vh",
          background: "var(--bg-primary)",
          padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 24px)",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 52px)" }}>
            <p className="expertise-tag">◈ EXPERTISE</p>
            <h2 className="skills-title">My Skills</h2>
            <p className="skills-desc">
              A comprehensive look at my technical proficiency across frontend,
              backend, and beyond.
            </p>
          </div>

          {/* Filter Tabs */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "clamp(28px, 5vw, 44px)",
          }}>
            {categories.map(cat => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: isActive
                      ? "1.5px solid var(--filter-active-border)"
                      : "1.5px solid var(--filter-border)",
                    background: isActive
                      ? "var(--filter-active-bg)"
                      : "var(--filter-bg)",
                    color: isActive
                      ? "#0ea5e9"
                      : "var(--filter-text)",
                    boxShadow: isActive
                      ? "0 0 0 3px rgba(14,165,233,0.1)"
                      : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filtered.map((skill, i) => (
              <div
                key={skill.name}
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`,
                }}
              >
                <SkillBar skill={skill} animate={animate} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}