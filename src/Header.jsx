import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function () {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1150px] py-[10px] items-center flex justify-between mx-auto">
          <div className=" text-[25px] md:text-[40px] font-bold">
            AQEEL Works
          </div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-[20px] text-white gap-10">
            <li>home</li>
            <li>company</li>
            <li>resources</li>
            <li>about</li>
            <li>contacts</li>
          </ul>
          <ul
            className={` duration-300 md:hidden w-full h-screen bg-black fixed  top-[88px] text-white gap-10 ${
              toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            <li className="p-5">home</li>
            <li className="p-5">company</li>
            <li className="p-5">resources</li>
            <li className="p-5">about</li>
            <li className="p-5">contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
