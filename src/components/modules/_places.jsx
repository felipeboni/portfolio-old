import React from "react";

export const Places = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 bg-primary-50"
    >
      <div className="flex w-full h-full my-24 bg-white max-w-screen-2xl">
        <article className="w-2/3 h-full border-r-2 border-primary-50">
          <div className="flex flex-col p-16">
            <h1 className="leading-none text-[164px] text-primary-500 font-display">
              Places I&#180;ve <br />
              worked
            </h1>
          </div>
        </article>

        <article className="w-5/12 h-full">
          <div className="flex flex-col h-full p-16">
            <div className="h-full p-16 bg-neutral-50">
              <h1 className="text-xl font-semibold">4x4Brasil</h1>
              <h2 className="text-neutral-400">Front End Dev. &amp; UI/UX</h2>

              <span className="block mt-1 text-sm text-neutral-400">2021 January - Present</span>

              <div className="mt-5">
                <h3 className="flex items-center gap-2 text-neutral-600 before:w-2 before:h-2 before:bg-primary-500 before:block">
                  Responsibilities
                </h3>

                <ul className="flex flex-col gap-3 mt-1">
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">1.</span>
                    Designing and implementing user-facing features using web
                    technologies such as React, Vue.js, NextJS, Laravel and
                    Inertia.
                  </li>
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">2.</span>
                    Collaborating with back-end developers to ensure seamless
                    integration of the front-end and back-end systems.
                  </li>
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">3.</span>
                    Optimizing web pages for maximum speed and scalability.
                  </li>
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">4.</span>
                    Participating in code reviews and providing constructive
                    feedback to other team members.
                  </li>
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">5.</span>
                    Designing wireframes, mockups, and prototypes to effectively communicate design concepts and gather feedback.
                  </li>
                  <li className="mt-1 text-sm text-neutral-400">
                    <span className="mr-1 text-neutral-300">6.</span>
                    Creating and maintaining design guidelines and style guides to ensure consistency in the design process.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
