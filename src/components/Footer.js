import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="w-full h-screen flex bg-myblack ">
      <div className="  z-50 relative   grid grid-cols-1 sm:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="w-5/6 sm:w-3/6">
            <p className="text-mywhite text-center py-3">
              Across multimedia, engineering, development, and more, our expert
              team listens, analyzes, builds, tests, and delivers for you.
            </p>
            <div className="flex items-center justify-center gap-5 my-5">
              <a
                className="text-4xl  text-mygreen cursor-pointer hover:text-myorange"
                //  href="https://wa.me/+919025380083"
                href="/"
                // target="_blank"
                // rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="text-4xl text-mygreen hover:text-myorange"
                // href="https://twitter.com/A2D_Army/"
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="text-4xl text-mygreen hover:text-myorange"
                // href="https://www.instagram.com/a2dpcfactory"
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="text-4xl text-mygreen hover:text-myorange"
                // href="https://youtu.be/Z7PfX565AKY"
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
                  {/* <p> Kundrathur,</p> */}
                  <p> Erode,</p>
                  <p> Chennai-600000</p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex">
                <div>
                  <i className="fa-solid fa-phone mx-2"></i>
                </div>
                <div>
                  {/* <p> +91 9445747768</p>
                  <p> +91 9025380083</p> */}
                  <p> +91 9876543210</p>
                  <p> +91 9832946732</p>
                </div>
              </div>
            </div>
            <p className="my-5">
              <i className="fa-solid fa-envelope mx-2"></i>
              {/* enquiries@a2dpcfactory.com */}
              abc@pcbuilding.com
            </p>
          </div>
        </div>
      </div>

      <ParallaxLayer offset={4} speed={1}>
        <div className=" w-full wave z-0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={3}>
        <div className=" w-full  h-full flex items-start justify-center ">
          {/* <img className="mt-10" src={logo} alt="logo" /> */}
          <h2 className="mt-10 text-3xl font-semibold ">PC Builders</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0}>
        <div className="w-full  h-screen flex items-end justify-center">
          <div className="text-mywhite text-center border-t w-full p-3">
            <p className="font-semibold">
              Copyright reserved by PC Building Team
            </p>
            <p className="text-sm py-3 text-stone-300">Developer: Pradeep</p>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}
