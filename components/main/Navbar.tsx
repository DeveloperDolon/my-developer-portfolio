import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed mx-auto top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            DeveloperDolon
          </span>
        </a>

        <div className="h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border md::gap-10 sm:gap-5 gap-2 border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer sm:text-base text-xs">
              About me
            </a>
            <a href="#skills" className="cursor-pointer sm:text-base text-xs">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer sm:text-base text-xs">
              Projects
            </a>
            
            <a href="#contact-me" className="cursor-pointer sm:text-base text-xs">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 z-30">
          {Socials.map((social) => (
            <a key={social?.name} target="_blank" href={social?.link}>
              <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
