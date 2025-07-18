import React, { Children } from "react";

import { Button } from "@/components";
import { Link } from "react-router-dom";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useJobs } from "@/hooks/useJobs";
import { ApplyButton } from "@/components";

const Tags = ({ children }) => {
  return (
    <div>
      <p className=" ml-2 bg-gray-200 text-gray-700  py-[0.1rem] px-[0.3rem] font-semibold text-xs rounded-sm leading-tight dark:bg-[#111111] dark:text-[#D3D3D3]">
        {children}
      </p>
    </div>
  );
};

const JobCard = ({ job }) => {
  const directLink = job.apply_options?.find((opt) => opt.is_direct);

  const JobTitle = job.job_title.split(" ").slice(0, 3).join(" ");

  const Employer = job.employer_name.split(" ").slice(0, 2).join(" ");

  return (
    <div className="flex mt-10 flex-wrap gap-4 justify-center ">
      <div className="  dark:bg-[#171717]  border shadow-md dark:border-gray-900	 dark:text-gray-200 w-[21rem] rounded-xl px-6 py-2 justify-center bg-gray-50">
        <div className="flex justify-between mb-2 mt-2=">
          <img
            className="w-7 h-7 "
            src={job.employer_logo || "https://logo.clearbit.com/google.com"}
            alt="Logo"
          />

          <p className="flex gap-1 items-center border-2 text-sm px-2 rounded-sm hover:bg-gray-100  dark:hover:bg-gray-900 cursor-pointer">
            <span>Save</span>
            <BsBookmark size={12} />
          </p>
        </div>
        <p className="flex flex-col  justify-center">
          <span className="flex gap-2  ">
            <span className=" text-sm text-gray-700 font-semibold  dark:text-gray-300">
              {Employer || "Unknown Company"}
            </span>
            <span className="text-xs font-semibold text-gray-600	dark:text-gray-400">
              {job.posted_at || "Recently posted"}
            </span>
          </span>
          <span className="text-md font-semibold ">{JobTitle}</span>
        </p>

        <div className="flex gap-4   ">
          <Tags>{job.job_employment_type}</Tags>
          <Tags>{job.job_is_remote ? "Remote" : "On-site"}</Tags>
        </div>

        <div className="mt-4  text-xs">
          <p className="mb-2">
            {job.job_description?.slice(0, 100) ||
              "No description available..."}
          </p>
          <Link to={`/job/${job.job_id}`} className="underline">
            See Details...
          </Link>
        </div>
        <hr className="border-t border-gray-300 mb-2" />

        <div className="flex  justify-between">
          <div>
            <p className="text-base font-medium text-green-600">
              {job.job_salary || "Negotiable"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {job.job_city || "Location unknown"}
            </p>
          </div>
          <div>
            <ApplyButton apply_options={job.apply_options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
