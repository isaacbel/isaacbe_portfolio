import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://isaacbelatracheportfolio.vercel.app"),
  title: "Belatreche Ishak | Full-Stack Developer & UI/UX Designer",
  description: "Portfolio of Belatreche Ishak, a Full-Stack Developer and UI/UX Designer specializing in beautiful and functional web applications.",
  keywords: ["Belatreche Ishak", "Portfolio", "Full-Stack Developer", "Web Developer", "UI/UX Designer", "Next.js", "React"],
  openGraph: {
    title: "Belatreche Ishak | Full-Stack Developer & UI/UX Designer",
    description: "Portfolio of Belatreche Ishak, a Full-Stack Developer and UI/UX Designer specializing in beautiful and functional web applications.",
    url: "https://isaacbelatracheportfolio.vercel.app",
    siteName: "Belatreche Ishak Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // "dark" class added here by Navbar via document.documentElement
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen transition-colors duration-300`}
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}