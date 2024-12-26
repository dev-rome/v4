import React from "react";

interface AboutFeatureProps {
  number: string;
  title: string;
  description: string;
}

const AboutFeature: React.FC<AboutFeatureProps> = ({ number, title, description }) => (
  <div className="flex flex-col gap-3">
    <span className="text-5xl text-light dark:text-dark">{number}</span>
    <h3 className="text-3xl text-light dark:text-dark">{title}</h3>
    <p className="text-light dark:text-dark">{description}</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 items-center gap-12 px-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h2 className="text-xl font-bold">ABOUT</h2>
            <span className="-mt-2 block h-1 w-20 bg-accent-light dark:bg-accent-dark"></span>
            <p className="mt-5">
              My web development journey began in 2018 with Codecademy’s
              "Programming with Python," sparking a passion for technology and
              problem-solving. Since then, I’ve earned certifications like
              Udacity’s "Intro to Programming Nanodegree" and Udemy courses,
              building strong frontend and backend skills.
            </p>
            <br />
            <p>
              I graduated from General Assembly's Software Engineering
              Immersive, where I gained hands-on experience creating real-world
              solutions and adapting to new tools.
            </p>
            <br />
            <p>
              Outside of coding, I stream games like Valorant on Twitch, play
              basketball, and stay active to maintain balance. I aim to be a
              frontend engineer, crafting accessible and impactful user
              experiences that bring value to communities.
            </p>

            <div className="mt-8 rounded-lg bg-dark p-8 dark:bg-light">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <AboutFeature
                  number="01"
                  title="Make It"
                  description="I focus on bringing designs to life directly in the browser,
                    creating interactive and responsive experiences that teams
                    and clients can rally around. While design tools provide a
                    great starting point, the true value lies in transforming
                    ideas into tangible, functional links that showcase the
                    potential of a project in real-time."
                />
                <AboutFeature
                  number="02"
                  title="Collaborate"
                  description="Collaboration is at the heart of every successful project. I
                    work closely with teams and clients to bring ideas to life,
                    ensuring clear communication and alignment throughout the
                    process. I focus on creating functional solutions that align
                    with a shared vision. This approach fosters better feedback,
                    quicker iterations, and results that truly resonate with
                    everyone involved."
                />
                <AboutFeature
                  number="03"
                  title="Accessible"
                  description="I prioritize building inclusive and user-friendly
                    experiences that cater to people of all abilities. By
                    following accessibility standards and best practices, I
                    ensure solutions are meaningful, equitable, and easy to use
                    for everyone."
                />
                <AboutFeature
                  number="04"
                  title="Keep learning"
                  description="I believe continuous learning is key to staying ahead in a
                    constantly evolving industry. Whether it's exploring new
                    technologies, refining existing skills, or adopting
                    innovative practices, I stay curious and committed to
                    growth. This dedication ensures I can consistently deliver
                    the best solutions and adapt to new challenges effectively."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
