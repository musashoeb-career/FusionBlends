"use client";

import { easeOut, motion } from "motion/react";
import {positionPlantImages, positionStampImages, positionJuicePostCardImages} from "../../data/about/postcard"
import PostCard from "@/components/postcard";
 
export default function AboutPage() {
  return (
    <main>
      <div className="relative min-h-screen flex justify-center items-center text-black text-lg">
         {
                  positionPlantImages.map(({image, top, left, width, yTransform, xTransform, delay, duration, rotate}, index) => (
                  <motion.img
                  key={index}
                  style={{position: "absolute" , top: top, left: left, width: width, zIndex:2}}
                  src={image.src}
                  alt= {image.alt}
                  initial = {{opacity: 0}}
                  animate = {{y: yTransform, x: xTransform, rotate: rotate, opacity: 1}}
                  transition={{duration: duration, delay: delay}}
                  />
                 ))
                }
          
           {
                  positionStampImages.map(({image, top, left, width, rotate, yTransform, duration, delay}, index) => (
                  <motion.img
                  key={index}
                  style={{position: "absolute" , top: top, left: left, width: width, zIndex: 1}}
                  src={image.src}
                  alt= {image.alt}
                  initial = {{opacity: 0}}
                  animate = {{ y: yTransform, rotate: rotate, opacity: 1}}
                  transition={{duration: duration, ease: easeOut, delay: delay}}
                  />
                 ))
                }

        <motion.img
          src = "./fusion-blends-ceo.jpg"
          alt = "Headshot of Fusion Blends CEO"
          style = {{position: "absolute", top: 500, left: 380, width: 350, zIndex: 1}}
          initial ={{opacity: 0}}
          animate = {{x:-80, y:-50, rotate: 3, opacity: 1}}
          transition={{delay: 1, duration: 1}}></motion.img>

        
        {
                  positionJuicePostCardImages.map(({image, top, left, width, yTransform, delay, duration, rotate}, index) => (
                  <motion.img
                  key={index}
                  style={{position: "absolute" , top: top, left: left, width: width, zIndex:1}}
                  src={image.src}
                  alt= {image.alt}
                  initial = {{opacity: 0}}
                  animate = {{y: yTransform, rotate: rotate, opacity: 1}}
                  transition={{duration: duration, delay: delay}}
                  />
                 ))
                }
       
        {/* Section 1: Beginnings */}
         <PostCard
        top={25}
        left={80}
        title="Beginnings"
        body="In the heart of Farmington Hills, Michigan, we discovered our passion for crafting unique
         drinks inspired by our Sri Lankan heritage. Combining the vibrant flavors of our family's traditions with fresh, 
         locally-sourced ingredients from Michigan, we began experimenting with tropical fruits, fragrant spices, and rich, creamy bases."
        signature=""
        xTrans={-10}
        yTrans={5}
        rotate={-3}
      />

        {/* Section 2: Craft */}
        <PostCard
        top={45}
        left={650}
        title="Craft"
        body="What started as a hobby quickly turned into a mission: to share the bold, exotic flavors of Sri Lanka
         while supporting local farmers and suppliers. Fusion Blends offers authentic, delicious beverages that blend the best
        of both worlds-traditional Sri Lankan recipes with fresh, Michigan-grown ingredients. We hope you enjoy these drinks as much as we do!  "
        signature="~Abed Imam, Co-Founder and CEO"
        xTrans={45}
        yTrans={10}
        rotate={1}
      />

      </div>
    </main>
  );
}
