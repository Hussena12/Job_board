import React from "react";
// import { registerLicense } from "@syncfusion/ej2-base";
// registerLicense(
//   "MzkyNzAzOUAzMTM5MmUzNDJlMzBqdkpjdzlQa0NFZkR1TlRad0N2RURrZHJDaGI2SE9NbVRhL2FuL2RaVmtrPQ=="
// );

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

const options = [
  { value: "all", label: "All" },
  { value: "type", label: "type" },
  { value: "one", label: "one" },
  { value: "two", label: "two" },
];

const PostJob = () => {
  return (
    <div>
      <div className="flex px-5 md:pr-9 justify-between bg-gray-50 py-2 border-b-1">
        <div className="flex items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-5"
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
              <FiSave />
            </span>
            <span>Save Draft</span>
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

      <div className="py-6 mx-3 px-4 bg-gray-50 ">
        <div className=" border-b-1 pb-6 border-color">
          <p className="text-2xl font-semibold">Create Jobs</p>
          <p className="text-sm">
            Define details, budget and outline preferences
          </p>
        </div>

        <PostHeader
          title="1. Job Details"
          subtitle="Please use a description title"
        >
          <div className="mt-8">
            <PostInput label="Job title" placeholder="Backend engineer" />
            <PostInput label="Application link (optional) " />
            <PostInput label="Address" placeholder=" 123 Addis " />

            <div className="flex gap-2">
              <div>
                <label className="text-gray-600 dark:text-gray-300 text-sm">
                  City
                </label>
                <Select
                  options={options}
                  className="w-28"
                  menuPosition="fixed"
                />
              </div>
              <div>
                <label className="text-gray-600 dark:text-gray-300 text-sm">
                  State
                </label>
                <Select
                  options={options}
                  className="w-28"
                  menuPosition="fixed"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 dark:text-gray-300 text-sm ">
                  Zip Code
                </label>
                <input
                  className="bg-white dark:bg-[#1F2937] dark:text-gray-100  w-[6.5rem] px-2 h-[2.375rem]  border-color rounded-sm my-1 dark:border-[#b0b0b010] dark:placeholder-gray-400 border-1  text-xs $"
                  placeholder="1234"
                />
              </div>
            </div>
          </div>
        </PostHeader>

        <PostHeader>
          <PostSelect label1="Employment type" label2="Shift type" />
        </PostHeader>

        <PostHeader
          title="3. Employment type"
          subtitle="Description text goes in here"
        >
          <div className="mt-4">
            <CheckBox id="full" text="Full-time" />
            <CheckBox id="part" text="Part-time" />
            <CheckBox id="weekend" text="Week-end" />
          </div>
        </PostHeader>

        <PostHeader></PostHeader>
      </div>
    </div>
  );
};

export default PostJob;
