import Link from "next/link"

export default function NavBar() {
    return(
        <div>
           <nav>
            <Link href = "/">Home</Link>
             <Link href = "/about">About</Link>
              <Link href = "/shop">Shop</Link>
           </nav>
        </div>
       
    )
}