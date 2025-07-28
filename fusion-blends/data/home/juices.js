
 export const juiceImages = {
  ceylonBrew: {
    src: "/pressed-logo-green.png",
    alt: "Ceylon Brew - iced tea with ceylon leaves"
  },
  islandIced: {
    src: "/pressed-logo-brown.png",
    alt: "Island Iced - a chilled spice tea with cloves"
  },
  lankanLooda: {
    src: "/pressed-logo-pink.png",
    alt: "Lankan Looda - dessert with rose syrup and chia seeds"
  },
};

export const positionJuiceImages = [
  {image: juiceImages.lankanLooda,
   top: "19vh", 
   left: "12.5vw",
   width: "37vw",
   yTransform: -50
  },
  {image: juiceImages.islandIced,
   top: "17vh", 
   left: "28vw",
   width: "42vw",
   yTransform: -150
  },
  {image: juiceImages.ceylonBrew,
   top: "19vh", 
   left: "48vw",
   width: "37vw",
   yTransform: -50
  }
]