import React from "react";
import Link from "next/link";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import { motion } from "framer-motion";

export const Dropdown = () => {
  return (
    <motion.nav
      className="absolute p-5 bg-white shadow-[0_15px_80px_15px_rgba(0,0,0,0.1)] right-16 top-9 w-full max-w-[25em] pt-32 pb-16 px-16"
      initial={{ opacity: 0.5, scale: 0.2, x: 130, y: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.2, x: 130, y: -100 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <ul className="flex flex-col gap-5 mb-10">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link className="text-xl text-primary-500" href="#">
            Resume
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link className="text-xl text-primary-500" href="#">
            Resume
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link className="text-xl text-primary-500" href="#">
            Resume
          </Link>
        </motion.li>
      </ul>

      <motion.span
        className="tracking-widest uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Contact-me
      </motion.span>

      <ul className="flex flex-row gap-5 mt-5">
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link className="block p-2 text-xl text-primary-500" href="#">
            <FiGithub />
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link className="block p-2 text-xl text-primary-500" href="#">
            <FiLinkedin />
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};
