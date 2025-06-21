import React from "react";
import back1 from "../assets/back_1.jpg";

import { Button, SearchBar } from "@/components";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const jobData = [
  {
    companyName: "Spotify",
    companyLogo: "https://logo.clearbit.com/spotify.com",
    postedAgo: "30 days ago",
    jobTitle: "Frontend Developer",
    jobType: ["Full time", "Remote"],
    salary: "$120 - 160k",
    location: "New York, NY",
  },
  {
    companyName: "Netflix",
    companyLogo: "https://logo.clearbit.com/netflix.com",
    postedAgo: "15 days ago",
    jobTitle: "UI/UX Designer",
    jobType: ["Contract", "Remote"],
    salary: "$90 - 130k",
    location: "Los Angeles, CA",
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
    <div className="relative  min-h-screen   w-full">
      <div
        style={{
          backgroundImage: `url(${back1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute w-full h-full z-0"
      >
        <div className="relative z-20 container mx-auto px-4 pt-16 text-white font-poppins">
          <p className="text-6xl text-primary1">Find your next opportunity</p>
          <p className="text-xl  mt-2 text-primary2">
            We connect you to top companies hiring now. Whether you're remote,
            hybrid, or on-site – we got you
          </p>
        </div>

        <div className="flex justify-center m-6">
          <SearchBar />
        </div>

        <div className=" mt-12 z-10 ">
          <p className="flex justify-center  text-primary1">
            Apply featured Jobs
          </p>
          <div className="flex mt-10 flex-wrap gap-4 justify-center ">
            {jobData.map((item, index) => (
              <div
                className="bg-white  w-80 rounded-xl px-6 py-2 justify-center "
                key={index}
              >
                <div className="flex justify-between mb-4 mt-2">
                  <img className="w-8 h-8 " src={item.companyLogo} alt="Logo" />

                  <p className="flex gap-1 items-center border-2 px-2 rounded-sm hover:bg-gray-100 cursor-pointer">
                    <span>Save</span>
                    <BsBookmark size={12} />
                  </p>
                </div>
                <p className="flex flex-col  justify-center">
                  <span className="flex gap-2  ">
                    <span className=" text-sm font-semibold">
                      {item.companyName}
                    </span>
                    <span className="text-xs font-semibold text-gray-600	">
                      {item.postedAgo}
                    </span>
                  </span>
                  <span className="text-xl font-semibold py-2">
                    {item.jobTitle}
                  </span>
                </p>
                <div className="flex gap-4 mb-12 ">
                  <p className=" ml-2 bg-gray-200 py-1 px-2  rounded-sm leading-tight">
                    {item.jobType[0]}
                  </p>
                  <p className=" ml-2 bg-gray-200 py-1 px-2 rounded-sm leading-tight">
                    {item.jobType[1]}
                  </p>
                </div>
                <hr className="border-t border-gray-300 my-2" />

                <div className="flex  justify-between">
                  <div>
                    <p className="font-bold">{item.salary}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                  <div>
                    <Button
                      text="Apply now"
                      color="white"
                      bgColor="black"
                      borderRadius="4px"
                      size="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
