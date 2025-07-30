import React from "react";
import { useStateContext } from "../contexts/useStateContext";
import { Link } from "react-router-dom";
import { ThemeToggle } from ".";

const MobileNav = () => {
  const { isOpen, setIsOpen, setMode, currentMode } = useStateContext();
  return (
    <>
      <div
        className={`fixed md:hidden min-h-full w-2/3 shadow-xl bg-white dark:bg-[#171717] right-0 top-0 transform transition-transform duration-300 ease-in-out z-30  border  ${
          isOpen ? "translate-x-0" : "translate-x-full "
        } `}
      >
        <div className=" m-6">
          <div className="flex flex-col justify-center items-center pt-16 pb-6 gap-1 dark:text-gray-200 text-center">
            <Link
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/Jobs"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <Link
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/PostJob"
              onClick={() => setIsOpen(false)}
            >
              Post
            </Link>{" "}
            <Link
              onClick={() => setIsOpen(false)}
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/AboutUs"
            >
              About Us
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/ContactUs"
            >
              Contact Us
            </Link>
            {/* <Link
              onClick={() => setIsOpen(false)}
              className="w-full rounded-sm hover:text-gray-700 py-2 hover:bg-gray-100  dark:hover:bg-[#121212] dark:text-gray-200"
              to="/Dashboard"
            >
              Dashboard
            </Link> */}
          </div>

          <div className="mt-10 flex flex-col gap-4  items-center ">
            <div className="  ">
              <Link
                to="/Login"
                onClick={() => setIsOpen(false)}
                className="flex justify-center py-2 px-4 rounded-md border-1 text-black font-bold  w-64 dark:text-gray-200"
              >
                Login
              </Link>
            </div>
            <div className=" ">
              <Link
                to="/Register"
                onClick={() => setIsOpen(false)}
                className="flex justify-center py-2 px-4 rounded-md bg-[#1F2937] text-white  w-64"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
