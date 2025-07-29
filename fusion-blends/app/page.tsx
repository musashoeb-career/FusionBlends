"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { juiceImages, positionJuiceImages } from '../data/home/juices';
import { positionSpiceImages } from '../data/home/spices';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // During SSR or first render, don't use isMobile
    return  <div className="relative min-h-screen flex justify-center items-center text-white text-2xl"></div>;
  }

  return (
    <main>
      <div className="relative min-h-screen flex justify-center items-center text-white text-2xl">

       
        {positionSpiceImages.map(
          ({ image, top, left, width, yTransform, xTransform, isBlur, rotate }, index) => (
            <motion.img
              key={index}
              style={{
                position: "absolute",
                top: top,
                left: left,
                width: width,
                filter: isBlur ? "blur(3px)" : "none"
              }}
              src={image.src}
              alt={image.alt}
              animate={{ y: yTransform, x: xTransform, rotate: rotate }}
              transition={{ delay: 0.2, duration: 3 }}
            />
          )
        )}

        {/* Conditionally render juice images or mobile fallback */}
        {isMobile ? (
          <motion.img
            src= {juiceImages.lankanLooda.src} // TODO: replace with actual image
            alt= {juiceImages.lankanLooda.alt}
            style={{ position: "absolute", top: 350, left: 10, width: "120vw" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -225 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          />
        ) : (
          positionJuiceImages.map(
            ({ image, top, left, width, yTransform }, index) => (
              <motion.img
                key={index}
                style={{ position: "absolute", top: top, left: left, width: width }}
                src={image.src}
                alt={image.alt}
                animate={{ y: yTransform }}
                transition={{ duration: 0.8 }}
              />
            )
          )
        )}

      </div>
    </main>
  );
}
