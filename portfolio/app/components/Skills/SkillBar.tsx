// components/Skills/SkillBar.tsx
import { Skill } from "./skillsData";
import { categoryColors } from "./skillsColors";

interface Props {
  skill: Skill;
  animate: boolean;
}

export default function SkillBar({ skill, animate }: Props) {
  const colors = categoryColors[skill.category];
  if (!colors) return null;

  return (
    <div
      className="transition-colors duration-300"
      style={{
        background: "var(--skill-card-bg)",
        border: "1.5px solid var(--skill-card-border)",
        borderRadius: "12px",
        padding: "clamp(14px, 3vw, 18px) clamp(14px, 3vw, 20px)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 8px 28px ${colors.glow}`;
        e.currentTarget.style.borderColor = colors.badge + "88";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--skill-card-border)";
      }}
    >
      {/* Header Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        gap: "8px",
      }}>
        {/* Skill name */}
        <span style={{
          fontWeight: 600,
          fontSize: "clamp(13px, 2vw, 14px)",
          color: "var(--text-primary)",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {skill.name}
        </span>

        {/* Badge + percent */}
        <div style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
          {/* Category badge — background tinted with the category color */}
          <span style={{
            fontSize: "10px",
            padding: "2px 8px",
            borderRadius: "20px",
            background: colors.badge + "18",
            color: colors.badge,
            border: `1px solid ${colors.badge}50`,
            fontWeight: 700,
            letterSpacing: "0.03em",
          }}>
            {skill.category}
          </span>

          {/* Percent */}
          <span style={{
            fontSize: "12px",
            color: colors.badge,
            fontWeight: 700,
            fontFamily: "'DM Mono', monospace",
          }}>
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div style={{
        background: "var(--skill-track-bg)",
        borderRadius: "999px",
        height: "6px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          borderRadius: "999px",
          width: animate ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, ${colors.badge}, ${colors.bar})`,
          boxShadow: `0 0 8px ${colors.glow}`,
          transition: animate ? "width 1.1s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }} />
      </div>
    </div>
  );
}