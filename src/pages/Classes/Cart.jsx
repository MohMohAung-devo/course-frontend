import React from "react";

const Cart = ({ item }) => {
  return (
    <div className="shadow-lg rounded-lg p-3 flex flex-col justify-between border overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div key={item.id}>
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <div className="p-4 space-y-2">
          <h3 className="text-xl font-bold text-[#4F46E5] ">
            Course Title:<span> {item.title}</span>
          </h3>
          <p className="text-md ">
            Instructor:<span className="font-semibold"> {item.instructor}</span>
          </p>

          <p className="text-md ">
            Course Price: <span className="font-semibold">${item.price}</span>
          </p>
          <p className="text-md ">
            TotalStudent:
            <span className="font-semibold">{item.totalStudent}</span>{" "}
          </p>
          <p className="text-md">
            ReceivedStudent:{" "}
            <span className="font-semibold">{item.receivedStudent}</span>
          </p>
          <p className="text-md ">
            AvailabelSeats:
            <span className="font-semibold"> {item.availableSeats}</span>
          </p>
          <div className="w-full flex flex-1 justify-between">
            <p className="text-md shadow-lg">StartDate:{item.startDate}</p>
            <p className="text-md shadow-lg">EndDate:{item.endDate}</p>
          </div>
          <button className="w-full bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-600 transition-colors duration-300">
            Enrolled
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
