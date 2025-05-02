import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1726406814674-c3f970ff3423?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <div className="max-w-7xl  mx-auto flex justify-center p-2 items-center min-h-screen">
        <div className="text-center">
          <div className="space-y-4">
            <h1 className="md:text-7xl text-4xl font-bold text-[#4F46E5] ">
              Best Course Online
            </h1>
            <div className="md:w-1/2 mx-auto">
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi non totam tenetur culpa repellendus dolorem odit.
                Commodi ea ipsum dolore blanditiis modi repudiandae veniam
                quaerat iusto? Porro, fugit cum? Fuga.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 justify-center">
              <button className="px-7 py-3 rounded-lg  bg-indigo-500 font-bold uppercase text-white">
                Join Today
              </button>
              <button className="px-7 py-3 rounded-lg border bg-indigo-500 font-bold uppercase text-white">
                View Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
