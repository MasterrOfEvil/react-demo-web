import React from "react";

export default function NewsLetter() {
  return (
    <div className=" bg-[#2699fb] p-4 ">
      <div className=" max-w-[1240px] mx-auto md:flex justify-between py-[40px] ">
        <div>
          <h1 className=" text-[20px] md:text-[35px] text-white font-bold ">
            Want to learn latest IT skills?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div>
          <input
            type="text"
            className="p-2 mr-2 rounded text-slate-600"
            placeholder=" Enter Email"
          />
          <button className=" bg-black text-white p-2 rounded my-[20px] ">
            Get Started
          </button>
          <br />
          <p className="text-white">
            We care about the protection of your data. Read our <br />{" "}
            <a href="" className="text-black">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
