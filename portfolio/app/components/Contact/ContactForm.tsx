"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_URL = "https://formspree.io/f";

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
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formId) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      _replyto: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };
    setStatus("sending");
    try {
      const res = await fetch(`${FORMSPREE_URL}/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
      {status === "error" && (
        <div
          role="alert"
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span>
            Could not send. Check that <code style={{ background: "rgba(0,0,0,0.1)", padding: "2px 6px", borderRadius: "4px" }}>NEXT_PUBLIC_FORMSPREE_FORM_ID</code> is set in <code style={{ background: "rgba(0,0,0,0.1)", padding: "2px 6px", borderRadius: "4px" }}>.env.local</code>, or try again later.
          </span>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid rgba(239,68,68,0.5)",
              background: "transparent",
              color: "#ef4444",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Dismiss
          </button>
        </div>
      )}
      {/* Name + Email: stacked on mobile, side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Full name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ishak Belatrache"
            className="contact-input"
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
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
          name="subject"
          placeholder="Project Inquiry"
          className="contact-input"
        />
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
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