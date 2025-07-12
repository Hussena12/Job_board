import React from "react";
import { FiHome, FiBriefcase, FiPlusCircle, FiList } from "react-icons/fi";

const SideBar = ({ activePage, setActivePage }) => {
  return (
    <div className=" fixed bottom-0 w-full">
      <div className="flex gap-10  text-gray-700 bg-white z-50 h-16 justify-center">
        <button
          onClick={() => setActivePage("home")}
          className={`flex flex-col justify-center items-center `}
        >
          <FiHome className="text-[1.4rem]" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActivePage("jobs")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiBriefcase className="text-[1.4rem]" />
          <span>Jobs</span>
        </button>
        <button
          onClick={() => setActivePage("post")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiPlusCircle className="text-[1.4rem]" />
          <span>Post</span>
        </button>
        <button
          onClick={() => setActivePage("myPost")}
          className={`flex flex-col justify-center items-center`}
        >
          <FiList className="text-[1.4rem]" />
          <span>My Post</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
