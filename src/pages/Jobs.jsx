import React from "react";
import { JobList } from "@/components";
import { SearchBar } from "../components";
import { Footer } from "@/layout";

const Jobs = () => {
  return (
    <div className="  ">
      <div className="flex justify-center m-6">
        <SearchBar />
      </div>
      <JobList />
      <Footer />
    </div>
  );
};

export default Jobs;
