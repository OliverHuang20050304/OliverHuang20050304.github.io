import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>

      {experience.map((item) => (
        <div key={item.org} className="experience-item">
          <div className="exp-header">
            <span className="exp-date">{item.period}</span>
            <h3>{item.org}</h3>
          </div>
          <p className="exp-org">
            {item.role} · {item.location}
          </p>
          {item.bullets.length > 0 && (
            <ul className="exp-details">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
