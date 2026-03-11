"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 700,
  color: "var(--text-primary)",
  letterSpacing: "0.06em",
  marginBottom: "8px",
  textTransform: "uppercase",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-4">
        <div style={{ fontSize: "52px", marginBottom: "16px" }}>🚀</div>
        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px" }}>
          Message Delivered!
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginBottom: "24px" }}>
          I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            padding: "11px 28px",
            borderRadius: "10px",
            background: "rgba(34,211,238,0.1)",
            border: "1px solid rgba(34,211,238,0.3)",
            color: "#22d3ee",
            cursor: "pointer",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            transition: "all 0.2s",
          }}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 w-full">

      {/* Name + Email: stacked on mobile, side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>FullName</label>
          <input
            type="text"
            required
            placeholder="Ishak Belatrache"
            className="contact-input"
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="contact-input"
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Subject</label>
        <input
          type="text"
          placeholder="Project Inquiry"
          className="contact-input"
        />
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={5}
          required
          placeholder="Tell me about your project or idea..."
          className="contact-input"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="send-btn mt-1"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ animation: "spin 0.8s linear infinite" }}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </span>
        )}
      </button>

    </form>
  );
}