import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Posts live as Markdown files in content/blog/*.md with a small frontmatter
// block. Everything here runs at build time (static export), so fs is fine.

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  html: string;
};

function parse(file: string): Omit<Post, "slug"> {
  const raw = fs.readFileSync(file, "utf8");
  const meta: Record<string, string> = {};
  let body = raw;

  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (fm) {
    body = fm[2];
    for (const line of fm[1].split("\n")) {
      const i = line.indexOf(":");
      if (i === -1) continue;
      meta[line.slice(0, i).trim()] = line
        .slice(i + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
    }
  }

  return {
    title: meta.title ?? "Untitled",
    date: meta.date ?? "",
    description: meta.description ?? "",
    html: marked.parse(body) as string,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    // Skip files starting with "_" — templates and drafts.
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => ({ slug: f.replace(/\.md$/, ""), ...parse(path.join(BLOG_DIR, f)) }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
