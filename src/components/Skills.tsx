import { skills } from "@/lib/data";

const toolIcons: Record<string, string> = {
  Git: "⎇",
  GitHub: "🐙",
  Notion: "📝",
  Markdown: "📄",
  HackMD: "✍️",
  NumPy: "🔢",
  Pandas: "🐼",
  Gurobi: "⚡",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Toolkit
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Programming Languages */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-6">
                Programming Languages
              </h3>
              <div className="space-y-5">
                {skills.programming.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-6">
                Spoken Languages
              </h3>
              <div className="space-y-4">
                {skills.languages.map((lang) => (
                  <div
                    key={lang.lang}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-white text-sm">{lang.lang}</span>
                    </div>
                    <span className="text-gray-500 text-xs text-right max-w-[180px]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Tools & Platforms */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-6">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
                  >
                    <span className="text-base">{toolIcons[tool] ?? "🔧"}</span>
                    <span className="text-gray-300 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Python Packages */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-6">
                Python Packages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.packages.map((pkg) => (
                  <div
                    key={pkg}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/5 border border-purple-500/15 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
                  >
                    <span className="text-base">{toolIcons[pkg] ?? "📦"}</span>
                    <span className="text-purple-300 text-sm">{pkg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20">
              <h3 className="text-white font-medium mb-2">Core Strengths</h3>
              <ul className="space-y-2">
                {[
                  "Mathematical Programming (MIP / LP)",
                  "Algorithmic Problem Solving",
                  "Data Analysis & Statistical Modeling",
                  "Research & Academic Writing",
                ].map((strength) => (
                  <li key={strength} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
