import React from "react";
import Cart from "./Cart";

const PopularClasses = ({ datas, isError, isPending }) => {
  console.log("datas", datas);

  const isEmpty = !datas?.data || datas.data.length === 0;

  const renderMessge = (message) => {
    return (
      <div>
        <div className="w-full ">
          <div className="max-w-7xl flex flex-col  mx-auto  items-center text-center mt-28">
            <h1 className="text-2xl  font-bold">
              Our <span className="text-[#4F46E5]">Popular</span> Classes
            </h1>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  if (isError) return renderMessge("Failed to fetch data");
  if (isPending) return renderMessge("Data is loading.....");
  if (isEmpty) return renderMessge("No classes available");

  return (
    <div>
      <div className="w-full ">
        <div className="max-w-7xl flex flex-col  mx-auto  items-center text-center mt-28">
          <h1 className="text-4xl  font-bold">
            Our <span className="text-[#4F46E5]">Popular</span> Classes
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {datas.data.map((item) => (
              <Cart item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
