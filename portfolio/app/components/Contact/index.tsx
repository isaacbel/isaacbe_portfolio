"use client";
import { contactStyles } from "./Styles";
import { useInView } from "./Hooks";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{contactStyles}</style>

      <section
        id="contact"
        ref={ref}
        className="relative transition-colors duration-300 overflow-hidden"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)",
          background: "var(--bg-primary)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Ambient glow blobs */}
        <div
          className="absolute top-[10%] left-[5%] w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-52 h-52 md:w-80 md:h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--glow-purple) 0%, transparent 70%)" }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-5xl mx-auto">

          {/* Header */}
          <SectionHeader inView={inView} />

          {/* Stacked on mobile → side by side on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-10 items-start">

            <ContactInfo inView={inView} />

            {/* Form panel */}
            <div
              className={`${inView ? "fade-up" : ""} w-full`}
              style={{ opacity: inView ? 1 : 0, animationDelay: "0.3s" }}
            >
              <div
                className="w-full rounded-2xl transition-colors duration-300"
                style={{
                  background: "var(--card-bg)",
                  border: "1.5px solid var(--card-border)",
                  padding: "clamp(20px, 5vw, 36px)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ inView }: { inView: boolean }) {
  return (
    <div
      className={`${inView ? "fade-up" : ""} text-center mb-12 md:mb-16 lg:mb-20`}
      style={{ opacity: inView ? 1 : 0 }}
    >
      <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
        <div style={{ width: "28px", height: "1px", background: "#22d3ee" }} />
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "#22d3ee",
          textTransform: "uppercase",
        }}>
          Contact
        </span>
        <div style={{ width: "28px", height: "1px", background: "#22d3ee" }} />
      </div>

      <h2
        className="font-bold leading-tight mb-4"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        Let&apos;s Build Something{" "}
        <span style={{
          background: "linear-gradient(90deg, #22d3ee, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Great
        </span>
      </h2>

      <p
        className="mx-auto text-base md:text-lg"
        style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "480px" }}
      >
        Have a project in mind or an opportunity to discuss? I&apos;m always open to meaningful collaborations.
      </p>
    </div>
  );
}