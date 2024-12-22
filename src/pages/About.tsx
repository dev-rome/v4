import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 items-center gap-12 px-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h2 className="text-xl font-bold">ABOUT</h2>
            <span className="-mt-2 block h-1 w-20 bg-accent-light dark:bg-accent-dark"></span>
            <p className="mt-5">
              My journey into the world of web development began in 2018 when I
              completed my first Codecademy course, "Programming with Python."
              This initial foray into programming sparked a profound curiosity
              and ignited a passion for creating and problem-solving through
              technology. That single step opened the door to endless
              possibilities and set me on a path of continuous learning and
              growth in the ever-evolving tech landscape.
            </p>
            <br />
            <p>
              Since then, I have invested in my development by completing
              several industry-recognized courses to strengthen my skill set. I
              earned a certification from Udacity's "Intro to Programming
              Nanodegree," which provided a strong foundational understanding of
              essential programming concepts. Additionally, I completed three
              comprehensive courses on Udemy: "The Web Developer Bootcamp,"
              which covered the fundamentals of building robust web
              applications; "Build Responsive Real-World Websites with HTML and
              CSS," where I honed my front-end design and development skills;
              and "Modern React with Redux," which deepened my knowledge of
              modern JavaScript frameworks and state management. These
              experiences not only solidified my technical expertise but also
              fueled my ambition to contribute to projects that make a positive
              impact on communities.
            </p>
            <br />
            <p>
              Two years ago, I proudly graduated from General Assembly's
              part-time Software Engineering Immersive course. This intensive
              program allowed me to refine my skills in both frontend and
              backend development, working on real-world projects and
              collaborating with peers to solve complex challenges. General
              Assembly equipped me with a deep understanding of software
              engineering principles and the ability to adapt to new tools and
              frameworks with confidence. While I’ve come a long way since then,
              my dedication to learning and staying current with industry best
              practices remains steadfast.
            </p>
            <br />
            <p>
              Outside of coding and freelancing, I embrace my passions and
              hobbies that keep me balanced and inspired. As a gamer, I stream
              on Twitch, playing titles such as Valorant and Marvel Rivals,
              connecting with a vibrant community of like-minded individuals.
              When I’m not gaming, I enjoy immersing myself in basketball, a
              sport that fosters teamwork and perseverance. I also spend time
              reading and staying active through regular workouts, which help me
              maintain a healthy and focused mindset.
            </p>
            <br />
            <p>
              Looking to the future, I envision myself as a frontend engineer
              who not only delivers exceptional user experiences to help clients
              achieve their goals but also creates intuitive, accessible, and
              visually engaging products that bring lasting value to
              communities. My journey has been driven by an insatiable
              curiosity, a commitment to growth, and a passion for using
              technology to connect people and make a meaningful impact.
            </p>

            <div className="mt-8 rounded-lg bg-dark p-8 dark:bg-light">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <span className="text-5xl text-light dark:text-dark">01</span>
                  <h3 className="text-3xl text-light dark:text-dark">
                    Make It
                  </h3>
                  <p className="text-light dark:text-dark">
                    I focus on bringing designs to life directly in the browser,
                    creating interactive and responsive experiences that teams
                    and clients can rally around. While design tools provide a
                    great starting point, the true value lies in transforming
                    ideas into tangible, functional links that showcase the
                    potential of a project in real-time.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-5xl text-light dark:text-dark">02</span>
                  <h3 className="text-3xl text-light dark:text-dark">
                    Collaborate
                  </h3>
                  <p className="text-light dark:text-dark">
                    Collaboration is at the heart of every successful project. I
                    work closely with teams and clients to bring ideas to life,
                    ensuring clear communication and alignment throughout the
                    process. I focus on creating functional solutions that align
                    with a shared vision. This approach fosters better feedback,
                    quicker iterations, and results that truly resonate with
                    everyone involved.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-5xl text-light dark:text-dark">03</span>
                  <h3 className="text-3xl text-light dark:text-dark">
                    Accessible
                  </h3>
                  <p className="text-light dark:text-dark">
                    I prioritize building inclusive and user-friendly
                    experiences that cater to people of all abilities. By
                    following accessibility standards and best practices, I
                    ensure solutions are meaningful, equitable, and easy to use
                    for everyone.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-5xl text-light dark:text-dark">04</span>
                  <h3 className="text-3xl text-light dark:text-dark">
                    Keep learning
                  </h3>
                  <p className="text-light dark:text-dark">
                    I believe continuous learning is key to staying ahead in a
                    constantly evolving industry. Whether it's exploring new
                    technologies, refining existing skills, or adopting
                    innovative practices, I stay curious and committed to
                    growth. This dedication ensures I can consistently deliver
                    the best solutions and adapt to new challenges effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
