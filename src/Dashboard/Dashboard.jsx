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
      <main className=" overflow-y-auto pb-16">{pages[activePage]}</main>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default Dashboard;
