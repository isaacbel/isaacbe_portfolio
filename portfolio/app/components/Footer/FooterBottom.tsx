interface Props {
  inView: boolean;
}

export default function FooterBottom({ inView }: Props) {
  return (
    <>
      <style>{`
        /* dark */
        .footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 28px;
          transition: background 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-divider { background: #e2e8f0; }

        /* dark */
        .footer-copyright {
          font-size: 13px;
          color: #334155;
          font-family: 'Space Mono', monospace;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-copyright { color: #64748b; }

        /* dark */
        .footer-built {
          font-size: 12px;
          color: #1e293b;
          font-family: 'Space Mono', monospace;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-built { color: #94a3b8; }
      `}</style>

      <div style={{
        opacity: inView ? 1 : 0,
        animation: inView ? "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.45s both" : "none",
      }}>
        <div className="footer-divider" />

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Belatrache Ishak. All rights reserved.
          </p>

          {/* Removed "Built with ♥ using Next.js & Tailwind CSS" text per request */}
        </div>
      </div>
    </>
  );
}