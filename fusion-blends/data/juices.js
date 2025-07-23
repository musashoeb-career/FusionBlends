
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
   top: 150, 
   left: 180,
   width: 550,
   yTransform: -50
  },
  {image: juiceImages.islandIced,
   top: 135, 
   left: 380,
   width: 650,
   yTransform: -150
  },
  {image: juiceImages.ceylonBrew,
   top: 150, 
   left: 680,
   width: 550,
   yTransform: -50
  }
]