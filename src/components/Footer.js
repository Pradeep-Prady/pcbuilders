import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import logo from "../assets/logo.png";
import pclogo from "../assets/pcbuilders.png";

export default function Footer() {
  return (
    <div className="w-full h-screen flex bg-myblack ">
      <div className=" z-50 relative h-4/5   grid grid-cols-1 sm:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="w-5/6 sm:w-3/6">
            <p className="text-mywhite text-center py-3">
              Across multimedia, engineering, development, and more, our expert
              team listens, analyzes, builds, tests, and delivers for you.
            </p>
            <div className="flex items-center justify-center gap-5 my-5">
              <a
                className="text-4xl  text-myorange cursor-pointer hover:text-mywhite"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="text-4xl text-myorange hover:text-mywhite"
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="text-4xl text-myorange hover:text-mywhite"
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="text-4xl text-myorange hover:text-mywhite"
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center text-mywhite">
          <div className="text-start ">
            <h2 className="text-center my-5 text-xl ">Contact</h2>

            <div className="my-5">
              <div className="flex">
                <div>
                  <i className="fa-solid fa-location-crosshairs mx-2"></i>
                </div>
                <div>
                  <p>Chennai</p>
                  <p>TamilNadu</p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex">
                <div>
                  <i className="fa-solid fa-phone mx-2"></i>
                </div>
                <div>
                  <p> +91 9876543210</p>
                  <p> +91 9832946732</p>
                </div>
              </div>
            </div>
            <p className="my-5">
              <i className="fa-solid fa-envelope mx-2"></i>
              abc@pcbuilding.com
            </p>
          </div>
        </div>

        <div className="text-mywhite sm:hidden text-center border-t w-full p-3">
          <p className="font-semibold">Copyright reserved by PC Builders</p>
          <p className="text-sm py-3 text-stone-300">Developer: Pradeep</p>
        </div>
      </div>

      <ParallaxLayer offset={4} speed={1}>
        <div className=" w-full wave z-0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={3}>
        <div className=" w-full  h-full flex items-start justify-center ">
          <img
            className="mt-10 opacity-40 sm:opacity-100 h-[100px]"
            src={pclogo}
            alt="logo"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0}>
        <div className="w-full hidden sm:flex  h-screen   items-end justify-center">
          <div className="text-mywhite text-center border-t w-full p-3">
            <p className="font-semibold">Copyright reserved by PC Builders</p>
            <p className="text-sm py-3 text-stone-300">Developer: Pradeep</p>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}
