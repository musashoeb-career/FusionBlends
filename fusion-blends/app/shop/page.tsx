"use client";

import Image from "next/image";
import { useState } from "react";

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
           <div className="flex flex-col rounded-[15px] w-[300px] h-[500px] bg-white drop-shadow-2xl">
            <div className="flex-1 ">
              <Image src={"/pressed-logo-pink.png"} alt = "Pink Juice Bottle" objectFit="contain" width={500} height = {2000}></Image>
            </div>
            <div className="flex-1 flex flex-col items-center">
               <div className="subheading text-3xl m-[10px]">
              Lankan Looda
            </div>
            <div className="text-[14px] font-[100] m-[15px]">
              FALOODA IS A POPULAR SOUTH ASIAN SWEET, 
              CREAMY DRINK MADE WITH ROSE SYRUP AND MILK, 
              OFFERING A FRAGRANT AND REFRESHING FLAVOR.
            </div>
            <div className="flex flex-row justify-around">
                <button onClick={()=> incrementQuantity(faloodaQuantity, juiceType.FALOODA)}>Add</button>
                <div>{faloodaQuantity}</div>
                <button onClick={()=> decrementQuantity(faloodaQuantity, juiceType.FALOODA)}>Subtract</button>
            </div>
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