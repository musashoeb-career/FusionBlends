import { juiceImages } from "../home/juices";

export const plantImages = {
  waterLilyBlue: {
    src: "/blue-water-lily.png",
    alt: "A singular blooming blue water-lily"
  },
  ceylonLeaf: {
    src: "/ceylon-leaf.png",
    alt: "A vivid green ceylon leaf"
  },
};

export const stampImages = {
  sriLankanStamp: {
    src: "/sri-lanka-stamp-1.png",
    alt: "A Sri Lankan stamp featuring the national flower"
  },
  sriLankanStamp2: {
    src: "/sri-lanka-stamp-2.png",
    alt: "A Sri Lankan stamp featuring bright red, gold, and green colors"
  },
};


export const positionPlantImages = [
  {image: plantImages.ceylonLeaf,
   top: -50, 
   left: 60,
   width: 200,
   yTransform: 180,
   xTransform: [15, -15, 15],
   rotate: -10,
   duration: 2, 
   delay: 1
  },
  {image: plantImages.waterLilyBlue,
   top: -100, 
   left: 525,
   width: 300,
   yTransform: 150,
   xTransform: [20, -15, 20],
   rotate: 7,
   duration: 4, 
   delay: 1
  },
  {image: plantImages.waterLilyBlue,
   top: -50, 
   left: 650,
   width: 200,
   yTransform: 270,
   xTransform: [15, -15, 15],
   rotate: -5,
   duration: 3, 
   delay: 1.2
  },
  {image: plantImages.waterLilyBlue,
   top: -25, 
   left: 500,
   width: 375,
   yTransform: 350,
   xTransform: [15, -15, 20],
   rotate: -6,
   duration: 3, 
   delay: 1.4
  }
]

export const positionStampImages = [
  {image: stampImages.sriLankanStamp,
   top: 20, 
   left: 460,
   width: 140,
   yTransform: -10,
   rotate: -3,
   duration: 2, 
   delay: .5
  },
  {image: stampImages.sriLankanStamp2,
   top: 60, 
   left: 1080,
   width: 220,
   yTransform: -10,
   rotate: 1,
   duration: 2, 
   delay: .5
  }
]

export const positionJuicePostCardImages = [
  {image: juiceImages.ceylonBrew,
   top: 650, 
   left: 700,
   width: 300,
   yTransform: -180,
   rotate: -3,
   duration: 2, 
   delay: 1
  },
  {image: juiceImages.lankanLooda,
   top: 650, 
   left: 800,
   width: 300,
   yTransform: -200,
   rotate: -3,
   duration: 3, 
   delay: 1
  }
]