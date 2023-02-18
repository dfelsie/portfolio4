import React from "react";
import SvgWaves from "../SvgWaves/SvgWaves";

export default function Header() {
  return (
    <div className="relative h-[105vh]  w-full overflow-hidden">
      <div
        id="headerTextDiv"
        className="absolute top-0 left-0 right-0 bottom-0 mt-[25vh] ml-4 mr-8 md:mx-[12em]
        animate-pop-in transition duration-500
        "
      >
        <div className="absolute top-auto left-0 right-auto bottom-auto max-w-[100vw] md:max-w-3xl">
          <div className="md:pl-2 text-2xl">Hello, this is</div>
          <h1 className="text-3xl md:text-[6vw] leading-tight m-[.2em 0 .5em] font-black">
            Daniel Felsenthal
          </h1>
          <div
            className="
          mt-8 text-2xl font-light mb-4"
          >
            I'm a fullstack engineer with statistical expertise. My work is
            split between web design, server programming, and statistical
            modeling.
          </div>
        </div>
      </div>
      <SvgWaves />
    </div>
  );
}
