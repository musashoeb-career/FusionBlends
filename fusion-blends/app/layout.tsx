import type { Metadata } from "next";
import {Poppins, Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from '../components/navbar'
import Footer from "@/components/footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"]
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Fusion Blends",
  description: "Fusion Blends is a juice company located in Farmington Hills, Michigan that specializes in Sri-Lankan inspired beverages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${poppins.variable} antialiased`}
      >
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
