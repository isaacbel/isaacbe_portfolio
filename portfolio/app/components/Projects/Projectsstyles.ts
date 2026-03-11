export const projectStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  /* ══ CARD SHELL ══ */
  .proj-card {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 4 / 3;
    background: #0d0d0d;
    border: 1px solid rgba(255,255,255,0.06);
    transition: transform 0.5s cubic-bezier(0.23,1,0.32,1),
                box-shadow 0.5s cubic-bezier(0.23,1,0.32,1),
                border-color 0.4s ease;
    will-change: transform;
  }
  .proj-card:hover {
    transform: translateY(-8px) scale(1.02);
  }

  /* ══ IMAGE LAYER ══ */
  .proj-img-wrap { position: absolute; inset: 0; z-index: 0; }
  .proj-img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.06);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .proj-img.active { opacity: 1; transform: scale(1); }
  .proj-card:hover .proj-img.active {
    transform: scale(1.08);
    transition: opacity 0.55s ease, transform 7s ease;
  }

  /* ══ GRAIN OVERLAY ══ */
  .proj-noise {
    position: absolute; inset: 0; z-index: 1;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* ══ GRADIENTS ══ */
  .proj-fade-base {
    position: absolute; inset: 0; z-index: 2;
    background: linear-gradient(to top,
      rgba(4,4,4,0.98) 0%,
      rgba(4,4,4,0.6)  38%,
      rgba(4,4,4,0.12) 65%,
      transparent      100%
    );
    pointer-events: none;
  }
  .proj-fade-hover {
    position: absolute; inset: 0; z-index: 2;
    background: rgba(4,4,4,0.42);
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  .proj-card:hover .proj-fade-hover { opacity: 0; }

  /* ══ ACCENT LINE (left glow) ══ */
  .proj-accent-line {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    z-index: 10;
    border-radius: 18px 0 0 18px;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.55s cubic-bezier(0.23,1,0.32,1) 0.04s;
  }
  .proj-card:hover .proj-accent-line { transform: scaleY(1); }

  /* ══ TOP ROW ══ */
  .proj-top {
    position: absolute;
    top: 15px; left: 15px; right: 15px;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .proj-number {
    font-family: 'Space Mono', monospace;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: rgba(255,255,255,0.28);
    transition: color 0.35s;
  }
  .proj-card:hover .proj-number { color: rgba(255,255,255,0.65); }

  .proj-status {
    padding: 4px 11px;
    border-radius: 20px;
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }

  /* ══ IMAGE DOTS ══ */
  .img-dots {
    position: absolute;
    bottom: 13px; right: 15px;
    z-index: 9;
    display: flex;
    gap: 5px;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s;
  }
  .proj-card:hover .img-dots { opacity: 1; transform: translateY(0); }
  .img-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(255,255,255,0.28);
    border: none; padding: 0;
    cursor: pointer;
    transition: background 0.3s, width 0.3s, border-radius 0.3s;
  }
  .img-dot.active {
    background: white;
    width: 16px;
    border-radius: 3px;
  }

  /* ══ CONTENT (bottom) ══ */
  .proj-content {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 8;
    padding: 20px 20px 18px;
  }

  .proj-subtitle {
    font-family: 'Space Mono', monospace;
    font-size: 9.5px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 5px;
    transition: color 0.3s;
  }
  .proj-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(16px, 1.9vw, 20px);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 9px;
  }

  /* tags */
  .proj-tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .proj-tag {
    padding: 3px 9px;
    border-radius: 5px;
    font-family: 'Space Mono', monospace;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    border: 1px solid;
  }

  /* description */
  .proj-desc {
    font-family: 'Outfit', sans-serif;
    font-size: 12.5px;
    line-height: 1.65;
    color: rgba(255,255,255,0.58);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s cubic-bezier(0.23,1,0.32,1),
                opacity    0.4s ease 0.06s,
                margin     0.4s ease;
    margin-top: 0;
  }
  .proj-card:hover .proj-desc {
    max-height: 100px;
    opacity: 1;
    margin-top: 10px;
  }

  /* links */
  .proj-links {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s cubic-bezier(0.23,1,0.32,1) 0.04s,
                opacity    0.35s ease 0.16s,
                margin     0.4s ease;
    margin-top: 0;
  }
  .proj-card:hover .proj-links {
    max-height: 56px;
    opacity: 1;
    margin-top: 13px;
  }

  .proj-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 11.5px;
    letter-spacing: 0.04em;
    text-decoration: none;
    border: 1.5px solid;
    transition: transform 0.2s, filter 0.2s, background 0.2s;
    backdrop-filter: blur(8px);
    white-space: nowrap;
  }
  .proj-link-btn:hover { transform: translateY(-2px); filter: brightness(1.12); }
  .proj-link-btn.primary { color: #060606; border-color: transparent; font-weight: 800; }
  .proj-link-btn.ghost {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.82);
  }
  .proj-link-btn.ghost:hover { background: rgba(255,255,255,0.13); }

  /* ══ ANIMATIONS ══ */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
`;