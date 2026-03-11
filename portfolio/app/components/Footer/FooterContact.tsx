interface Props {
  inView: boolean;
}

const contactItems = [
  {
    href: "mailto:mi_belatrache@esi.dz",
    value: "mi_belatrache@esi.dz",
    darkIcon: (
      <svg width="14" height="14" fill="none" stroke="#22d3ee" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    lightIcon: (
      <svg width="14" height="14" fill="none" stroke="#0891b2" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    darkHover: "#22d3ee",
    lightHover: "#0891b2",
    hoverClass: "hover-cyan",
  },
  {
    href: "tel:+213672923656",
    value: "+213 672 92 36 56",
    darkIcon: (
      <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    lightIcon: (
      <svg width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    darkHover: "#a78bfa",
    lightHover: "#7c3aed",
    hoverClass: "hover-purple",
  },
  {
    href: null,
    value: "Jijel, Algeria",
    darkIcon: (
      <svg width="14" height="14" fill="none" stroke="#34d399" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    lightIcon: (
      <svg width="14" height="14" fill="none" stroke="#059669" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    darkHover: "#34d399",
    lightHover: "#059669",
    hoverClass: "hover-green",
  },
];

export default function FooterContact({ inView }: Props) {
  return (
    <>
      <style>{`
        /* dark */
        .footer-contact-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #334155;
          text-transform: uppercase;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        /* light */
        :root:not(.dark) .footer-contact-label { color: #94a3b8; }

        .footer-contact-link, .footer-contact-static {
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
          cursor: default;
        }
        .footer-contact-link { cursor: pointer; }

        /* dark hovers */
        .footer-contact-link.hover-cyan:hover   { color: #22d3ee; }
        .footer-contact-link.hover-purple:hover { color: #a78bfa; }
        .footer-contact-link.hover-green:hover  { color: #34d399; }

        /* light hovers */
        :root:not(.dark) .footer-contact-link.hover-cyan:hover   { color: #0891b2; }
        :root:not(.dark) .footer-contact-link.hover-purple:hover { color: #7c3aed; }
        :root:not(.dark) .footer-contact-link.hover-green:hover  { color: #059669; }

        /* hide/show icons per theme */
        .icon-dark  { display: inline-flex; }
        .icon-light { display: none; }
        :root:not(.dark) .icon-dark  { display: none; }
        :root:not(.dark) .icon-light { display: inline-flex; }
      `}</style>

      <div style={{
        opacity: inView ? 1 : 0,
        animation: inView ? "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.24s both" : "none",
      }}>
        <p className="footer-contact-label">Contact</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {contactItems.map((item) => {
            const content = (
              <>
                <span className="icon-dark">{item.darkIcon}</span>
                <span className="icon-light">{item.lightIcon}</span>
                {item.value}
              </>
            );
            return item.href ? (
              <a
                key={item.value}
                href={item.href}
                className={`footer-contact-link ${item.hoverClass}`}
              >
                {content}
              </a>
            ) : (
              <span key={item.value} className="footer-contact-static">
                {content}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}