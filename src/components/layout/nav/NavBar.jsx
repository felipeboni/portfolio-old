import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="">
      <Link href="/" className="logo">
        boni
      </Link>
      <button className="w-[6em] h-10 relative before:w-[6em] before:h-0.5 before:right-0  before:absolute before:top-3 before:bg-primary-900 after:w-[6em] after:h-0.5 after:absolute after:right-0 after:bg-primary-900 after:bottom-2"></button>
    </header>
  );
};

export default NavBar;
