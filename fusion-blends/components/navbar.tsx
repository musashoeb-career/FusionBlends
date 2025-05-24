import Link from "next/link"

export default function NavBar() {
    return(
        <div>
           <nav className="flex justify-around mt-[20px] text-white">
            <Link href = "/">Home</Link>
             <Link href = "/about">About</Link>
             <Link href = "/shop">Shop</Link>
             <Link href = "/contact">Contact</Link>
           </nav>
        </div>
       
    )
}