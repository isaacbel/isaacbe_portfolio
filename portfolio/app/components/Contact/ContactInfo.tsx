"use client";
import { contactItems, ContactItem } from "./Contactdata";

type Props = { inView: boolean };

export default function ContactInfo({ inView }: Props) {
  return (
    <div
      className={`${inView ? "fade-up" : ""} flex flex-col gap-3 w-full`}
      style={{ opacity: inView ? 1 : 0, animationDelay: "0.15s" }}
    >
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "11px",
        letterSpacing: "0.15em",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}>
        Reach out via
      </p>

      {/* On mobile: 1 col. On md: optionally 2 col. On lg: back to 1 col (side by side with form) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {contactItems.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="info-card"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color + "55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
            >
              <InfoCardIcon item={item} />
              <InfoCardText label={item.label} value={item.value} />
              <ArrowIcon />
            </a>
          ) : (
            <div key={item.label} className="info-card">
              <InfoCardIcon item={item} />
              <InfoCardText label={item.label} value={item.value} />
            </div>
          )
        )}
      </div>

      {/* Availability badge */}
      <div
        className="inline-flex items-center gap-3 mt-2 w-full sm:w-auto"
        style={{
          padding: "12px 18px",
          borderRadius: "12px",
          background: "rgba(52,211,153,0.06)",
          border: "1px solid rgba(52,211,153,0.2)",
        }}
      >
        <div
          className="pulse shrink-0"
          style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#34d399" }}
        />
        <span style={{ fontSize: "13px", color: "#34d399", fontWeight: 600 }}>
          Available for new projects
        </span>
      </div>
    </div>
  );
}

function InfoCardIcon({ item }: { item: ContactItem }) {
  return (
    <div style={{
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      background: item.color + "12",
      border: `1px solid ${item.color}28`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: item.color,
      flexShrink: 0,
    }}>
      {item.iconType === "email" && (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )}
      {item.iconType === "phone" && (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )}
      {item.iconType === "location" && (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )}
    </div>
  );
}

function InfoCardText({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p style={{
        fontSize: "11px",
        color: "var(--text-muted)",
        fontFamily: "'Space Mono', monospace",
        letterSpacing: "0.08em",
        marginBottom: "3px",
      }}>
        {label}
      </p>
      <p className="truncate" style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>
        {value}
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-auto shrink-0"
      style={{ color: "var(--text-muted)" }}
      width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}