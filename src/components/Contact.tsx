import { Mail, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GitHubIcon } from "@/components/GitHubIcon";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
    textColor: "text-indigo-300",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/oliver20050304",
    href: personalInfo.github,
    color: "from-gray-500/10 to-gray-600/10",
    border: "border-white/10",
    textColor: "text-gray-300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "from-rose-500/10 to-orange-500/10",
    border: "border-rose-500/10",
    textColor: "text-rose-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m currently open to internship opportunities, research
              collaborations, and interesting conversations about optimization,
              data science, or anything in between.
            </p>
            <p className="text-gray-500 text-sm">
              Whether you have a question, a project idea, or just want to say
              hi — feel free to reach out. I&apos;ll do my best to get back to you
              promptly!
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Say Hello
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: Contact Cards */}
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, value, href, color, border, textColor }) => {
              const content = (
                <div
                  className={`flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br ${color} border ${border} hover:scale-[1.02] transition-transform duration-200 ${href ? "cursor-pointer" : ""}`}
                >
                  <div className="p-3 rounded-xl bg-white/5">
                    <Icon size={20} className={textColor} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className={`text-sm font-medium ${textColor}`}>{value}</p>
                  </div>
                  {href && (
                    <ArrowRight size={14} className="ml-auto text-gray-600" />
                  )}
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
