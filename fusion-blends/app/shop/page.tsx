"use client";

import Image from "next/image";
import { useState } from "react";
import {Plus, Minus} from 'lucide-react';

export default function ShopPage() {

  const [faloodaQuantity, setFaloodaQuantity] = useState(0)
  const [teaQuantity, setTeaQuantity] = useState(0)
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  const maxQuantity = 20

  enum juiceType  {
    COFFEE,
    FALOODA, 
    TEA
  }

  const incrementQuantity = (juiceQuantity : number, type : juiceType) => {
        if (juiceQuantity == maxQuantity) {
          return
        } 
        switch (type) {
          case (juiceType.COFFEE): {
            setCoffeeQuantity(prevQuanity => prevQuanity + 1)
          }
          case (juiceType.FALOODA): {
             setFaloodaQuantity(prevQuanity => prevQuanity + 1)
          }
          case (juiceType.TEA): {
             setTeaQuantity(prevQuanity => prevQuanity + 1)
          }
          default:
            break
        }    
  }

     const decrementQuantity = (juiceQuantity : number, type : juiceType) => {
        if (juiceQuantity == 0) {
          return
        } 
        switch (type) {
          case (juiceType.COFFEE): {
            setCoffeeQuantity(prevQuanity => prevQuanity - 1)
          }
          case (juiceType.FALOODA): {
             setFaloodaQuantity(prevQuanity => prevQuanity - 1)
          }
          case (juiceType.TEA): {
             setTeaQuantity(prevQuanity => prevQuanity - 1)
          }
          default:
            break
        }    
  }


  return (
    <main>
      <div className= "min-h-screen flex justify-center items-center text-2xl">
        <div className="grid grid-cols-3 gap-x-10 ">
           <div className="flex flex-col rounded-[15px] w-[315px] h-[520px] bg-white drop-shadow-2xl">
            <div className="">
              <Image src={"/pressed-logo-pink.png"} alt = "Pink Juice Bottle" objectFit="contain" width={500} height = {2000}></Image>
            </div>
            <div className="flex flex-col items-center">
               <div className="subheading text-3xl mt-[3px] mb-[2px]">
              Lankan Looda
            </div>
            <div className="text-[13px] font-[100] my-[5px] mx-[5px]">
              FALOODA IS A POPULAR SOUTH ASIAN SWEET, 
              CREAMY DRINK MADE WITH ROSE SYRUP AND MILK, 
              OFFERING A FRAGRANT AND REFRESHING FLAVOR.
            </div>
            <div className="flex justify-around w-full">
                <div className="flex justify-around bg-(--grey) rounded-lg ">
                    <button 
                    className = "m-[2px]" 
                    onClick={()=> incrementQuantity(faloodaQuantity, juiceType.FALOODA)}>
                      <Plus color = "black" size={24} strokeWidth={0.5}></Plus>
                    </button>
                    <div className="text-[12px] m-[5px]">{faloodaQuantity}</div>
                    <button
                    className = "m-[2px]" 
                    onClick={()=> decrementQuantity(faloodaQuantity, juiceType.FALOODA)}>
                      <Minus color = "black" size = {24} strokeWidth={0.5}></Minus>
                    </button>          
                </div>
                <button className="rounded-lg bg-(--teal) text-sm text-white py-[8px] px-[12px] m-[5px] ">Add to Cart</button>     
            </div>
            <button className="rounded-lg bg-(--teal) text-sm text-white py-[8px] px-[10px] m-[5px]">Flip for Nutrition</button>
            </div>
          </div>
           <div className=" flex flex-col rounded-lg w-[300px] h-[500px] bg-white">
             <div className="flex-1 ">
              <Image src={"/pressed-logo-brown.png"} alt = "Brown Juice Bottle" objectFit="contain" width={500} height = {2000}></Image>
            </div>
          </div>
           <div className="rounded-lg w-[300px] h-[500px] bg-white">
              <div className="flex-1 ">
              <Image src={"/pressed-logo-green.png"} alt = "Green Juice Bottle" objectFit="contain" width={500} height = {2000}></Image>
            </div>
          </div>
        </div>
        
      </div>

    </main>
   
  );
}