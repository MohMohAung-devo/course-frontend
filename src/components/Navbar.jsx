import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const { user, logout } = useAuth();

  const handleProfieShow = () => {
    setShow(!show);
  };

  const handleMenuShow = () => {
    setMenuShow(!menuShow);
  };

  return (
    <div>
      <div className="w-full bg-indigo-600">
        <div className="max-w-7xl flex justify-between mx-auto p-3 md:p-3 items-center text-white font-bold cursor-pointer relative">
          <Link to="/" className="font-bold text-2xl">
            Logo
          </Link>
          <div className="md:hidden ">
            <div>
              <p onClick={handleMenuShow}>=</p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-4">
              {/* {!user && <Link to="/login">Login</Link>}
              {!user && <Link to="/register">Register</Link>} */}
              <Link to="/">Home</Link>
              <Link to="/instructors">Instructors</Link>
              <Link to="/classes">Classes</Link>
              {!user ? (
                <p>Profile</p>
              ) : (
                <p onClick={handleProfieShow}>{user.userName}</p>
              )}
              {show && (
                <div className="absolute rounded-lg w-40 h-36 bg-black text-white top-20 right-10">
                  <div className="p-4">
                    <p className="text-sm">Email: {user.email}</p>
                    <p className="text-sm">Setting</p>
                  </div>
                </div>
              )}
              {!user && (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
              {user && (
                <button
                  className="bg-white text-black text-sm p-1 border rounded-md"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile view */}

          <AnimatePresence initial={false}>
            {menuShow && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute md:hidden w-full top-14  left-0 right-0 z-50"
              >
                <div className="  w-full top-14 left-0 right-0 ">
                  <div className="w-full bg-indigo-600  text-white  p-5 mx-auto overflow-y-auto">
                    <div
                      className="flex flex-col items-center justify-center space-y-5"
                      onClick={() => setMenuShow(false)}
                    >
                      <Link to="/">Home</Link>
                      <Link to="/instructors" className="text-white">
                        Instructors
                      </Link>
                      <Link to="/classes">Classes</Link>
                      {!user ? (
                        <p>Profile</p>
                      ) : (
                        <p onClick={handleProfieShow}>{user.userName}</p>
                      )}
                      {show && (
                        <div className="absolute rounded-lg w-40 h-36 bg-black text-white ">
                          <div className="p-4">
                            <p className="text-sm">Email: {user.email}</p>
                            <p className="text-sm">Setting</p>
                          </div>
                        </div>
                      )}
                      {!user ? (
                        <>
                          <Link to="/login">Login</Link>
                          <Link to="/register">Register</Link>
                        </>
                      ) : (
                        <Link
                          className="bg-white text-black  border rounded-md"
                          onClick={logout}
                        >
                          Logout
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
