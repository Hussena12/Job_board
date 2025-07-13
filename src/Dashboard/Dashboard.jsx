import React, { useState } from "react";
import SideBar from "./SideBar";
import MyPostedJob from "./MyPostedJob";
import { Home } from "../pages";
import { Jobs, PostJob } from "@/pages";

// import { SignOut } from "@/components";

const pages = {
  home: <Home />,
  jobs: <Jobs />,
  post: <PostJob />,
  myPost: <MyPostedJob />,
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className=" flex flex-col h-min-screen">
      <div className="h-12 flex items-center fixed w-full bg-gray-200 z-50  pl-4 text-2xl ">
        GEtjob
      </div>
      <main className=" overflow-y-auto pb-16 pt-12 bg-[#f8f9fa]">
        {pages[activePage]}
      </main>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default Dashboard;
