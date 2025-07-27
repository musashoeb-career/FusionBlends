"use client";

import { motion } from "motion/react"
import Image from "next/image";
import {positionJuiceImages} from '../data/home/juices'
import {positionSpiceImages} from '../data/home/spices'

export default function HomePage() {


  return (
    <main>
      <div className= "relative min-h-screen flex justify-center items-center text-white text-2xl">
    
      {
        positionSpiceImages.map(({image, top, left, width, yTransform, xTransform, isBlur, rotate}, index) => (
        <motion.img
          key={index}
          style={{position: "absolute" , top: top, left: left, width: width, filter: isBlur? "blur(3px)" : "none"}}
          src={image.src}
          alt={image.alt}
          animate = {{y: yTransform, x: xTransform, rotate: rotate}}
          transition={{delay: 0.2, duration: 3}}
          
        />))
      }
      {
        positionJuiceImages.map(({image, top, left, width, yTransform}, index) => (
        <motion.img
        key={index}
        style={{position: "absolute" , top: top, left: left, width: width}}
        src={image.src}
        alt= {image.alt}
        animate = {{y: yTransform}}
        transition={{duration: 0.8}}
        />
       ))
      }
      </div>
      
    </main>
   
  );
}


