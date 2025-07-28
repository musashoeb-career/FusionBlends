"use client";

import Link from "next/link"
import Image from "next/image"
import { easeInOut, motion } from "motion/react"

export default function Footer() {
  return (
    <div className="flex flex-col w-[full] h-auto footer">

        {/* Animating Footer Line */}
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

        {/* Social Media Icons */}
        <div className="flex">
                <nav className="flex w-full">
                <div className="flex-1 flex flex-row items-center">
                    <div className="relative m-[15px]">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <div className="group">
                                 <Image
                                className="group-hover:hidden"
                                src="./instagram.svg"
                                alt="Default Instagram Icon"
                                objectFit="contain"
                                width={35}
                                height={35}
                            />
                                <Image
                                    className="hidden group-hover:block"
                                    src="./instagram-red.svg"
                                    alt="Red Instagram Icon"
                                    objectFit="contain"
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </a>
                    </div>
                    <div className="relative m-[10px]">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                             <div className="group">
                                 <Image
                                className="group-hover:hidden"
                                src="./facebook.svg"
                                alt="Default Facebook Icon"
                                objectFit="contain"
                                width={35}
                                height={35}
                            />
                                <Image
                                    className="hidden group-hover:block"
                                    src="./facebook-red.svg"
                                    alt="Red Facebook Icon"
                                    objectFit="contain"
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </a>
                    </div>
                <div className="relative  m-[10px]">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                         <div className="group">
                                 <Image
                                className="group-hover:hidden"
                                src="./twitter.svg"
                                alt="Default Twitter Icon"
                                objectFit="contain"
                                width={35}
                                height={35}
                            />
                                <Image
                                    className="hidden group-hover:block"
                                    src="./twitter-red.svg"
                                    alt="Red Twitter Icon"
                                    objectFit="contain"
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </a>
                </div>
                </div> 

                 {/* Customer Reviews */}
              <div className="hidden sm:flex flex-[4] justify-around items-center text-white mt-[20px]">
                    <Link href = "/" className="hover:brightness-75">Review</Link>
                    <Link href = "/about" className="hover:brightness-75">Customer Feedback</Link>
                    <Link href = "/shop" className="hover:brightness-75">Location: Farmington Hills</Link>
                    <div className="group rounded-lg bg-white hover:bg-[var(--maroon)] flex justify-center items-center w-[120px] h-[40px] p-[5px]">
                         <Link href = "/shop" className="group-hover:text-white text-[var(--maroon)]">Contact Us</Link>
                    </div>
                   
                </div>
            </nav>
            <div className="relative flex m-[15px]">
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
