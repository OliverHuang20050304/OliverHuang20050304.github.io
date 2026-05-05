import { Mail, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GitHubIcon } from "@/components/GitHubIcon";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/oliver20050304",
    href: personalInfo.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Contact
            </p>
            <h2 className="font-display mb-6 text-3xl font-normal text-stone-900 md:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="mb-4 leading-relaxed text-stone-600">
              I&apos;m open to internship opportunities, research collaborations,
              and conversations about optimization, data science, or related work.
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              Questions, project ideas, or a quick hello — I&apos;ll reply when I
              can.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-8 inline-flex items-center gap-2 border border-stone-800 bg-stone-900 px-6 py-2.5 text-sm text-[#f6f3ec] transition-colors hover:bg-stone-800"
            >
              Say hello
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          <div className="space-y-3">
            {links.map(({ icon: Icon, label, value, href }) => {
              const row = (
                <div className="flex items-center gap-4 border border-stone-200 bg-white p-4 paper-shadow transition-colors hover:border-stone-300">
                  <div className="border border-stone-200 bg-stone-50 p-2.5">
                    <Icon size={20} className="text-stone-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-stone-500">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-stone-900">
                      {value}
                    </p>
                  </div>
                  {href && (
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-stone-400"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {row}
                </a>
              ) : (
                <div key={label}>{row}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
