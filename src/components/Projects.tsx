import { CheckCircle, Clock, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const statusStyles: Record<string, string> = {
  green:
    "border-stone-200 bg-stone-50 text-stone-700",
  yellow:
    "border-amber-200/80 bg-amber-50/80 text-amber-900",
};

const StatusIcon = ({ status }: { status: string }) =>
  status === "Completed" ? (
    <CheckCircle size={14} className="text-stone-600" strokeWidth={1.5} />
  ) : (
    <Clock size={14} className="text-amber-700" strokeWidth={1.5} />
  );

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Projects
          </p>
          <h2 className="font-display mb-3 text-3xl font-normal text-stone-900 md:text-4xl">
            Selected work
          </h2>
          <p className="max-w-lg text-stone-600">
            Optimization, data-driven systems, and interdisciplinary research.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="border border-stone-200 bg-white p-8 paper-shadow transition-colors hover:border-stone-300"
            >
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl" aria-hidden>
                    {project.icon}
                  </span>
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-medium text-stone-900">
                        {project.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-xs ${statusStyles[project.statusColor]}`}
                      >
                        <StatusIcon status={project.status} />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600">{project.subtitle}</p>
                    <p className="mt-1 text-xs text-stone-500">{project.period}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-stone-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-stone-600">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-stone-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-stone-600 underline-offset-4 transition-colors hover:text-stone-900 hover:underline"
                      >
                        <ExternalLink size={13} strokeWidth={1.5} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-stone-300 px-3 py-1.5 text-xs text-stone-800 transition-colors hover:border-stone-400"
                      >
                        <ExternalLink size={13} strokeWidth={1.5} />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
