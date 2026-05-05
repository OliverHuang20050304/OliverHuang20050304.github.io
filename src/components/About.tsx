import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education } from "@/lib/data";

export default function About() {
  const edu = education[0];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            About
          </p>
          <h2 className="font-display text-3xl font-normal text-stone-900 md:text-4xl">
            Education & background
          </h2>
        </div>

        <div className="grid items-start gap-14 md:grid-cols-2">
          <div className="space-y-5">
            <p className="leading-relaxed text-stone-600">
              I&apos;m a junior student at{" "}
              <span className="text-stone-900">National Taiwan University</span>,
              majoring in Information Management. My academic journey has been
              shaped by a deep curiosity for solving complex optimization problems
              and deriving insights from data.
            </p>
            <p className="leading-relaxed text-stone-600">
              With hands-on experience in{" "}
              <span className="text-stone-800">Operations Research</span>,{" "}
              <span className="text-stone-800">Mathematical Modeling</span>, and{" "}
              <span className="text-stone-800">Data Science</span>, I bridge the
              gap between theoretical rigor and practical engineering solutions.
            </p>
            <p className="leading-relaxed text-stone-600">
              I thrive in collaborative, international environments and am
              passionate about applying algorithmic thinking to real-world
              challenges — from supply chain optimization to human-computer
              interaction research.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { value: "3.98", label: "Junior GPA" },
                { value: "940", label: "TOEIC" },
                { value: "103", label: "TOEFL" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-stone-200 bg-white px-3 py-4 text-center paper-shadow"
                >
                  <div className="font-display text-2xl text-stone-900">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-stone-200 bg-white p-6 paper-shadow">
              <div className="mb-6 flex items-start gap-4">
                <div className="border border-stone-200 bg-stone-50 p-2.5">
                  <GraduationCap
                    size={22}
                    className="text-stone-700"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">{edu.school}</h3>
                  <p className="text-sm text-stone-600">{edu.degree}</p>
                  <p className="mt-1 text-xs text-stone-500">{edu.period}</p>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-2 border border-stone-100 bg-stone-50 px-3 py-2.5">
                <Award
                  size={16}
                  className="shrink-0 text-stone-600"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-stone-800">GPA: {edu.gpa}</p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <BookOpen size={14} className="text-stone-500" strokeWidth={1.5} />
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    Coursework
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="border border-stone-200 bg-stone-50/80 px-2.5 py-1 text-xs text-stone-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-stone-100 pt-5">
                <p className="text-xs leading-relaxed text-stone-600">
                  {edu.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
