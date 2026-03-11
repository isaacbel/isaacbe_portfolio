"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 overflow-hidden transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Container Card */}
      <div
        className="max-w-6xl mx-auto backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl transition-colors duration-300"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2 transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            About Me
          </h2>
          <p
            className="mt-4 text-base md:text-lg max-w-xl mx-auto transition-colors duration-300"
            style={{ color: "var(--text-secondary)" }}
          >
            Learn more about my background, skills, and expertise
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-2xl overflow-hidden border border-cyan-400/20 shadow-xl shadow-cyan-500/10 transition-all duration-500">
            <Image
              src="/images/isaac.jpg"
              alt="Belatrache Ishak"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="text-base md:text-lg leading-relaxed space-y-5 max-w-4xl mx-auto text-center transition-colors duration-300"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            I&apos;m{" "}
            <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
              BELATRACHE Ishak
            </span>
            , a Computer Science student at Jijel University with a strong
            interest in full-stack development and backend architecture.
            I enjoy building scalable web applications with modern technologies.
          </p>

          <p>
            I specialize in React, Next.js, Node.js, and Express.
            I have experience working with databases such as MongoDB and MySQL
            and building responsive high-performance user interfaces.
          </p>

          <p>
            Beyond coding, I enjoy problem-solving, cybersecurity, and networking.
            I continuously learn new technologies and work on personal projects
            to improve my skills.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-sm text-left md:text-center">
            {[
              { icon: "📍", label: "Location", value: "Jijel, Algeria" },
              { icon: "🎓", label: "Degree",   value: "Bachelor&apos;s in Computer Science (L2)" },
              { icon: "💼", label: "Focus",    value: "Full-Stack Web Development" },
              { icon: "⚡", label: "Interests",value: "Backend Systems, Networking, Cybersecurity" },
            ].map(({ icon, label, value }) => (
              <div key={label}>
                <span className="text-cyan-500 dark:text-cyan-400 font-semibold">
                  {icon} {label}:
                </span>{" "}
                <span style={{ color: "var(--text-secondary)" }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <div className="pt-8 flex justify-center">
            <a
              href="/cv.pdf"
              download="CV_Belatrache_Ishak.pdf"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white dark:text-[#0f172a] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}