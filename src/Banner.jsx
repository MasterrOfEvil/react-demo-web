import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[70px]">
        <div className="max-w-[1240px] my-[25px] md:my-[50px] font-bold text-center p-[24px] mx-auto ">
          <div className=" text-[20px] md:text-[40px] ">learn with us</div>
          <div className=" text-white text-[35px] md:text-[70px] ">
            Grow with us.
          </div>
          <div className=" text-[25px] md:text-[50px] text-white ">
            Learn
            <Typed
              className="p-4"
              strings={["Web Development", "Marketing "]}
              typeSpeed={80}
              loop={true}
              backSpeed={50}
            />
          </div>
          <button className=" bg-black text-white p-2.5 rounded my-[20px] ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
