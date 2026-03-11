"use client";
import { socials } from "./footerData";

interface Props {
  inView: boolean;
}

export default function FooterBrand({ inView }: Props) {
  return (
    <>
      <style>{`
        /* dark */
        .footer-brand-name {
          font-size: 22px;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-brand-name { color: #0f172a; }

        /* dark */
        .footer-brand-role {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: #22d3ee;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-brand-role { color: #0891b2; }

        /* dark */
        .footer-brand-bio {
          font-size: 14px;
          color: #475569;
          line-height: 1.8;
          max-width: 300px;
          margin-bottom: 28px;
          transition: color 0.3s ease;
        }
        /* light stays same #475569 */

        /* dark */
        .footer-social-btn {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #475569;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        /* light */
        :root:not(.dark) .footer-social-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #64748b;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
      `}</style>

      <div style={{
        opacity: inView ? 1 : 0,
        animation: inView ? "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both" : "none",
      }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 className="footer-brand-name">Belatrache Ishak</h3>
          <p className="footer-brand-role">Full-Stack Developer</p>
        </div>

        <p className="footer-brand-bio">
          Building fast, modern, and accessible web experiences with a passion
          for clean code and thoughtful design.
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="footer-social-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = s.color;
                e.currentTarget.style.borderColor = s.color + "44";
                e.currentTarget.style.background = s.color + "12";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.background = "";
                e.currentTarget.style.transform = "";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}