import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();

  const { userName, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ userName, email, password });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold sm:text-3xl text-center">Register</h1>
        <div className="mx-auto max-w-lg mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="userName">UserName</label>
              <input
                type="userName"
                name="userName"
                value={userName}
                onChange={onChange}
                required
                placeholder="UserName...."
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="Email">Email</label>{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Email....."
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="passwrod">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                placeholder="Password..."
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>

            <p className="text-center text-sm">
              Do you have account?
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
