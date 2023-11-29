import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-400 flex justify-between p-5 items-center">
        <div className="flex space-x-5 md:space-x-8 items-center md:ml-14  ">
          <h2 className="font-bold md:text-2xl">LOGO</h2>
          <Link className="md:text-lg">Home</Link>
        </div>
        <div className="space-x-4 md:space-x-6 md:mr-14">
          <button className="px-3 md:px-5 py-2 bg-blue-400 rounded-lg  font-semibold ">
            Login
          </button>
          <button className="px-3 md:px-5 py-2 bg-blue-200 rounded-lg  font-semibold ">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
