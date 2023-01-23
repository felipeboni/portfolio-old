import React from "react";
import Link from "next/link";

import { motion } from "framer-motion"

export const Dropdown = () => {
    return (
        <motion.div
            className="absolute p-5 bg-white right-6 top-8 w-96 h-96"
            initial={{ opacity: 0.5, scale: 0.2,  x: 120, y: -120 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.2,  x: 120, y: -120 }}
            transition={{ ease: "easeOut" }}
        >
            <ul>
                <li>
                    <Link href="#"></Link>
                </li>
            </ul>
        </motion.div>
    )
}