import React from "react";
import ProfileImage from "../assets/me.png";

export default function Home() {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 items-center gap-12 px-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8">
            <h2 className="text-lg font-bold">Hi, my name is</h2>
            <h1 className="mt-2 text-6xl font-bold">Jerome Haynes</h1>
            <h3 className="mt-2 text-2xl font-semibold">A Software Engineer</h3>
            <p className="mt-4 text-lg">
              I create visually appealing websites and user-friendly interfaces
              with a strong focus on frontend development. My skills include
              HTML, CSS, JavaScript, and React/Next.js, with experience in
              responsive design and improving user experiences using tools like
              Framer Motion. I am comfortable collaborating with teams to build
              dynamic web applications and have some experience integrating APIs
              and working within the MERN stack. I’m eager to continue growing
              my expertise and contributing to impactful projects.
            </p>
          </div>
          <div className="col-span-4 justify-self-center md:col-span-8 lg:col-span-4">
            <img
              src={ProfileImage}
              alt="Jerome Haynes, Software Engineer"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
