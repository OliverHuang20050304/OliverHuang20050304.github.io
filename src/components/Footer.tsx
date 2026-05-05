import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/90 px-6 py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-stone-500 md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. Next.js & Tailwind.
        </p>
        <p className="text-center text-xs text-stone-400 md:text-right">
          {personalInfo.university} · Information Management
        </p>
      </div>
    </footer>
  );
}
