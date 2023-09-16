import React from "react";

import { ParallaxLayer } from "@react-spring/parallax";
import logo from "../assets/logo.png";
import pclogo from "../assets/pcbuilders.png";

import table from "../assets/table.png";
import pc from "../assets/pc.png";
import monitor from "../assets/monitor.png";
import keyboard from "../assets/keyboard.png";

import mouse from "../assets/mouse.png";

export default function Header() {
  return (
    <div className="w-full h-screen bg-mygreen ">
      <div
        className={`bg-transparent fixed z-50  top-0 left-0 right-0 flex items-center justify-between px-2 sm:px-16 md:px-30 lg:px-40 py-3 sm:py-5 text-mywhite `}
      >
        <div>
          <img
            src={pclogo}
            alt="logo"
            className="h-[40px] sm:h-[50px] md:h-[60px]"
          />
          {/* <h2 className="text-2xl font-semibold text-myblack">PC Builders</h2> */}
        </div>
        <div className="">
          <a
            className=" px-2 py-1 text-sm sm:text-base md:text-lg sm:px-4 sm:py-2 shadow-2xl rounded-sm bg-myblack"
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            Sales Enquiry
          </a>
        </div>
      </div>
      {/* <div className="w-full h-full relative flex items-center justify-end">
        <div className="mr-3">
          <div className="glass my-2 px-1 rounded-md shadow-xl">
            <a
            className="cursor-pointer"
              href="https://wa.me/+919025380083"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="glass px-1 rounded-md shadow-xl">
            <a href >
              <i className="text-2xl fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div> */}
      <ParallaxLayer offset={0} speed={0.1}>
        <>
          <div className="w-full h-full">
            <img
              className="absolute bottom-0 left-0 h-[600px] md:h-[600px] w-full"
              src={table}
              alt="table"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <>
          <div className="w-full h-full  flex justify-center items-center">
            <img
              className="absolute   -bottom-2 sm:-bottom-6 md:-bottom-8 w-[160px] sm:w-[200px] md:w-[220px]"
              src={keyboard}
              alt="keyboard"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5}>
        <>
          <div className="w-full h-full flex  justify-center">
            <img
              className="absolute  bottom-28 w-[250px] sm:w-[320px] md:w-[420px]"
              src={monitor}
              alt="monitor"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1}>
        <div className="w-full h-full ">
          <img
            className="absolute md:left-72 bottom-10 w-[100px] sm:w-[180px] md:w-[200px]"
            src={pc}
            alt="pc"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={5.5}>
        <>
          <div className="w-full h-full ">
            <img
              className="absolute right-5 sm:right-40 md:right-96 bottom-12  w-[50px] sm:w-[60px] md:w-[80px]"
              src={mouse}
              alt="mouse"
            />
          </div>
        </>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <>
          <div className="w-full h-full ">
            <div className="w-full h-full text-center flex justify-center">
              <h1 className="text-6xl sm:text-7xl md:text-9xl top-20 sm:top-48  md:top-36 absolute  text-white font-bold">
                Build Your Own PC
              </h1>
            </div>
          </div>
        </>
      </ParallaxLayer>
    </div>
  );
}
