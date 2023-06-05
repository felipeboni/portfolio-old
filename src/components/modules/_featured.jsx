import React, { useState } from "react";
import Carousel from "./carousel";

export const Featured = () => {
  return (
    <section
      id="featured"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-16 p-16"
    >
      <div className="flex w-full max-w-screen-2xl align-start">
        <article className="w-4/12 pr-48">
          <h1 className="text-[164px] leading-none text-secondary font-display">
            Featured
            <br />
            Work
          </h1>
        </article>
        <article className="scale-90 grow">
          <Carousel>
            <div className="bg-white relative aspect-video bg-cover bg-[url('/techwave.png')] group">
              <a
                className="absolute flex items-center justify-center w-10 h-10 text-xl text-white transition-all opacity-0 hover:shadow-lg hover:shadow-primary-900/20 hover:top-3 top-4 right-4 group-hover:opacity-100 bg-primary-500"
                href="https://techwave-chi.vercel.app/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
            
            <div className="bg-white relative aspect-video bg-cover bg-[url('/baza.png')] group">
              <a
                className="absolute flex items-center justify-center w-10 h-10 text-xl text-white transition-all opacity-0 hover:shadow-lg hover:shadow-primary-900/20 hover:top-3 top-4 right-4 group-hover:opacity-100 bg-primary-500"
                href="https://baza-murex.vercel.app/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
            
            <div className="bg-white relative aspect-video bg-cover bg-[url('/ecoleta.png')] group">
              <a
                className="absolute flex items-center justify-center w-10 h-10 text-xl text-white transition-all opacity-0 hover:shadow-lg hover:shadow-primary-900/20 hover:top-3 top-4 right-4 group-hover:opacity-100 bg-primary-500"
                href="https://ecoleta-front-end.vercel.app/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>

          </Carousel>
        </article>
      </div>
    </section>
  );
};
