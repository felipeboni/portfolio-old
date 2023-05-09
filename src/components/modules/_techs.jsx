import React from "react";

export const Techs = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 p-16 bg-primary-500"
    >
      <div className="w-full max-w-screen-2xl">
        <article className="relative flex flex-col h-full -mb-16">
          <div className="flex flex-col mb-16">
            <h1 className="leading-none text-[164px] text-secondary font-display">
              Over the <br />
              past 5 years...
            </h1>
          </div>

          <div className="w-1/2 pr-5 overflow-hidden hover:overflow-y-scroll after:w-1/2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-14 after:bg-gradient-to-t after:from-primary-500">
            <p className="max-w-xl mb-5 text-white">
              I&apos;ve built products for companies and businesses around the
              globe ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>
            <p className="max-w-xl mb-5 text-white">
              Currently, I work at 4x4Brasil as a UI Designer And Front End
              Developer and Accessibility advocate crafting thoughtful and
              inclusive experiences that adhere to web standards for over a
              million merchants across the world.
            </p>
            <p className="max-w-xl mb-10 text-white">
              Before now, I was a Freelancer Designer where I created visual
              solutions to meet various business or individual needs, such as
              graphics, illustrations, layouts, and user interfaces, for various
              mediums like print, digital, or web. I worked closely with clients
              or project managers to understand their requirements and goals,
              conduct research, create sketches, develop design concepts, and
              produce final designs.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
