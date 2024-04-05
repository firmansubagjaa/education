import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header({
  bannerUrl,
  firstTitle,
  lastTitle,
  description,
  children,
}: HeaderProps) {
  return (
    <div>
      <header>
        {children}
        <div className="">
          <div
            style={{
              backgroundImage: `url(${bannerUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "top",
            }}
            className="bg-gray-200 bg-cover gap-3 shadow-md text-white h-screen object-cover object-top"
          >
            <div className="backdrop-blur-sm bg-black/70 h-full w-full p-4 flex flex-col items-start justify-between">
              <div className="container flex flex-col text-center items-center justify-center h-full w-full gap-5">
                <h2 className="text-6xl md:text-8xl font-bold capitalize">
                  <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#5F5D9C] via-[#6196A6] to-[#A4CE95]">
                    {firstTitle}
                  </span>
                  {lastTitle}
                </h2>
                <p className="text-md md:text-2xl lg:text-xl">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
