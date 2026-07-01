import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Yuan-Hsiang (Oliver) Huang",
  description: "Notes on optimization, data science, and building things.",
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <section>
      <h1>Blog</h1>
      <p className="subtitle">
        Notes on optimization, data science, and building things.
      </p>

      {posts.length === 0 ? (
        <p className="bio-text">No posts yet — check back soon.</p>
      ) : (
        <div className="post-list">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-item">
              <span className="exp-date">{formatDate(p.date)}</span>
              <span className="post-title">{p.title}</span>
              {p.description && (
                <span className="post-desc">{p.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
