import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="bio-text">
        Open to internship opportunities, research collaborations, and
        conversations about optimization, data science, or related work. Reach
        me at{" "}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
      </p>
      <p className="links">
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
