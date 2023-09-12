import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import about from "../assets/about.jpg";

export default function About() {

  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };


  return (
    <div className="w-full h-screen bg-myblack ">
      <ParallaxLayer offset={1}>
        <>
          <Parallax ref={parallax} horizontal pages={2} className="scroll">
            <ParallaxLayer offset={0} speed={2}>
              <div className="grid w-full h-auto grid-cols-1  sm:grid-cols-2 ">
                <div className="w-full  h-full flex p-2 sm:pt-20 md:pt-5  justify-center ">
                  <img
                    className="h-full  sm:h-4/5 md:h-3/4 rounded-md "
                    src={about}
                    alt="aboutImg"
                  />
                </div>
                <div className="absolute bottom-2 sm:relative  my-0 sm:my-10 mx-3 md:mx-20">
                  <h2 className="text-2xl sm:text-5xl  mb-2 md:mb-10 text-mywhite font-semibold">
                    Who we are ?
                  </h2>
                  <p className="text-sm text-mywhite sm:text-lg  tracking-wider leading-5 md:leading-10 ">
                    Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et 
                    labore et dolor sit amet, consectetur adip incididunt ut
                    labore et dolor sit amet ut labore et dolor sit amet ut
                    labore et dolor sit amet Lorem ipsum dolor sit amet,
                    consectetur adip incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adip incididunt ut labore et dolor sit
                    amet, consectetur adip incididunt ut labore et dolor Lorem
                    ipsum dolor sit amet, consectetur adip incididunt ut labore
                    et dolor sit amet, consectetur adip incididunt ut.
                  </p>
                  <div className="flex items-center justify-between mt-7">
                    <p className="text-2xl sm:text-5xl  mb-2 md:mb-10 text-myorange font-light">
                      Our Works
                    </p>
                    <button className=" " onClick={() => scroll(2)}>
                      <i className="fa fa-angles-right text-6xl text-myorange"></i>
                    </button>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer className="bg-myorange" offset={1}>
              <div className="grid w-full  h-full grid-cols-2">


                <div className="p-1 sm:p-2 md:p-10 w-full">
                  <div className="p-1 sm:p-3 h-1/2 w-full bg-mygray">
                    <div className="about-pc-4 w-full h-full rounded-lg"></div>
                  </div>
                  <div className="p-1 sm:p-3 h-1/2 w-full bg-mygray">
                    <div className="about-pc-5 w-full h-full rounded-lg"></div>
                  </div>
                </div>


                <div className="p-1 sm:p-2 md:p-10 w-full">
                  <div className="p-1 sm:p-3 w-full h-full bg-mygray">
                    <div className="about-pc-6 w-full h-full rounded-lg"></div>
                  </div>
                </div>


              </div>
            </ParallaxLayer>
          </Parallax>
        </>
      </ParallaxLayer>
    </div>
  );
}
