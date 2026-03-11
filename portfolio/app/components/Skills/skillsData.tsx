// components/Skills/skillsData.ts

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { name: "HTML5 / CSS3", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 85 },

  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express.js", category: "Backend", level: 78 },
  { name: "Flask (Python)", category: "Backend", level: 75 },
  { name: "REST APIs", category: "Backend", level: 85 },
  { name: "MongoDB", category: "Backend", level: 70 },
  { name: "MySQL", category: "Backend", level: 68 },

  { name: "Python", category: "Python", level: 88 },
  { name: "Web Scraping", category: "Python", level: 85 },
  { name: "Scientific Libraries", category: "Python", level: 75 },

  { name: "JavaFX", category: "Desktop", level: 65 },

  { name: "Linux / Bash", category: "Tools", level: 80 },
  { name: "Git / GitHub", category: "Tools", level: 88 },
  { name: "Postman", category: "Tools", level: 75 },
];

export const categories = [
  "All",
  "Frontend",
  "Backend",
  "Python",
  "Desktop",
  "Tools",
] as const;

export type Category = (typeof categories)[number];