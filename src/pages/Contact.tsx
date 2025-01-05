import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-bold">CONTACT</h2>
        <span className="-mt-2 block h-1 w-[110px] bg-accent-light dark:bg-accent-dark"></span>
        <p className="mt-5">
          Feel free to reach out to me via email or LinkedIn, or check out my
          projects on GitHub:
        </p>
        <div className="mt-8 flex space-x-6">
          <a href="mailto:info.devrome@gmail.con">
            <FaEnvelope className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/jerome-haynes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/dev-rome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
