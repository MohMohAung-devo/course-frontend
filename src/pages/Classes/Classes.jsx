import React from "react";
import Cart from "./Cart";
import usePopularFetch from "../../hook/api/usePopularFetch";

const Classes = () => {
  const { blogs: data, isError, isPending } = usePopularFetch();
  const isEmpty = !data?.data || data.data.length === 0;

  if (isError) return <div>Fail fetch data</div>;
  if (isPending) return <div>Loading.....</div>;
  if (isEmpty) return <div>No data fetch</div>;

  return (
    <div>
      <div className="w-full ">
        <div className="max-w-7xl flex flex-col  mx-auto  items-center text-center mt-28">
          <h1 className="text-4xl  font-bold">
            Our <span className="text-[#4F46E5]">Popular</span> Classes
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-4 md:p-1 lg:p-1  gap-5 mt-10 space-x-6">
            {data.data.map((item) => (
              <Cart item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
