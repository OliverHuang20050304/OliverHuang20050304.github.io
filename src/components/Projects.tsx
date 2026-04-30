import { CheckCircle, Clock, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const statusStyles: Record<string, string> = {
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
};

const StatusIcon = ({ status }: { status: string }) =>
  status === "Completed" ? (
    <CheckCircle size={14} className="text-green-400" />
  ) : (
    <Clock size={14} className="text-yellow-400" />
  );

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      {/* Background accent */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-500 max-w-xl">
            Focusing on optimization, data-driven systems, and interdisciplinary
            research.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-white font-semibold text-xl">
                        {project.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${statusStyles[project.statusColor]}`}
                      >
                        <StatusIcon status={project.status} />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-indigo-300 text-sm">{project.subtitle}</p>
                    <p className="text-gray-600 text-xs mt-1">{project.period}</p>
                  </div>
                </div>
                <span className="text-gray-700 text-sm font-mono">
                  0{index + 1}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tags + Links */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/15 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={13} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Hover line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
