import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white  shadow p-4 px-2 w-full">
      <div className=" static navbar flex  gap-24 md:mx-12 mx-4 ">
        <div className="flex text-xl font-bold mr-8 items-center">GEtjob</div>

        <nav className="hidden md:flex w-full  items-center  ">
          <div className="flex  justify-center items-center space-x-8">
            <Link className="hover:text-gray-700" to="/">
              Home
            </Link>
            <Link className="hover:text-gray-700" to="/Pages">
              Pages
            </Link>
            <Link className="hover:text-gray-700" to="/Jobs">
              Jobs
            </Link>
            <Link className="hover:text-gray-700" to="/PostJob">
              Post
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <Link className="pl-4 py-2 pr-2  " to="/Login">
              Login
            </Link>
            <Link
              className="px-3 py-2 shadow rounded-full text-white bg-blue-500 hover:bg-blue-600"
              to="/Register"
            >
              Register
            </Link>
          </div>
        </nav>

        <button></button>
      </div>
    </header>
  );
};

export default Navbar;
