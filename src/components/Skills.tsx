import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Toolkit</h2>

      <div className="interests-grid">
        <div className="inline-group">
          <h3>Programming</h3>
          <ul className="inline-list">
            {skills.programming.map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>Tools &amp; platforms</h3>
          <ul className="inline-list">
            {skills.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>AI-Assisted Development</h3>
          <ul className="inline-list">
            {skills.aiTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>Python</h3>
          <ul className="inline-list">
            {skills.packages.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>Languages</h3>
          <ul className="inline-list">
            {skills.languages.map((l) => (
              <li key={l.lang}>
                {l.flag} {l.lang} — {l.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
