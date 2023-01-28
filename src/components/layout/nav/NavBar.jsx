import React, { useState } from "react";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import { Dropdown } from "./Dropdown";

const NavBar = ({ sliderProps }) => {
  const [openNav, setOpenNav] = useState(false);

  const { slidesToInvert, activeSlider } = sliderProps;

  return (
    <header className="w-full flex z-50 max-h-[12rem] items-center bg-transparent justify-between h-[11.12em] fixed px-24">
      <Link
        href="/"
        className="flex w-[8.34em] h-[3.195em] relative flex-col transition-colors text-secondary font-display text-4xl justify-center"
      >
        boni
      </Link>
      {slidesToInvert.includes(activeSlider) ? (
        <button
          onClick={() => setOpenNav(!openNav)}
          className={`${
            openNav && "active"
          } w-[6em] z-50 h-10 before:w-[3em] before:h-0.5 before:right-0 before:absolute before:top-3 after:w-[1.5em] after:h-0.5 after:absolute after:right-0 after:bottom-2 after:transition-all after:delay-500 before:transition-all before:delay-500 before:duration-200 after:duration-200 relative before:bg-secondary after:bg-secondary`}
        ></button>
      ) : (
        <button
          onClick={() => setOpenNav(!openNav)}
          className={`${
            openNav && "active"
          } w-[6em] z-50 h-10 before:w-[3em] before:h-0.5 before:right-0 before:absolute before:top-3 after:w-[1.5em] after:h-0.5 after:absolute after:right-0 after:bottom-2 after:transition-all after:delay-500 before:transition-all before:delay-500 before:duration-200 after:duration-200 relative before:bg-primary-500 after:bg-primary-500`}
        ></button>
      )}

      <AnimatePresence>{openNav && <Dropdown />}</AnimatePresence>
    </header>
  );
};

export default NavBar;
