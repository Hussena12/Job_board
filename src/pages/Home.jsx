import React from "react";

import { Button, HowItWorks, SearchBar } from "@/components";
import { Link } from "react-router-dom";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Footer } from "@/layout";

const jobData = [
  {
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    postedAgo: "30 days ago",
    jobTitle: "Frontend Developer",
    jobType: ["Full time", "Remote"],
    salary: "$120 - 160k",
    location: "New York, NY",
  },

  {
    companyName: "Amazon",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    postedAgo: "7 days ago",
    jobTitle: "Backend Engineer",
    jobType: ["Full time", "On-site"],
    salary: "$140 - 200k",
    location: "Seattle, WA",
  },
  {
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    postedAgo: "3 days ago",
    jobTitle: "AI Research Scientist",
    jobType: ["Full time", "Hybrid"],
    salary: "$180 - 250k",
    location: "Palo Alto, CA",
  },
];

const Home = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-full z-0">
        <div className="relative z-20 container mx-auto px-4 pt-14 text-white font-poppins">
          <p
            className="text-5xl sm:text-6xl md:text-[4.125rem]  dark:text-[#3ecf8e]
text-gray-900 mx-4 ml:mx-10 sm:mx-6 md:mx-8"
          >
            Find your next opportunity{" "}
          </p>
          <p
            className="  text-sm leading-5 md:text-lg  mt-2 text-gray-700 dark:text-gray-50 mx-4 sm:mx-6 md:mx-8 ml:mx-10
"
          >
            We connect you to top companies hiring now. Whether you're remote,
            hybrid, or on-site – we got you
          </p>
        </div>

        <div className="flex justify-center m-6">
          <SearchBar />
        </div>

        <div className=" mt-5 z-10 ">
          <p className="flex justify-center  dark:text-gray-300 text-primary1">
            Apply featured Jobs
          </p>
          <div className="flex mt-10 flex-wrap gap-3 justify-center ">
            {jobData.map((item, index) => (
              <div
                className="dark:bg-[#171717] border shadow-md dark:border-[#2e2e2e]	 dark:text-gray-200 max-w-[20rem] rounded-xl px-6 py-2 justify-center bg-gray-50"
                key={index}
              >
                <div className="flex justify-between mb-2 mt-2=">
                  <img className="w-8 h-8 " src={item.companyLogo} alt="Logo" />

                  <p className="flex gap-1 items-center border-2 text-sm px-2 rounded-sm hover:bg-gray-100  dark:hover:bg-gray-900 cursor-pointer">
                    <span>Save</span>
                    <BsBookmark size={12} />
                  </p>
                </div>
                <p className="flex flex-col  justify-center">
                  <span className="flex gap-2  ">
                    <span className=" text-sm text-gray-700 dark:text-gray-200 font-semibold">
                      {item.companyName}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300	">
                      {item.postedAgo}
                    </span>
                  </span>
                  <span className="text-lg font-semibold pt-1">
                    {item.jobTitle}
                  </span>
                </p>
                <div className="flex gap-4  ">
                  <p className=" ml-2 bg-gray-200 text-gray-700 dark:text-gray-300 py-1 px-2 text-xs rounded-sm leading-tight dark:bg-[#111111] ">
                    {item.jobType[0]}
                  </p>
                  <p className=" ml-2 bg-gray-200 text-gray-700 dark:text-gray-300 py-1 px-2 text-xs rounded-sm leading-tight  dark:bg-[#111111]">
                    {item.jobType[1]}
                  </p>
                </div>
                <div className="mt-4  text-xs">
                  <p className="mb-2">
                    the job is for all people opened anyone can apply so it is
                    much open for developers{" "}
                  </p>
                  <Link className="underline ">See Details...</Link>
                </div>
                <hr className="border-t border-gray-300 dark:border-gray-700 mb-2" />

                <div className="flex  justify-between">
                  <div>
                    <p className="text-base font-medium text-green-600">
                      {item.salary}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <Button
                      className=""
                      text="Apply now"
                      color="white"
                      bgColor="black"
                      borderRadius="4px"
                      size="2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
