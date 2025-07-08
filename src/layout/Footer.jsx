import { SocialIcon, ThemeToggle } from "@/components";
import { useStateContext } from "@/contexts/useStateContext";
import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Footer = () => {
  const { currentMode, isToggled, setIsToggled } = useStateContext();
  const currentYear = new Date().getFullYear();

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <>
      <div className="lg:flex md:gap-6 mx-8 md:mx-12 ml:mx-16 border-t-1 border-color dark:border-[#2e2e2e]">
        <div className="flex  flex-col gap-4 my-6 lg:py-6 lg:pr-12">
          <p className="mb-2 dark:text-white">GEtjob</p>
          <SocialIcon />
        </div>
        <div className="flex flex-wrap gap-12  pb-28 pt-4 border-b-1 border-color lg:pt-12">
          <div className="flex flex-col gap-4">
            <p className=" text-md  text-[#000] dark:text-[#fafafa]">
              Job Seekers
            </p>
            <div className="flex flex-col gap-2 text-[#887688] dark:text-[#798989] text-sm ">
              <Link>Create Profile</Link>
              <Link>Job Alerts</Link>
              <Link>Browse Jobs</Link>
              <Link>Contact</Link>
              <Link>Career Tips</Link>
              <Link>Upload Resume</Link>
              <Link>FAQs (Job Seekers)</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-md  text-[#000] dark:text-[#fafafa]">Company</p>
            <div className="flex flex-col gap-2 text-[#887688] text-sm dark:text-[#798989] ">
              <Link>About Us</Link>
              <Link>Contact</Link>
              <Link>Blog/News</Link>
              <Link>Terms & Conditions</Link>
              <Link>Careers</Link>

              <Link>Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-md  text-[#000] dark:text-[#fafafa]">
              Employers
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-sm dark:text-[#798989]">
              <Link>Post a Job</Link>
              <Link>Employer Login</Link>
              <Link>Pricing</Link>
              <Link>Candidate Search</Link>
              <Link>Employer Resources </Link>
              <Link>Contact Sales </Link>
              <Link>Recruiter FAQ</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-md  text-[#000] dark:text-[#fafafa]">
              Legal & Privacy
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-sm dark:text-[#798989]">
              <Link>Privacy Policy</Link>
              <Link>Terms of Service</Link>
              <Link>Cookie Policy</Link>
              <Link>Disclaimer</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-md  text-[#000] dark:text-[#fafafa]">
              Support & Resources
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-sm dark:text-[#798989]">
              <Link>Support</Link>
              <Link>Site Map</Link>
              <Link> Safety Center</Link>
              <Link>Privacy Settings</Link>
              <Link>Accessibility </Link>
              <Link>Feedback</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative border-t-1 dark:border-[#2e2e2e] border-color  mx-8 md:mx-12 ml:mx-16  ">
        <div className="pt-8 pb-8 md:pb-24  flex justify-between">
          <p className="text-[0.65rem] text-gray-500 dark:text-neutral-400">
            &copy; GEtjob Inc {currentYear}
          </p>
          <span
            onClick={handleToggle}
            className="dark:text-neutral-400 text-gray-500 cursor-default"
          >
            {currentMode === "light" ? (
              <Sun className="h-5 w-5 cursor-pointer " />
            ) : (
              <Moon className="h-5 w-5 cursor-pointer" />
            )}
            {isToggled && <ThemeToggle />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
