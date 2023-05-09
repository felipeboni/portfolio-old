import React from "react";

export const Featured = () => {
  return (
    <section
      id="featured"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 p-16"
    >
      <div className="flex w-full max-w-screen-2xl">
        <article className="w-5/12 pr-48">
          <h1 className="text-[164px] leading-none text-secondary font-display">
            Featured
            <br />
            Work
          </h1>
          {/* <p className="mt-12 text-white xl:max-w-3xl">
            Placeholder text
          </p> */}
        </article>
        <article className="grow">
         
        </article>
      </div>
    </section>
  );
};
