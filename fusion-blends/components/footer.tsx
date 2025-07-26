"use client";

import Link from "next/link"
import Image from "next/image"
import { easeInOut, motion } from "motion/react"

export default function Footer() {
  return (
    <div className="flex flex-col w-[full] h-auto footer">
        <motion.div
            initial = {{width: 0}}
            whileInView = {{width: "100%"}}
            transition={{duration: 1, ease: easeInOut}}
            style={{
                borderTop: '3px solid white',
                marginTop: '10px',
                marginBottom: '10px',
                 }}>
        </motion.div>
        <div className="flex">
                <nav className="flex w-full">
                <div className="flex-1 flex flex-row items-center">
                    <div className="relative m-[15px]">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="hover:brightness-25"
                                src="./instagram.svg"
                                alt="Instagram Icon"
                                objectFit="contain"
                                width={35}
                                height={35}
                            />
                        </a>
                    </div>
                    <div className="relative m-[10px]">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="hover:brightness-25"
                                src="./facebook.svg"
                                alt="Facebook Icon"
                                objectFit="contain"
                                width={35}
                                height={35}
                            />
                        </a>
                    </div>
                <div className="relative  m-[10px]">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="hover:brightness-25"
                            src="./twitter.svg"
                            alt="Twitter Icon"
                            width={35}
                            height={35}
                        />
                        </a>
                </div>
                </div> 
                <div className="flex-5 flex justify-around items-center text-white mt-[20px]">
                    <Link href = "/" className="hover:brightness-75">Review</Link>
                    <Link href = "/about" className="hover:brightness-75">Customer Feedback</Link>
                    <Link href = "/shop" className="hover:brightness-75">Location: Farmington Hills</Link>
                    <div className="rounded-lg bg-white hover:bg-[var(--maroon)] flex justify-center items-center w-[120px] h-[40px] p-[5px]">
                         <Link href = "/shop" className="hover:text-white text-[var(--maroon)]">Contact Us</Link>
                    </div>
                   
                </div>
            </nav>
            <div className="relative flex m-[10px]">
            <Image
                src = {"/fusion-logo-white.png"}
                alt = {"Fusion Blends Logo - a white version"}
                objectFit="contain"
                width={110}
                height={110}>
            </Image>
            </div>
        </div>
       <div className="text-white text-sm">
        © 2024, Fusion Blends, LLC. All Rights Reserved.
       </div>
    </div>
  )
}
