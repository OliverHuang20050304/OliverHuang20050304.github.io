import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Skills
          </p>
          <h2 className="font-display text-3xl font-normal text-stone-900 md:text-4xl">
            Toolkit
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-10">
            <div className="border border-stone-200 bg-white p-6 paper-shadow">
              <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-stone-500">
                Programming
              </h3>
              <div className="space-y-5">
                {skills.programming.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-stone-900">{skill.name}</span>
                      <span className="text-xs text-stone-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-stone-100">
                      <div
                        className="h-full rounded-full bg-stone-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-stone-200 bg-white p-6 paper-shadow">
              <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-stone-500">
                Languages
              </h3>
              <div className="space-y-4">
                {skills.languages.map((lang) => (
                  <div
                    key={lang.lang}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg" aria-hidden>
                        {lang.flag}
                      </span>
                      <span className="text-sm text-stone-900">{lang.lang}</span>
                    </div>
                    <span className="max-w-[200px] text-right text-xs text-stone-600">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="border border-stone-200 bg-white p-6 paper-shadow">
              <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-stone-500">
                Tools & platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-stone-200 bg-stone-50/80 px-3 py-2 text-sm text-stone-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-stone-200 bg-white p-6 paper-shadow">
              <h3 className="mb-6 text-xs font-medium uppercase tracking-wider text-stone-500">
                Python
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.packages.map((pkg) => (
                  <span
                    key={pkg}
                    className="border border-stone-200 bg-stone-50/80 px-3 py-2 text-sm text-stone-700"
                  >
                    {pkg}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-stone-200 bg-[#faf8f4] p-6">
              <h3 className="mb-4 font-medium text-stone-900">Strengths</h3>
              <ul className="space-y-2">
                {[
                  "Mathematical Programming (MIP / LP)",
                  "Algorithmic Problem Solving",
                  "Data Analysis & Statistical Modeling",
                  "Research & Academic Writing",
                ].map((strength) => (
                  <li
                    key={strength}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400" />
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
