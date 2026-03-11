import { navLinks } from "./footerData";

interface Props {
  inView: boolean;
}

export default function FooterNav({ inView }: Props) {
  return (
    <>
      <style>{`
        /* dark */
        .footer-nav-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #334155;
          text-transform: uppercase;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-nav-label { color: #94a3b8; }

        /* dark */
        .footer-nav-link {
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }
        /* dark hover */
        .footer-nav-link:hover { color: #e2e8f0; }
        /* light hover */
        :root:not(.dark) .footer-nav-link:hover { color: #0f172a; }
      `}</style>

      <div style={{
        opacity: inView ? 1 : 0,
        animation: inView ? "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.12s both" : "none",
      }}>
        <p className="footer-nav-label">Navigation</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-nav-link">
              <svg
                width="12" height="12" fill="none"
                stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                style={{ opacity: 0.3 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}