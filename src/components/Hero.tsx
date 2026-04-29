"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GitHubIcon } from "@/components/GitHubIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for internships & research
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">{personalInfo.nickname}</span>
        </h1>

        {/* Full name */}
        <p className="text-gray-400 text-lg mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {personalInfo.name}
        </p>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {personalInfo.title} at{" "}
          <span className="text-indigo-300 font-medium">NTU</span>
        </p>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {personalInfo.subtitle}
        </p>

        {/* Bio */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {personalInfo.bio}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3 rounded-full border border-white/10 text-gray-300 hover:border-white/30 hover:text-white font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-full text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-float"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
