import React, { useRef } from "react";
import data from "../data";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import testimonial from "../assets/testimonial.png";

export default function Testimonial() {
  return (
    <>
      <div className="w-full h-screen">
        <ParallaxLayer offset={3} speed={0}>
          <div className="bg-myorange w-full h-full z-0">
            <h1 className="text-6xl sm:text-9xl text-center text-white font-thin pt-10">
              Testimonial
            </h1>
            <div className="w-full absolute bottom-0 py-10">
              <h1 className="text-6xl sm:text-9xl text-center   text-white font-thin pt-10">
                That's All
              </h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
          <div className="w-full h-screen bg-myblack">
           <div className="w-full h-full absolute flex items-center justify-center">
           <img className=" " src={testimonial} alt="testimonial" />
           </div>
            <Testimonials />
          </div>
        </ParallaxLayer>
      </div>
    </>
  );
}

function Testimonials() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <>
      <Parallax ref={parallax} pages={7} horizontal className="scroll">
        {data.testimonialData?.map((t, index) => (
          <ParallaxLayer offset={index} speed={1} key={index}>
            <div className="w-full h-screen flex items-center justify-center bg-mygreen">
              <div>
                <div className="flex-none carousel-item w-[280px] sm:w-[350px] h-auto p-5 md:p-8 mx-3 glass  rounded-md hover:scale-110 sm:hover:scale-125 cursor-pointer transition-all duration-500">
                  <div className="flex justify-between my-2">
                    <div>
                      <img
                        alt="useravatar"
                        src={t.img}
                        className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-xl font-semibold text-myblack">
                        {t.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white md:text-lg">{t.content}</p>
                </div>
                <div className="w-full  absolute left-0 px-10 bottom-0 my-10 flex items-center justify-between">
                  <button onClick={() => scroll(index === 0 ? 6 : index - 1)}>
                    <i className="text-4xl text-mygray hover:text-myblack fa-solid fa-angles-left"></i>
                  </button>
                  <button onClick={() => scroll(index === 6 ? 0 : index + 1)}>
                    <i className="text-4xl text-mygray hover:text-myblack fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        ))}
      </Parallax>
    </>
  );
}
