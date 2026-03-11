import { techStack } from "./footerData";

interface Props {
  inView: boolean;
}

export default function FooterStack({ inView }: Props) {
  return (
    <>
      <style>{`
        /* dark */
        .footer-stack-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #334155;
          text-transform: uppercase;
          margin-bottom: 14px;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-stack-label { color: #94a3b8; }

        /* dark */
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 12px;
          font-family: 'Space Mono', monospace;
          color: #64748b;
          transition: all 0.2s ease;
          cursor: default;
        }
        .footer-badge:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
          color: #94a3b8;
        }

        /* light */
        :root:not(.dark) .footer-badge {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #64748b;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        :root:not(.dark) .footer-badge:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #334155;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
      `}</style>

      <div style={{
        opacity: inView ? 1 : 0,
        animation: inView ? "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.35s both" : "none",
        marginBottom: "40px",
      }}>
        <p className="footer-stack-label">Tech Stack</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {techStack.map((t) => (
            <span key={t.name} className="footer-badge">
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: t.color,
                flexShrink: 0,
              }} />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}