"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./side-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full px-6 py-4 md:pr-0 absolute z-10 flex items-center justify-between text-barlow-condensed">
      <Image
        src={"/images/shared/logo.svg"}
        width={48}
        height={48}
        alt="logo"
      />
      { !isOpen && <Image
        src={"/images/shared/icon-hamburger.svg"}
        alt="hamburger menu"
        width={24}
        height={24}
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />}
      
      {isOpen && <SideMenu setIsOpen={setIsOpen} />}

      <ul className="hidden w-[70%] p-10 md:flex justify-around items-center text-white text-xl  font-barlow-condensed tracking-widest uppercase bg-white/10">
        <Link href="/">
          <span className="hidden lg:inline-block font-bold text-white/30">00</span> Home
        </Link>
        <Link href="/destination">
          <span className="hidden lg:inline-block font-bold text-white/30">01</span>{" "}
          Destination
        </Link>
        <Link href="/crew">
          <span className="hidden lg:inline-block font-bold text-white/30">02</span> Crew
        </Link>
        <Link href="/technology">
          <span className="hidden lg:inline-block font-bold text-white/30">03</span>{" "}
          Technology
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
