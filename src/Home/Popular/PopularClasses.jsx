import React from "react";
import Cart from "./Cart";

const PopularClasses = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="max-w-7xl flex flex-col  mx-auto  items-center text-center mt-28">
          <h1 className="text-2xl  font-bold">
            Our <span className="text-[#4F46E5]">Popular</span> Classes
          </h1>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
