import Link from "next/link"
import Image from 'next/image'


export default function NavBar() {
    return(
        <div className="flex">
            
            <div className="relative rounded-lg w-[150px] h-[150px] m-[15px] bg-white">
                <Image src = {"/logo-final.png"}  alt = "Fusion Blends Logo" objectFit="contain" fill></Image>
            </div>
           <nav className="flex-6 flex justify-around items-center text-[var(--ivory)]">
            <Link href = "/" className="hover:brightness-75">Home</Link>
             <Link href = "/about" className="hover:brightness-75">About</Link>
             <Link href = "/shop" className="hover:brightness-75">Shop</Link>
             <Link href = "/contact" className="hover:brightness-75">Contact</Link>
           </nav>
           <div className="flex-1 flex justify-around items-center w-1/8"> 
              <Image src={"user.svg"} alt="User Profile Icon" width={25} height={25} />

               <Image src={"shopping.svg"} alt="Shopping Cart Icon" width={25} height={25} />
           </div>
        </div>
    

    )
}