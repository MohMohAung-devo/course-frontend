import React from "react";
import useInstructorFetch from "../hook/useInstructorFetch";
import Cart from "./Cart";
const Instructor = () => {
  const { instructor: data, pending, error } = useInstructorFetch();

  const isEmpty = !data?.data || data.data.lenght === 0;
  if (error) return <div>No data fetch</div>;
  if (pending) return <div>Loading....</div>;
  if (isEmpty) return <div>No data show.....</div>;
  return (
    <div>
      <div className="w-full ">
        <div className="max-w-7xl flex flex-col  mx-auto  items-center text-center mt-28">
          <h1 className="text-4xl  font-bold">
            Our <span className="text-[#4F46E5]">Instructor</span>
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 p-4 md:p-1 lg:p-1  gap-5 mt-10">
            {data.data.map((item) => (
              <Cart item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
