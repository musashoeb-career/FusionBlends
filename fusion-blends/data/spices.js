
 export const spiceImages = {
  cardamomPod: {
    src: "/cardamom.png",
    alt: "Green cardamom pod"
  },
  rosePetal: {
    src: "/rose-petal.png",
    alt: "Rose petal"
  },
  spiceClove: {
    src: "/clove.png",
    alt: "Black spice clove"
  },
};

export const positionSpiceImages = [
  {image: spiceImages.rosePetal,
   top: 120, 
   left: 40,
   width: 150,
   yTransform: -50,
   xTransform: -10,
   isBlur: false,
   rotate: -35
  },
 {image: spiceImages.rosePetal,
   top: 50, 
   left: 950,
   width: 150,
   yTransform: -50,
   xTransform: 10,
   isBlur: true,
   rotate: 50
  },
 {image: spiceImages.rosePetal,
   top: 500, 
   left: 1100,
   width: 180,
   yTransform: -50,
   xTransform: -10,
   isBlur: false,
   rotate: 15
  },
  {image: spiceImages.spiceClove,
   top: 300, 
   left: 200,
   width: 100,
   yTransform: -50,
   xTransform: -10,
   isBlur: true,
   rotate: -35
  },
 {image: spiceImages.spiceClove,
   top: 60, 
   left: 450,
   width: 60,
   yTransform: -50,
   xTransform: 0,
   isBlur: true,
  rotate: -90
  },
 {image: spiceImages.spiceClove,
   top: 250, 
   left: 1100,
   width: 80,
   yTransform: -50,
   xTransform: 10,
   rotate: 35
  },
   {image: spiceImages.cardamomPod,
   top: 550, 
   left: 50,
   width: 300,
   yTransform: -50,
   xTransform: -10,
   isBlur: true,
   rotate: -35
  },
   {image: spiceImages.cardamomPod,
   top: 80, 
   left: 725,
   width: 250,
   yTransform: -70,
   xTransform: 10,
   isBlur: true,
   rotate: 50
  },

]