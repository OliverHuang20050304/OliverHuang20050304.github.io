import { education } from "@/lib/data";

export default function About() {
  const edu = education[0];

  return (
    <section id="education">
      <h2 className="section-title">Education</h2>

      <div className="experience-item">
        <div className="exp-header">
          <span className="exp-date">{edu.period}</span>
          <h3>{edu.school}</h3>
        </div>
        <p className="exp-org">
          {edu.degree} · {edu.location}
        </p>
        <ul className="exp-details">
          <li>GPA: {edu.gpa}</li>
          <li>{edu.highlight}</li>
        </ul>

        <div className="inline-group">
          <h3>Coursework</h3>
          <ul className="inline-list">
            {edu.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
