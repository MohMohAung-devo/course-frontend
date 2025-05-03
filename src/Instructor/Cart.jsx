import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="shadow-xl rounded-xl p-3 flex flex-col justify-between content-center border overflow-hidden hover:bg-indigo-200 hover:text-white cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div key={item.id}>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-20 rounded-full mx-auto"
        />
        <div className="p-4 space-y-2">
          <p>{item.name}</p>
          <p>{item.instructorEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
