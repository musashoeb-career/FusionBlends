"use client";

import { motion } from "motion/react"

export default function ContactPage() {
  return (
    <main>
      <div className= "min-h-screen flex justify-center items-center text-white text-2xl">
       <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10
                  }}
        >
    <p>This feels like it's falling onto the page!</p>
</motion.div>
      </div>

    </main>
   
  );
}