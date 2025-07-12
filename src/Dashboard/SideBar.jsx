import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" fixed bottom-0 ">
      <div className="flex text-sm">
        <Link to="/MyPostedJob" className="">
          Posted Jobs
        </Link>
        <Link className="hover:text-[#3ecf8e]" to="/Jobs">
          Jobs
        </Link>
        <Link className="hover:text-[#3ecf8e] " to="/PostJob">
          Post
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
