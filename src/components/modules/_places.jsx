import React from "react";

export const Places = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 bg-primary-50"
    >
      <div className="w-full h-full my-24 bg-white max-w-screen-2xl">
        <article className="w-2/3 h-full border-r-2 border-primary-50">
          <div className="flex flex-col p-16">
            <h1 className="leading-none text-[164px] text-primary-500 font-display">
            Places I&#180;ve <br/>
            worked
            </h1>
          </div>
        </article>
      </div>
    </section>
  );
};
