"use client";

import Image from "next/image";
import { useState } from "react";
import { juiceImages} from "@/data/home/juices";
import ShopCard from "@/components/shopcard";



export default function ShopPage() {

 const maxQuantity = 20

 enum JuiceType {
  FALOODA = "Falooda",
  COFFEE = "Coffee",
  TEA = "Tea"
}

 const [faloodaQuantity, setFaloodaQuantity] = useState(0)
 const [teaQuantity, setTeaQuantity] = useState(0)
 const [coffeeQuantity, setCoffeeQuantity] = useState(0)

 const updateQuantity = (juiceQuantity : number, type : JuiceType, delta: number) => {
       if ((delta > 0 && juiceQuantity === maxQuantity) || (delta < 0 && juiceQuantity === 0)) {
          return
        } 
        switch (type) {
          case (JuiceType.COFFEE): {
            setCoffeeQuantity(prevQuanity => prevQuanity + delta)
            break;
          }
          case (JuiceType.FALOODA): {
             setFaloodaQuantity(prevQuanity => prevQuanity + delta)
             break;
          }
          case (JuiceType.TEA): {
             setTeaQuantity(prevQuanity => prevQuanity + delta)
             break;
          }
          default:
            break
        }    
  }

  return (
    <main>
      <div className= "min-h-screen flex justify-center mt-10 text-2xl">
        <div className="grid grid-cols-1 gap-y-8 mt-10 mb-40 md:grid-cols-3 md:gap-x-10 md:gap-y-0 md:mt-0 md:mb-0">
           <ShopCard 
              delay={0}
              onClickPlus={() => updateQuantity(faloodaQuantity, JuiceType.FALOODA, 1)}
              onClickMinus={() => updateQuantity(faloodaQuantity, JuiceType.FALOODA, -1)}
              quantity={faloodaQuantity.valueOf()}
              juiceTitle="Lankan Looda"
              juiceImage= {juiceImages.lankanLooda.src}
              juiceAlt= {juiceImages.lankanLooda.alt}
              juiceDescription="FALOODA IS A POPULAR SOUTH ASIAN SWEET, CREAMY DRINK MADE WITH ROSE SYRUP
               AND MILK, OFFERING A FRAGRANT AND REFRESHING FLAVOR." ></ShopCard>
            <ShopCard 
              delay={.2}
              onClickPlus={() => updateQuantity(coffeeQuantity, JuiceType.COFFEE, 1)}
              onClickMinus={() => updateQuantity(coffeeQuantity, JuiceType.COFFEE, -1)}
              quantity={coffeeQuantity}
              juiceTitle="Island Iced"
              juiceImage= {juiceImages.islandIced.src}
              juiceAlt= {juiceImages.islandIced.alt}
              juiceDescription="SRI LANKAN SPICED ICE TEA IS A BOLD, AROMATIC BLEND INFUSED WITH SPICES, 
              SERVED CHILLED FOR A VIBRANT AND INVIGORATING TWIST." ></ShopCard>
             <ShopCard 
              delay={.4}
              onClickPlus={() => updateQuantity(teaQuantity, JuiceType.TEA, 1)}
              onClickMinus={() => updateQuantity(teaQuantity, JuiceType.TEA, -1)}
              quantity={teaQuantity}
              juiceTitle="Ceylon Brew"
              juiceImage= {juiceImages.ceylonBrew.src}
              juiceAlt= {juiceImages.ceylonBrew.alt}
              juiceDescription="ICED CEYLON TEA IS A CRISP AND CLASSIC BREW MADE FROM CEYLON LEAVES,
               OFFERING A SMOOTH, CLEAN FINISH WITH CITRUSY NOTES." ></ShopCard>
        </div>
        
      </div>

    </main>
   
  );
}