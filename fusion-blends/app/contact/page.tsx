"use client";


import { motion } from "motion/react"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex justify-center items-center text-white text-2xl" >
        <motion.div
            initial = {{y:-200, opacity: 0}}
            animate = {{y: 100, opacity: 1}}
            transition = {{ duration: 4, type: 'spring', stiffness: 300, damping: 20}}
            >
          Contact Page Coming Soon!
        </motion.div>
    </main>
   
  );
}