import React from "react";
import { JobList } from "@/components";
import { SearchBar } from "../components";

const Jobs = () => {
  return (
    <div className="  ">
      <div className="flex justify-center m-6">
        <SearchBar />
      </div>
      <JobList />
    </div>
  );
};

export default Jobs;
