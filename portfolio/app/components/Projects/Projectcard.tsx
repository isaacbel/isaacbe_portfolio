"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Project } from "./Projectsdata";

type Props = { project: Project; inView: boolean; delay: number };

const statusMap: Record<string, { bg: string; color: string; border: string }> = {
  completed:    { bg: "rgba(52,211,153,0.15)",  color: "#34d399", border: "rgba(52,211,153,0.3)" },
  "in progress":{ bg: "rgba(251,191,36,0.15)",  color: "#fbbf24", border: "rgba(251,191,36,0.3)" },
  archived:     { bg: "rgba(148,163,184,0.10)", color: "#94a3b8", border: "rgba(148,163,184,0.2)" },
};

export default function ProjectCard({ project, inView, delay }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const s = statusMap[project.status];

  const cycleImg = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setImgIndex((i) => (i + 1) % project.images.length);
    },
    [project.images.length]
  );

  return (
    <div
      className={`proj-card${inView ? " fade-up" : ""}`}
      style={{
        opacity: inView ? undefined : 0,
        animationDelay: `${delay}s`,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.color + "45";
        e.currentTarget.style.boxShadow = `0 28px 72px rgba(0,0,0,0.55), 0 0 0 1px ${project.color}22, 0 0 60px ${project.color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* ── Images ── */}
      <div className="proj-img-wrap" onClick={cycleImg}>
        {project.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${project.title} ${i + 1}`}
            className={`proj-img${i === imgIndex ? " active" : ""}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
            draggable={false}
          />
        ))}
      </div>

      {/* ── Grain ── */}
      <div className="proj-noise" />

      {/* ── Gradients ── */}
      <div className="proj-fade-base" />
      <div className="proj-fade-hover" />

      {/* ── Accent left line ── */}
      <div
        className="proj-accent-line"
        style={{ background: `linear-gradient(to top, ${project.color}, ${project.color}00)` }}
      />

      {/* ── Top row ── */}
      <div className="proj-top">
        <span className="proj-number">#{project.id}</span>
        <span
          className="proj-status"
          style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
        >
          {project.status}
        </span>
      </div>

      {/* ── Image dots ── */}
      {project.images.length > 1 && (
        <div className="img-dots">
          {project.images.map((_, i) => (
            <button
              key={i}
              className={`img-dot${i === imgIndex ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="proj-content">
        <p className="proj-subtitle" style={{ color: project.color }}>
          {project.subtitle}&nbsp;·&nbsp;{project.year}
        </p>

        <h3 className="proj-title">{project.title}</h3>

        <div className="proj-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="proj-tag"
              style={{
                color: project.color,
                borderColor: project.color + "30",
                background: project.color + "0e",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="proj-tag"
              style={{
                color: "rgba(255,255,255,0.35)",
                borderColor: "rgba(255,255,255,0.1)",
                background: "transparent",
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* description — revealed on hover */}
        <p className="proj-desc">{project.description}</p>

        {/* links — revealed on hover */}
        <div className="proj-links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-btn ghost"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {(project.links.live || project.links.demo) && (
            <a
              href={project.links.live ?? project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-btn primary"
              style={{
                background: project.color,
                boxShadow: `0 4px 18px ${project.color}45`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalIcon />
              {project.links.live ? "Live Site" : "Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}