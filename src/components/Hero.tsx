"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GitHubIcon } from "@/components/GitHubIcon";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
          Open to internships & research
        </p>

        <h1 className="font-display mb-3 text-4xl font-normal tracking-tight text-stone-900 md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-stone-800">{personalInfo.nickname}</span>
        </h1>

        <p className="mb-2 text-stone-600">{personalInfo.name}</p>

        <p className="mb-6 text-lg font-light text-stone-700 md:text-xl">
          {personalInfo.title} at{" "}
          <span className="font-normal text-stone-900">NTU</span>
        </p>

        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-stone-500">
          {personalInfo.subtitle}
        </p>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-stone-600">
          {personalInfo.bio}
        </p>

        <div className="mb-10 flex items-center justify-center gap-2 text-sm text-stone-500">
          <MapPin size={14} strokeWidth={1.5} />
          <span>{personalInfo.location}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="border border-stone-800 bg-stone-900 px-6 py-2.5 text-sm text-[#f6f3ec] transition-colors hover:bg-stone-800"
          >
            Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 border border-stone-300 bg-white/50 px-6 py-2.5 text-sm text-stone-800 transition-colors hover:border-stone-400"
          >
            <Mail size={16} strokeWidth={1.5} />
            Email
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 transition-colors hover:text-stone-900"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-stone-500 transition-colors hover:text-stone-900"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 transition-colors hover:text-stone-600"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </a>
    </section>
  );
}
