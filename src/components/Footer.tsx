"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}.{" "}
        <a
          href="#"
          className="party-link"
          onClick={(e) => {
            e.preventDefault();
            document.body.classList.toggle("party");
          }}
        >
          party?
        </a>
      </p>
    </footer>
  );
}
