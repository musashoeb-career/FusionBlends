"use client";

import { easeIn, motion } from "motion/react"
import {Plus, Minus} from 'lucide-react';
import Image from "next/image";
import { useState } from "react";



type ShopCardProps = {
  juiceTitle: string,
  juiceDescription: string,
  juiceImage: string,
  juiceAlt: string,
  delay: number,
  onClickPlus: () => void;
  onClickMinus: () => void;
  quantity: number,
};



export default function ShopCard 
    ({
  juiceTitle,
  juiceDescription,
  juiceImage,
  juiceAlt,
  delay,
  onClickPlus,
  onClickMinus,
  quantity

}: ShopCardProps)
 {

   const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div>
            <motion.div 
            className="flex flex-col rounded-[15px] w-[315px] h-[520px] bg-white drop-shadow-2xl"
            style={{perspective: 1000}}
            initial = {{opacity: 0, y:-100}}
            animate = {{opacity: 1, y:100, rotateX: isFlipped? 180 : 0}}
            transition={{delay: delay, duration: 3,type: 'spring', stiffness: 300, damping: 20}}>

          <div>  
                <div>
                 <Image src={juiceImage} alt = {juiceAlt} objectFit="contain" width={500} height = {2000}></Image>
            </div>
            <div className="flex flex-col items-center">
               <div className="subheading text-3xl  mb-2.5">
              {juiceTitle}
            </div>
            <div className="text-[12px] font-[100] text-center mx-2 mb-2">
              {juiceDescription}
            </div>
            <div className="flex justify-around w-full">
                <div className="flex justify-between items-center bg-(--grey) rounded-lg ">
                    <button 
                    className = "m-[2px]"
                    onClick={onClickMinus}>
                      <Minus color = "black" size = {20} strokeWidth={0.7}></Minus>
                    </button>
                    <div className="text-[14px] font-semibold m-[5px]">{quantity}</div>
                    <button
                    className = "m-[2px]"
                    onClick={onClickPlus}>
                      <Plus color = "black" size={20} strokeWidth={0.7}></Plus>
                    </button>          
                </div>
                <motion.button 
                  className="rounded-lg text-sm py-[8px] px-[12px] m-[5px]"
                  style = {{backgroundColor: "var(--teal)", color: "white"}}
                  whileHover = {{backgroundColor: "var(--maroon)"}}
                  transition={{duration: .35, ease: easeIn}}>
                      Add to Cart  
                </motion.button>     
            </div>
             <motion.button 
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="rounded-lg text-sm py-[8px] px-[12px] m-[5px]"
                  style = {{backgroundColor: "var(--teal)", color: "white"}}
                  whileHover = {{backgroundColor: "var(--maroon)"}}
                  transition={{duration: .35, ease: easeIn}}>
                      Flip for Nutrition 
                </motion.button>    
            </div>
                
              
              
            </div>
            
          </motion.div>
        </div>
    )
}