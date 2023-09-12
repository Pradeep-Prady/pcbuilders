import { ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import cpu1 from "../assets/cpu/AMD Ryzen 9 5950X.png";
import cpu2 from "../assets/cpu/Intel Core i9-11900K.png";

import gpu1 from "../assets/graphics/gpu1.png";
import gpu2 from "../assets/graphics/gpu2.png";

import storage1 from "../assets/storage1.png";
import storage2 from "../assets/storage2.png";
import ram1 from "../assets/ram1.png";
import ram2 from "../assets/ram2.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikp8xes",
        "template_rqd2mme",
        form.current,
        "GIm9L2rMJrBh_7YRG"
      )
      .then(form.current.reset());
  };

  return (
    <div className="w-full h-screen flex bg-mygreen">
      
      <div className="w-full  z-10 relative h-full flex items-center sm:items-center justify-center ">
       
        <form
          className="glass p-3 sm:p-7 rounded-sm shadow"
          onSubmit={sendEmail}
          ref={form}
        >
         

          <div className="flex-col my-1 ">
            <label className="w-full  text-white font-semibold ">Name *</label>
            <input
              className="w-full my-2 shadow text-white  p-2 bg-myblack h-[40px] border-none rounded-sm outline-none"
              type="text"
              name="user_name"
              htmlFor="name"
              required
            ></input>
          </div>
          <div className="flex-col my-1">
            <label className="w-full text-white font-semibold ">
              Email Address*
            </label>
            <input
              className="w-full my-2 shadow text-white p-2 bg-myblack h-[40px] border-none rounded-sm outline-none"
              type="email"
              name="user_email"
              htmlFor="email"
              required
            ></input>
          </div>
          <div className="flex-col my-1">
            <label className="w-full text-white font-semibold ">
              Your Message *
            </label>
            <textarea
              className="w-full scroll my-2 shadow text-white p-2 resize-none bg-myblack h-[100px] rounded-sm border-none outline-none"
              type="text"
              name="message"
              htmlFor="text"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button className="bg-myblack text-white px-6 py-2 font-semibold rounded-sm shadow">
              Send
            </button>
          </div>
        </form>
      </div>

      <ParallaxLayer offset={2} speed={0}>
        <>
          <div className="w-full h-1/6 py-5 text-center">
            <h2 className="text-2xl sm:text-5xl md:mb-10 text-white font-light">
              <span className="text-myorange">S</span>hare
              <span className="text-myorange">Y</span>our
              <span className="text-myorange pl-2">T</span>houghts
            </h2>
          </div>
        </>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.5}>
        <>
          <div className="w-full h-screen  flex   z-50">
            <img
              className="w-[100px] sm:w-[150px] md:w-[250px] bottom-10  -right-5 absolute"
              src={cpu1}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        <>
          <div className="w-full h-screen  z-50">
            <img
              className="w-[60px] sm:w-[100px]  md:w-[150px] absolute bottom-0 -right-2"
              src={cpu2}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1}>
        <>
          <div className="w-full h-screen  flex     z-50">
            <img
              className="w-[150px] sm:w-[300px] absolute -bottom-24 right-12 md:-bottom-10 md:right-36"
              src={gpu1}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2}>
        <>
          <div className="w-full h-screen  flex   z-50">
            <img
              className="w-[150px] sm:w-[300px] absolute -bottom-10 right-20 md:-bottom-20 md:right-24"
              src={gpu2}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>

      {/*   Ram Storage Images */}

      <ParallaxLayer offset={2} speed={2}>
        <>
          <div className="w-full h-screen z-50">
            <img
              className="w-[80px] sm:w-[150px] md:w-[200px] absolute bottom-0"
              src={storage2}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.5}>
        <>
          <div className="w-full h-screen flex z-50">
            <img
              className="w-[80px] sm:w-[120px] md:w-[180px] absolute left-10 bottom-0 "
              src={storage1}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1}>
        <>
          <div className="w-full h-screen  flex   z-50">
            <img
              className="w-[100px] sm:w-[200px] md:w-[250px] absolute left-3 sm:left-36 md:left-52 -bottom-10  "
              src={ram1}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        <>
          <div className="w-full h-screen  flex   z-50">
            <img
              className="w-[100px] sm:w-[200px] md:w-[250px] absolute left-8 sm:left-32 md:left-52 -bottom-10 sm:-bottom-20 "
              src={ram2}
              alt="cpu1"
            />
          </div>
        </>
      </ParallaxLayer>
    </div>
  );
}
