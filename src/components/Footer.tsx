import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="text-gray-700 text-xs">
          {personalInfo.university} · Information Management
        </p>
      </div>
    </footer>
  );
}
