"use client";

import { motion } from "motion/react"

export default function ContactPage() {
  return (
    <main>
      <div className= "min-h-screen flex justify-center items-center text-white text-2xl">
     <motion.img
  src="/ceylon-leaf.png"
  alt="Falling Leaf"
  initial={{ y: -100, x: 0, rotate: -10, opacity: 0 }}
  animate={{
    y: 600,
    x: [0, 20, -20, 0], // flutter left/right
    rotate: [0, 10, -10, 0], // gentle twist
    opacity: 1,
  }}
  transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  }}
  className="absolute top-0 left-1/2 w-[60px]"
/>
      </div>

    </main>
   
  );
}