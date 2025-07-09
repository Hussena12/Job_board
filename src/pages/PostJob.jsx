import React, { useState, useEffect, useCallback } from "react";
import { useJobs } from "../contexts/JobContext";

import {
  Button,
  CheckBox,
  PostHeader,
  PostInput,
  SelectEmployment,
  StateCitySelector,
  TextEditor,
} from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiSave, FiPlus } from "react-icons/fi";

const PostJob = () => {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const handleSave = (html) => {
    console.log("Saving:", html);
    // Submit to your backend
  };

  const [formData, setFormData] = useState({
    id: Date.now(),
    jobTitle: "",
    jobShift: "",
    jobType: "",
    appLink: "",
    address: "",
    description: "",
    minSalary: "",
    maxSalary: "",
    company: "",
    country: null,
    countryIso: null,
    city: null,
    isNegotiable: false,
  });

  // State to pass initial values to CountryCitySelector in edit mode
  const [initialLocation, setInitialLocation] = useState({
    country: null,
    city: null,
  });

  // Handler for CountryCitySelector
  const handleLocationChange = useCallback(({ country, countryIso, city }) => {
    setFormData((prevData) => ({
      ...prevData,
      country: country,
      countryIso: countryIso,
      city: city,
    }));
  }, []);

  const handleEmploymentChange = useCallback(({ jobType, jobShift }) => {
    setFormData((prevData) => ({
      ...prevData,
      jobType: jobType || "",
      jobShift: jobShift || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      let newData = { ...prevData };
      if (type === "checkbox") {
        newData[name] = checked;

        if (name === "isNegotiable" && checked) {
          newData.isNegotiable = "Negotiable";
          newData.minSalary = "";
          newData.maxSalary = "";
        }
      } else {
        newData[name] = value;
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = { ...formData };

    if (dataToSubmit.isNegotiable) {
      dataToSubmit.minSalary = "";
      dataToSubmit.maxSalary = "";
    }

    console.log(dataToSubmit);
    addJob(dataToSubmit);

    setFormData({
      jobTitle: "",
      jobShift: "",
      jobType: "",
      appLink: "",
      address: "",
      country: null,
      countryIso: null,
      city: null,
      description: "",
      company: "",
      minSalary: "",
      maxSalary: "",
      isNegotiable: false,
    });

    navigate("/MyPostedJob");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="  z-30 flex px-5 md:pr-9 bg-white dark:bg-[#111111] justify-between py-2 border-b-1">
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
            type="submit"
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
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              label="Job title"
              placeholder="Backend engineer"
              className="lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />
            <PostInput
              name="appLink"
              value={formData.appLink}
              onChange={handleChange}
              label="Application link (optional)"
              className="lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />
            <PostInput
              name="company"
              value={formData.company}
              onChange={handleChange}
              label="Company"
              placeholder="Microsoft"
              className=" lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />
            <PostInput
              name="address"
              value={formData.address}
              onChange={handleChange}
              label="Address"
              placeholder=" 123 Addis"
              className=" lg:w-[28rem] w-[16rem] sm:w-[25rem] "
            />

            <div className="flex gap-2 ">
              <StateCitySelector
                onLocationChange={handleLocationChange}
                initialSelectedCountry={initialLocation.country}
              />
            </div>
          </div>
        </div>

        <div className="md:flex border-b-1">
          <PostHeader
            title="2. Description"
            subtitle="Provide a short description about the job"
          ></PostHeader>

          <div className="flex gap-4 mt-5 pb-5">
            <TextEditor
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Put your job description here..."
            />

            {/* <PostInput
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder=" 123 Addis"
              className=" lg:w-[28rem] w-[21rem] h-[12rem] sm:w-[25rem] "
            /> */}
          </div>
        </div>

        <div className="md:flex border-b-1">
          <PostHeader
            title="3. Employment "
            subtitle="Description text goes in here"
          ></PostHeader>

          <div className="flex  mt-5  ">
            <SelectEmployment onTypeChange={handleEmploymentChange} />
          </div>
        </div>

        <div className="md:flex  border-b-1">
          <PostHeader title="4. Salary" subtitle="Get your pay off amount">
            {" "}
          </PostHeader>
          <div className="mt-6 pb-5">
            <div className="flex gap-4">
              <PostInput
                name="minSalary"
                value={formData.minSalary}
                onChange={handleChange}
                label="min-salary"
                placeholder="$20k"
                className="w-32 sm:w-36 lg:w-[10rem] h-[2.375rem]"
              />
              <PostInput
                name="maxSalary"
                value={formData.maxSalary}
                onChange={handleChange}
                label="max-salary"
                placeholder="$100k"
                className=" w-32 sm:w-36 lg:w-[10rem] h-[2.375rem] text-md"
              />
            </div>
            <CheckBox
              checked={formData.isNegotiable}
              onChange={handleChange}
              name="isNegotiable"
              text="Negotiable"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostJob;
