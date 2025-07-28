"use client";

import { motion } from "framer-motion";

type PostCardProps = {
  top: number;
  left: number;
  title: string;
  body: string;
  signature: string;
  xTrans: number;
  yTrans: number;
  rotate: number;
};

export default function PostCard({
  top,
  left,
  title,
  body,
  signature,
  xTrans,
  yTrans,
  rotate,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ rotate, opacity: 0 }}
      animate={{ x: xTrans, y: yTrans, opacity: 1, }}
      transition={{duration: 1}}
      className="drop-shadow-md absolute flex flex-row justify-center w-[35rem] p-[15px] rounded-md bg-[var(--ivory)]"
      style={{ top, left }}
    >
      <div className="flex flex-col">
        <div className="subheading flex justify-center w-full text-3xl mt-[3px] mb-[2px]">
          {title}
        </div>

        <div className="flex content-end">
          <div className="flex-1" />
          <div className="border-l-[1px] border-l-black h-[300px] m-[5px]" />
          <div className="flex-2 m-[5px] mt-[60px] text-[17px] text-start">
            {body}
            <br />
            <div className="font-bold text-[16px]">{signature}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
