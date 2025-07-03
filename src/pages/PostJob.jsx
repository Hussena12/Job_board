import React from "react";

import {
  Button,
  CheckBox,
  JobCard,
  PostHeader,
  PostInput,
  PostSelect,
} from "@/components";
import { Link } from "react-router-dom";
import { FiEye, FiSave, FiPlus } from "react-icons/fi";
import Select from "react-select";

const options1 = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Weekend", label: "Weekend" },
];

const options2 = [
  { value: "On-site", label: "On-site" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
];

const PostJob = () => {
  return (
    <div>
      <div className="flex px-5 md:pr-9 justify-between py-2 border-b-1">
        <div className="flex items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-5 dark:text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6 L18 18 M6 18 L18 6"
              />
            </svg>
          </Link>
        </div>

        <div className="flex gap-3">
          <p className="flex gap-1 items-center text-sm">
            <span>
              <FiSave className="dark:text-gray-200" />
            </span>
            <span className="dark:text-gray-200">Save Draft</span>
          </p>
          <Button
            className="text-sm"
            text="Preview"
            color="white"
            bgColor="black"
            borderRadius="50px"
            size="2"
            icon={<FiEye />}
          />
          <Button
            className="text-sm"
            text="Post job"
            color="white"
            bgColor="black"
            borderRadius="50px"
            size="2"
            icon={<FiPlus />}
          />
        </div>
      </div>

      <div className="py-6 mx-3 px-4 ">
        <div className=" border-b-1 pb-6 ">
          <p className="text-2xl font-semibold dark:text-gray-100">
            Create Jobs
          </p>
          <p className="text-sm dark:text-gray-200">
            Define details, budget and outline preferences
          </p>
        </div>

        <div className="md:flex border-b-1">
          <PostHeader
            title="1. Job Details"
            subtitle="Please use a description title"
          ></PostHeader>

          <div className="mt-8  ">
            <PostInput
              label="Job title"
              placeholder="Backend engineer"
              className="lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />
            <PostInput
              label="Application link (optional)"
              className="lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />
            <PostInput
              label="Address"
              placeholder=" 123 Addis"
              className=" lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />

            <div className="flex gap-2 ">
              <PostSelect className="w-28 sm:w-32 lg:w-[9rem]" label="State" />
              <PostSelect className="w-28 sm:w-32 lg:w-[9rem]" label="City" />

              <PostInput
                label="Zip Code"
                placeholder=" 1234"
                className="  w-[6.5rem] sm:w-32 lg:w-[9rem] h-[2.375rem]"
              />
            </div>
          </div>
        </div>

        <div className="md:flex border-b-1">
          <PostHeader
            title="2. Description"
            subtitle="Provide a short description about the job"
          ></PostHeader>

          <div className="flex gap-4 mt-5   pb-5"></div>
        </div>

        <div className="md:flex border-b-1">
          <PostHeader
            title="3. Employment type"
            subtitle="Description text goes in here"
          ></PostHeader>
          <div className="flex gap-4 mt-5   pb-5">
            <PostSelect
              className="w-32 sm:w-36 lg:w-[10rem]"
              label="Employment type"
            />
            <PostSelect
              className="w-32 sm:w-36 lg:w-[10rem]"
              label="Shift type"
            />
          </div>
        </div>

        <div className="md:flex  border-b-1">
          <PostHeader title="4. Salary" subtitle="Get your pay off amount">
            {" "}
          </PostHeader>
          <div className="mt-6 pb-5">
            <div className="flex gap-4">
              <PostInput
                label="min-salary"
                placeholder="$20k"
                className="w-32 sm:w-36 lg:w-[10rem] h-[2.375rem]"
              />
              <PostInput
                label="max-salary"
                placeholder="$100k"
                className=" w-32 sm:w-36 lg:w-[10rem] h-[2.375rem] text-md"
              />
            </div>
            <CheckBox id="Negotiable" text="Negotiable" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
