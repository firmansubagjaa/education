"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar({ logoUrl }: { logoUrl: string }) {
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const position = window.scrollY;
      setScrollYPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `fixed top-0 left-0 w-full text-white z-[2] transition-all h-28 ease-in-out duration-700 ${
    scrollYPosition < 300
      ? "bg-transparent border-transparent"
      : "bg-[#3422a0] border-b-8 border-[#f67c00]"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container flex justify-between items-center h-full duration- ">
        <div>
          <Image
            src={logoUrl}
            alt="Logo"
            className="w-56"
            width={400}
            height={400}
          />
        </div>
      </div>
    </nav>
  );
}
