import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-white  shadow p-4 px-2 w-full">
        <div className=" static navbar flex  gap-24 md:mx-12 mx-4 justify-between ">
          <div className="flex text-xl font-bold mr-8 items-center">GEtjob</div>

          <nav className="hidden md:flex w-full  items-center  pl-6 lg:pl-36 md:pl-18">
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

            <div className="flex-1 flex justify-end items-center">
              <Link className="pl-4 py-2 pr-2 " to="/Login">
                Login
              </Link>
              <Link className="" to="/Register">
                <Button
                  text="Register"
                  color="white"
                  bgColor="black"
                  borderRadius="100px"
                  size="4"
                  padding="6px 9px"
                />
              </Link>
            </div>
          </nav>

          <div className="md:hidden flex  items-center text-3xl flex-end">
            <button className="z-20" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6 L18 18 M6 18 L18 6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile view  */}
      </header>

      <div className="bg-half-transparent w-full">
        <div
          className={`fixed md:hidden min-h-screen w-2/3 shadow-xl bg-white right-0 top-0 transform transition-transform duration-300 ease-in-out z-10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div className="flex flex-col justify-center items-center py-24 gap-6  ">
            <Link
              className="hover:text-gray-700"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-gray-700"
              to="/Pages"
              onClick={() => setIsOpen(false)}
            >
              Pages
            </Link>
            <Link
              className="hover:text-gray-700"
              to="/Jobs"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              className="hover:text-gray-700"
              to="/PostJob"
              onClick={() => setIsOpen(false)}
            >
              Post
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
