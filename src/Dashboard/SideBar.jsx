import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      // Somewhere in your app where appropriate, but not in the navbar
      <Link to="/MyPostedJob" className="hidden">
        My Posted Jobs
      </Link>
    </div>
  );
};

export default SideBar;
