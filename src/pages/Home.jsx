import React from "react";

import { FeaturedJob, HowItWorks, SearchBar } from "@/components";
import { PiSparkleFill } from "react-icons/pi";

import { Footer } from "@/layout";

const Home = () => {
  return (
    <div className="  w-full pt-12 bg-cover">
      <div className=" flex flex-col items-center w-full h-full z-0">
        <div className="flex flex-col items-center   container mx-auto px-4 pt-14 text-white font-poppins">
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

        <div className=" mt-2  ">
          <div className="flex justify-center ">
            <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#3ecf8e] hover:bg-[#2ebd6b] transition-colors duration-200 text-white font-semibold text-lg">
              <PiSparkleFill size={28} />
              Featured Jobs
            </button>
          </div>

          <FeaturedJob />
        </div>
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
