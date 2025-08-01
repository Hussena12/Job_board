import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "@/components";
import { useSavedJobs } from "@/contexts/useSavedProvider";

const Tags = ({ children }) => {
  return (
    <div>
      <div className=" ml-2 bg-gray-200 text-gray-700  py-[0.1rem] px-[0.3rem] font-semibold text-xs rounded-sm leading-tight dark:bg-[#111111] dark:text-[#D3D3D3]">
        {children}
      </div>
    </div>
  );
};

const PostCard = ({ job }) => {
  const { handleSaveJob, savedJobs } = useSavedJobs();
  const isSaved = savedJobs.some((savedJobs) => savedJobs.id === job.id);
  return (
    <div className="flex mt-10 flex-wrap gap-4 justify-center ">
      <div className=" dark:bg-[#171717] border shadow-md dark:border-[#2e2e2e]	 dark:text-gray-200 max-w-[20rem] rounded-xl px-6 py-2 justify-center bg-gray-50">
        <div className="flex justify-between mb-2 mt-2=">
          <img
            className="w-8 h-8 "
            src={job.employer_logo || "https://logo.clearbit.com/google.com"}
            alt="Logo"
          />

          <p
            className="flex gap-1 items-center border-2 text-sm px-2 rounded-sm hover:bg-gray-100  dark:hover:bg-gray-900 cursor-pointer"
            onClick={() => handleSaveJob(job)}
          >
            <span>Save</span>
            {isSaved ? <BsBookmarkFill size={12} /> : <BsBookmark size={12} />}
          </p>
        </div>
        <p className="flex flex-col  justify-center">
          <span className="flex gap-2  ">
            <span className=" text-sm text-gray-700 font-semibold  dark:text-gray-200">
              {job.company || "Unknown Company"}
            </span>
            <span className="text-xs font-semibold text-gray-600	dark:text-gray-300">
              {job.posted_at || "Recently posted"}
            </span>
          </span>
          <span className="text-lg  font-semibold pt-1 ">{job.jobTitle}</span>
        </p>

        <div className="flex gap-4   ">
          <Tags>{job.jobShift}</Tags>
          <Tags>{job.jobType}</Tags>
        </div>

        <div className="mt-4  text-xs">
          <p className="mb-2 overflow-wrap break-words">{job.description}</p>
          <Link className="underline">See Details...</Link>
        </div>
        <hr className="border-t border-gray-300 mb-2" />

        <div className="flex  justify-between">
          <div>
            <p className=" text-base font-medium text-green-600">
              {job.isNegotiable ? (
                "Negotiable"
              ) : (
                <span>
                  ${job.minSalary}k - ${job.maxSalary}k
                </span>
              )}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {job.city}, {job.countryIso}
            </p>
          </div>
          <div>
            <Button
              className="text-sm"
              text="Apply now"
              color="white"
              bgColor="black"
              borderRadius="4px"
              size="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
