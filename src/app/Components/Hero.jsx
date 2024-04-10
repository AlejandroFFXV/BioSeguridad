import React from "react";
import Image from "next/image";
// import HeroHead from "/src/app/assets/hero-head.png";
import HeroHead from "@/assets/hero-head.png";
const Hero = () => {
  return (
    <>
      <div className="pt-8"></div>
      <div className="relative flex items-center justify-center ">
        <Image
          src={HeroHead}
          className="opacity-75 rounded-full mx-auto 
          w-720 max-w-full h-480 my-auto"
          alt="hero"
          priority
        />
        <div
          className="absolute top-1/2 left-1/2 transform
        -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
        >
          BioSeguridadIA
        </div>
      </div>
      <div className="pb-8"></div>
    </>
  );
};

export default Hero;
