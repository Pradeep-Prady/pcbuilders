import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
 

  useEffect(() => {


     
  },[])

  return (
    <div
      className={`bg-transparent fixed z-50  top-0 left-0 right-0 flex items-center justify-between px-2 sm:px-16 md:px-30 lg:px-40 py-3 sm:py-5 text-mywhite `}
    >
      <div>
        <img src={logo} alt="logo" className="h-[40px] sm:h-[50px]" />
      </div>
      <div className="">
        <a
          className="font-bold hover:underline  sm:px-2 py-1  sm:text-xl  rounded-lg"
          href="https://wa.me/+919025380083"
          target="_blank"
          rel="noreferrer"
        >
          Sales Enquiry
        </a>
      </div>
    </div>
  );
}
