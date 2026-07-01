import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top">
      <h1>{personalInfo.name}</h1>
      <p className="subtitle">
        {personalInfo.title} · {personalInfo.university}
      </p>

      <p className="bio-text">{personalInfo.bio}</p>

      <p className="callout">Open to internships &amp; research collaborations.</p>

      <p className="links">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        {"  ·  "}
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {"  ·  "}
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {"  ·  "}
        {personalInfo.location}
      </p>
    </section>
  );
}
