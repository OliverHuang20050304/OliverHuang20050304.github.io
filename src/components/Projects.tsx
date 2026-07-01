import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Selected work</h2>

      {projects.map((project) => (
        <div key={project.id} className="experience-item">
          <div className="exp-header">
            <span className="exp-date">
              {project.period} · {project.status}
            </span>
            <h3>
              {project.icon} {project.title}
            </h3>
          </div>
          <p className="exp-org">{project.subtitle}</p>

          <ul className="exp-details">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <div className="inline-group">
            <ul className="inline-list">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {(project.github || project.demo) && (
            <p className="links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.github && project.demo && "  ·  "}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
