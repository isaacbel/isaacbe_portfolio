import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belatreche Ishak | Portfolio",
  description: "UI/UX Designer & Developer Portfolio",
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