import React from "react";
import CorePrinciple from "../components/CorePrinciple";
import corePrinciplesData from "../data/corePrinciplesData";

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
                {corePrinciplesData.map(({ number, title, description }) => (
                  <CorePrinciple
                    key={number}
                    number={number}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
