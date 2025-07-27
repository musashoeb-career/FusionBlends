"use client";

import { motion } from "motion/react";
import {positionPlantImages, positionStampImages} from "../../data/about/postcard"
 
export default function AboutPage() {
  return (
    <main>
      <div className="relative min-h-screen flex justify-center items-center text-black text-lg">

        {/* Section 1: Beginnings */}
        <div className="transform rotate-[-3deg] drop-shadow-md absolute top-10 left-15 flex flex-row justify-center w-140 p-[15px] rounded-md bg-[var(--ivory)]">
          <div className="flex flex-col">
            <div className="subheading flex justify-center w-full text-3xl mt-[3px] mb-[2px]">
              Beginnings
            </div>
            <div className="flex content-end">
              <div className="flex-1"> </div>
              <div className="border-l-[1px] border-l-black h-[300px] m-[5px]"></div>
              <p className="flex-2 text-[17px] text-start m-[5px] mt-[60px]">
                In the heart of Farmington Hills, Michigan, we discovered our passion for crafting unique
                drinks inspired by our Sri Lankan heritage. Combining the vibrant flavors of our family's
                traditions with fresh, locally-sourced ingredients from Michigan, we began experimenting
                with tropical fruits, fragrant spices, and rich, creamy bases.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Craft */}
        <div className="transform rotate-[4deg] drop-shadow-md absolute top-30 left-180 flex flex-row justify-center w-140 p-[15px] rounded-md bg-[var(--ivory)]">
          <div className="flex flex-col">
            <div className="subheading flex justify-center w-full text-3xl mt-[3px] mb-[2px]">
              Craft
            </div>
            <div className="flex content-end">
              <div className="flex-1"> </div>
              <div className="border-l-[1px] border-l-black h-[300px] m-[5px]"></div>
              <p className="flex-2 text-[17px] text-start m-[5px] mt-[60px]">
                What started as a hobby quickly turned into a mission: to share the bold, exotic flavors of Sri Lanka
                while supporting local farmers and suppliers. Fusion Blends offers authentic, delicious beverages that
                blend the best of both worlds—traditional Sri Lankan recipes with fresh, Michigan-grown ingredients.
                We hope you enjoy these drinks as much as we do!
                <br />
                ~Abed Ihsan, Founder and CEO
              </p>
            </div>
          </div>
          {
                  positionPlantImages.map(({image, top, left, width, yTransform}, index) => (
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
          
           {
                  positionStampImages.map(({image, top, left, width, yTransform}, index) => (
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

      </div>
    </main>
  );
}
