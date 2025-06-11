import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex justify-between pt-4 bg-white  shadow p-4 items-center px-12">
        <div className="flex-1 text-xl font-bold ">GEtjob</div>
        <div className="flex-1 space-x-6   ">
          <Link className="hover:text-gray-700" to="/">
            home
          </Link>
          <Link className="hover:text-gray-700" to="/Pages">
            Pages
          </Link>

          <Link className="hover:text-gray-700" to="/Jobs">
            Jobs
          </Link>
          <Link className="hover:text-gray-700" to="/PostJob">
            Post a Job
          </Link>
        </div>
        <Link
          className=" px-4 py-2 shadow rounded-full text-white bg-blue-500 hover:bg-blue-600 mr-12"
          to="/Register"
        >
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
