import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/layout";

const jobsData = [
  {
    title: "Powered by industry-leading technology",
    text: "Our sophisticated AI-matching technology is at the core of everything we do—and by analyzing billions of user interactions, it’s always getting smarter. It improves the job search experience for millions of people every month and helps businesses of all sizes find and hire the right candidates quickly. ",
    img: "/technology.Webp",
  },
  // {
  //   title: "For job seekers",
  //   text: "We empower job seekers with the tools they need to stand out and get hired. Like a personal recruiter, we track down relevant opportunities in our marketplace, proactively pitch them to hiring managers at top companies, and deliver status updates along the way. We make it easier for people to find work. ",
  //   img: "/jobseekers.Webp",
  //   link: "Explore jobs",
  // },
  // {
  //   title: "For employers",
  //   text: "We match businesses of all sizes with the best people for their open roles. Reaching millions of job seekers through our site, email, and #1 rated job seeker app on iOS and Android , we target the most qualified candidates to apply when a job goes live in our marketplace. The result? More quality candidates and reduced hiring times. ",
  //   img: "/employers.Webp",
  //   link: "Post job",
  // },
];

const AboutUs = () => {
  const [item, setItem] = useState(0);
  return (
    <div className="mt-28 ">
      <div className="flex flex-col items-center mx-9 mb-40 text-[#032b2f] dark:text-gray-200 ">
        <p className="text-xl sm:text-2xl mb-2">Our mission:</p>
        <p className="lg:text-6xl md:text-5xl text-2xl sm:text-4xl mt-6 font-inter ">
          WE ACTIVELY
        </p>
        <p className="lg:text-6xl md:text-5xl text-2xl sm:text-4xl mt-6 font-inter  ">
          CONNECT PEOPLE TO THEIR{" "}
        </p>
        <p className="lg:text-6xl md:text-5xl text-2xl sm:text-4xl mt-6 font-inter">
          NEXT GREAT OPPORTUNITY.
        </p>
      </div>

      <div className="w-full bg-[#002325] dark:bg-[#171717] pb-20 ">
        <div className=" flex justify-center  pt-20  ">
          <p className="w-[36rem] text-sm sm:text-md md:text-lg text-white text-center px-6">
            What started as a way to help small businesses find great candidates
            has grown into a leading online employment marketplace that connects
            millions of job seekers with companies of all sizes.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-12  ">
          <div className="w-72 bg-gray-200 dark:bg-gray-300   rounded-2xl p-11 flex flex-col items-center dark:text-neutral-200 dark:bg-neutral-800 ">
            <p className="text-5xl pb-4">#1</p>
            <p className="text-xl">rated hiring site in Ethiopia</p>
          </div>
          <div className="w-72 bg-gray-200   rounded-2xl p-10 flex flex-col items-center dark:text-neutral-200 dark:bg-neutral-800">
            <p className="text-5xl pb-4">20M+</p>
            <p className="text-xl">
              jobseekers have used GEtjob for their job search needs
            </p>
          </div>
          <div className="w-72 bg-gray-200 dark:bg-gray-300  rounded-2xl p-10 flex flex-col items-center dark:text-neutral-200 dark:bg-neutral-800">
            <p className="text-5xl pb-4">1M+</p>
            <p className="text-xl">
              businesses have come to GEtjob for their hiring needs
            </p>
          </div>

          <div className="w-72 bg-gray-200 dark:bg-gray-300 rounded-2xl p-10 flex flex-col items-center dark:text-neutral-200 dark:bg-neutral-800">
            <p className="text-5xl pb-4">60+</p>
            <p className="text-xl">
              countries citizen in the got eachother here
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex rounded-2xl w-[40rem] md:w-[46rem] ml:w-[51rem] lg:w-[61rem] xl:w-[68rem]  my-12 mx-4 bg-gray-50 shadow border dark:bg-[#171717] py-12 px-12">
          <div className="flex flex-wrap gap-12 md:gap-12 ">
            <div className="flex flex-col lg:w-[48%] md:w-[48%] justify-center ">
              <p className="text-2xl pb-4 font-semibold dark:text-gray-200">
                Powered by <br /> industry-leading technology
              </p>
              <p className=" text-md  text-wrap dark:text-gray-200">
                Our sophisticated AI-matching technology is at the core of
                everything we do—and by analyzing billions of user interactions,
                it’s always getting smarter. It improves the job search
                experience for millions of people every month and helps
                businesses of all sizes find and hire the right candidates
                quickly.
              </p>
              <Link> </Link>
            </div>
            <div className="flex-1  lg:w-[48%] ">
              <img src="/technology.webp" className="md:h-full " />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
