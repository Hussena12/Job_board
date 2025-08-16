import React, { Suspense } from "react";
import { SearchBar, Spinner } from "../components";
import { Footer } from "@/layout";

import { JobList } from "@/utils/lazyPages";

const Jobs = () => {
  return (
    <div className=" pt-12 ">
      <div className="flex justify-center m-6">
        <SearchBar />
      </div>
      <Suspense fallback={<Spinner />}>
        <JobList />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Jobs;
