"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center sm:px-20 px-5 mt-40 w-full z-[20] relative"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box2 button-primary overflow-hidden border border-[#7042f88b] opacity-[0.2] shadow-2xl shadow-[#fafafa]"
        >
          <Image src="/sb.png" alt="work icons" className="sm:w-[300px] w-[200px]" height={300} width={300} />
        </motion.div>

        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div> */}


        <motion.div
        variants={slideInFromLeft(0.8)} 
        className="space-y-2"
        >
          <h1 className="md:text-3xl text-xl font-semibold text-white">Hello There👋</h1>
          <h1 className="md:text-3xl text-xl font-semibold text-white">I am Dolon Chandra Roy.</h1>
          <h1 className="md:text-3xl text-xl font-semibold text-white">I am a {" "}
          <TypeAnimation
            sequence={[
              "Web Developer.",
              2000,
              "Frontend Developer.",
              2000,
              "ReactJS Developer.",
              2000,
              "MERN Stack Developer.",
              2000,
              "Full Stack Developer.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            repeat={Infinity}
          />
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-3 md:text-6xl text-3xl font-bold text-white sm:max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-3 sm:max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href={
            "https://drive.google.com/uc?id=1H22FCVPjFvye6KoGJIxEIUSavr-XAezu&export=download"
          }
          download
          rel="noreferrer"
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
