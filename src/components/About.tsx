import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education } from "@/lib/data";

export default function About() {
  const edu = education[0];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education & Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Intro */}
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a junior student at{" "}
              <span className="text-indigo-300 font-medium">
                National Taiwan University
              </span>
              , majoring in Information Management. My academic journey has been
              shaped by a deep curiosity for solving complex optimization problems
              and deriving insights from data.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With hands-on experience in{" "}
              <span className="text-purple-300">Operations Research</span>,{" "}
              <span className="text-purple-300">Mathematical Modeling</span>, and{" "}
              <span className="text-purple-300">Data Science</span>, I bridge the
              gap between theoretical rigor and practical engineering solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I thrive in collaborative, international environments and am
              passionate about applying algorithmic thinking to real-world
              challenges — from supply chain optimization to human-computer
              interaction research.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "3.98", label: "Junior GPA" },
                { value: "940", label: "TOEIC Score" },
                { value: "103", label: "TOEFL Score" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education Card */}
          <div className="relative">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-purple-950/30 border border-indigo-500/20 glow-border">
              {/* University Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <GraduationCap size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {edu.school}
                  </h3>
                  <p className="text-indigo-300 text-sm">{edu.degree}</p>
                  <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="flex items-center gap-2 mb-5 p-3 rounded-lg bg-green-500/5 border border-green-500/15">
                <Award size={16} className="text-green-400 flex-shrink-0" />
                <p className="text-green-300 text-sm font-medium">
                  GPA: {edu.gpa}
                </p>
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-gray-500" />
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    Relevant Coursework
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight */}
              <div className="mt-5 pt-5 border-t border-white/5">
                <p className="text-xs text-yellow-400/80">
                  ⭐ {edu.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
