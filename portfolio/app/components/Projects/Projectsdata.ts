export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  images: string[];
  links: { github?: string; live?: string; demo?: string };
  color: string;
  year: string;
  status: "completed" | "in progress" | "archived";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Happy Day Restaurant",
    subtitle: "Full-Stack Web App",
    description:
      "Fine dining restaurant website with dark luxury aesthetic. Features menu filtering, masonry gallery, contact page, and Google Maps integration.",
    tags: ["Next.js", "Express", "MongoDB", "Tailwind", "Framer Motion", "Cloudinary"],
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    ],
    links: { github: "https://github.com", live: "https://example.com" },
    color: "#D4AF37",
    year: "2024",
    status: "in progress",
  },
  {
    id: "02",
    title: "DevPortfolio",
    subtitle: "Personal Portfolio",
    description:
      "Minimalist developer portfolio with scroll animations, dark/light mode, contact form, and project showcase.",
    tags: ["React", "TypeScript", "CSS Modules", "Vercel"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    ],
    links: { github: "https://github.com", live: "https://example.com" },
    color: "#22d3ee",
    year: "2024",
    status: "completed",
  },
  {
    id: "03",
    title: "AI Task Manager",
    subtitle: "SaaS Dashboard",
    description:
      "Intelligent task management platform with AI-powered prioritization, team collaboration, real-time updates, and analytics.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "OpenAI", "Stripe", "Socket.io"],
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    ],
    links: { github: "https://github.com", demo: "https://example.com" },
    color: "#a78bfa",
    year: "2023",
    status: "completed",
  },
  {
    id: "04",
    title: "CryptoTracker",
    subtitle: "Data Dashboard",
    description:
      "Real-time cryptocurrency tracking with portfolio management, price alerts, candlestick charts, and multi-source news aggregation.",
    tags: ["React", "D3.js", "WebSocket", "CoinGecko API", "Redis"],
    images: [
      "/images/labfetch_dashboard.jpg",
      "/images/labfetch_promo.jpg",
    ],
    links: { github: "https://github.com" },
    color: "#34d399",
    year: "2023",
    status: "archived",
  },
];