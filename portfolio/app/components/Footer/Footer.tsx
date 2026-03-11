"use client";
import { useRef, useEffect, useState } from "react";
import FooterMarquee  from "./FooterMarquee";
import FooterBrand    from "./FooterBrand";
import FooterNav      from "./FooterNav";
import FooterContact  from "./FooterContact";
import FooterStack    from "./FooterStack";
import FooterBottom   from "./FooterBottom";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── DARK (default) ── */
        .site-footer {
          position: relative;
          background: #060b14;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        /* ── LIGHT ── */
        :root:not(.dark) .site-footer {
          background: #f1f5f9;
          border-top: 1px solid #e2e8f0;
        }

        /* blobs */
        .footer-blob-left {
          position: absolute; bottom: 0; left: -100px;
          width: 400px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        :root:not(.dark) .footer-blob-left {
          background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%);
        }

        .footer-blob-right {
          position: absolute; top: 0; right: -80px;
          width: 350px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        :root:not(.dark) .footer-blob-right {
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
        }
      `}</style>

      <footer ref={ref} className="site-footer">
        {/* Top glow line */}
        <div style={{
          position: "absolute", top: 0, left: "20%", right: "20%", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
        }} />

        <div className="footer-blob-left" />
        <div className="footer-blob-right" />

        <FooterMarquee />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px 48px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr",
            gap: "56px",
            marginBottom: "56px",
          }}>
            <FooterBrand   inView={inView} />
            <FooterNav     inView={inView} />
            <FooterContact inView={inView} />
          </div>

          <FooterStack inView={inView} />
          <FooterBottom inView={inView} />
        </div>
      </footer>
    </>
  );
}