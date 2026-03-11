const marqueeItems = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Python", "MongoDB", "Tailwind", "Linux", "Flask", "Git",
];

export default function FooterMarquee() {
  return (
    <>
      <style>{`
        @keyframes scrollText {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scrollText 18s linear infinite;
          display: inline-flex;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* dark */
        .marquee-wrapper {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          padding: 14px 0;
          overflow: hidden;
          white-space: nowrap;
          transition: border-color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .marquee-wrapper {
          border-bottom: 1px solid #e2e8f0;
        }

        /* dark */
        .marquee-item {
          padding: 0 28px;
          font-size: 12px;
          font-family: 'Space Mono', monospace;
          color: rgba(255,255,255,0.12);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .marquee-item {
          color: #94a3b8;
        }

        .marquee-dot {
          color: rgba(34,211,238,0.3);
          margin-left: 28px;
        }
        :root:not(.dark) .marquee-dot {
          color: rgba(6,182,212,0.45);
        }
      `}</style>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              {marqueeItems.map((t) => (
                <span key={t} className="marquee-item">
                  {t}
                  <span className="marquee-dot">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}