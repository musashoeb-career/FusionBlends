import Link from "next/link"
import Image from 'next/image'


export default function NavBar() {
    return(
        <div className="flex">
            
            <div className="relative rounded-lg w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[15px] bg-white">
                <Image src = {"/fusion-logo.png"}  alt = "Fusion Blends Logo" objectFit="contain" fill></Image>
            </div>
           <nav className="flex-2 md:flex-6 flex justify-around items-center text-white">
             <Link href = "/" className="hover:brightness-75">Home</Link>
             <Link href = "/about" className="hidden sm:flex hover:brightness-75">About</Link>
             <Link href = "/shop" className="hover:brightness-75">Shop</Link>
             <Link href = "/contact" className="hidden sm:flex hover:brightness-75">Contact</Link>
           </nav>
           <div className="flex-1 flex justify-around items-center w-1/8"> 
             <Image className = "hover:brightness-75" src={"user-icon.svg"} alt="Default User Profile Icon" width={25} height={35} />
             <Image className = "hover:brightness-75" src={"cart-icon.svg"} alt="Default Cart Icon" width={25} height={35} />
           </div>
        </div>
    

    )
}