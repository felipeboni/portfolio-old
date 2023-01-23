import React from "react";

export const Techs = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 bg-primary-500"
    >
      <div className="w-full max-w-screen-2xl">
        <article className="relative -mb-16">
          <div className="flex flex-col">
            <h1 className="leading-none text-[164px] text-secondary font-display">
              Over the <br />
              past 5 years...
            </h1>
            <p className="max-w-xl mt-16 mb-5 text-white">
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>
            <p className="max-w-xl mb-5 text-white">
              Currently, I work at Shopify as a Senior UX Developer
              and Accessibility advocate crafting thoughtful and inclusive
              experiences that adhere to web standards for over a million
              merchants across the world.
            </p>
            <p className="max-w-xl text-white">
              Before now, I was Principal Frontend
              Engineer at hellotax, where I worked on a suite of tools and
              services tailored at providing fast, automated VAT Registration /
              filings & Returns solutions for multi-channel sellers across
              Europe.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
