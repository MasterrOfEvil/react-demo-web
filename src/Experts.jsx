import React from "react";
import laptop from "./imgs/laptop.jpeg";

export default function () {
  return (
    <div className="max-w-[1240px] mx-auto p-3 my-10 md:grid grid-cols-2 ">
      <div className=" col-span-1 md:w-[80%] text-center ">
        <img src={laptop} alt="" width="500px" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center ">
        <h1 className=" text-[#00df9a] font-bold my-3 pt-5 ">
          Learn from experts
        </h1>
        <p className=" my-2 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veniam magni consequatur autem eaque, explicabo voluptates, est illo,
          quo minus qui adipisci corrupti.
        </p>
        <button className=" bg-black w-[30%] text-white p-2.5 rounded ">
          Get Started
        </button>
      </div>
    </div>
  );
}
