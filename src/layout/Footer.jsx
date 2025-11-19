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
    <div className="flex flex-col">
      <div className=" max-w-[76rem] lg:flex mt-12 md:gap-8 mx-8 md:mx-12 ml:mx-16 border-t-1 border-color  dark:border-[#2e2e2e] justify-center ">
        <div className="flex  flex-col gap-4 my-6 lg:py-6 lg:pr-12">
          <div className="flex items-center gap-1">
            <img src="/logo.svg" alt="logo" className="w-8 h-8" />
            <p className="text-[1.25rem]">GetJob</p>
          </div>
          <SocialIcon />
        </div>
        <div className="flex flex-wrap gap-12  pb-28 pt-4 lg:pt-12">
          <div className="flex flex-col gap-4">
            <p className=" text-[0.95rem] text-[#000] dark:text-[#fafafa]">
              Job Seekers
            </p>
            <div className="flex flex-col gap-2 text-[#887688] dark:text-[#8c9e9e] text-[0.85rem] ">
              <Link className="footer-hover">Create Profile</Link>
              <Link className="footer-hover">Job Alerts</Link>
              <Link className="footer-hover">Browse Jobs</Link>
              <Link className="footer-hover">Contact</Link>
              <Link className="footer-hover">Career Tips</Link>
              <Link className="footer-hover">Upload Resume</Link>
              <Link className="footer-hover">FAQs (Job Seekers)</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-[0.95rem] text-[#000] dark:text-[#fafafa]">
              Company
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-[0.85rem] dark:text-[#8c9e9e] ">
              <Link className="footer-hover">About Us</Link>
              <Link className="footer-hover">Contact</Link>
              <Link className="footer-hover">Blog/News</Link>
              <Link className="footer-hover">Terms & Conditions</Link>
              <Link className="footer-hover">Careers</Link>
              <Link className="footer-hover">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-[0.95rem] text-[#000] dark:text-[#fafafa]">
              Employers
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-[0.85rem] dark:text-[#8c9e9e] ">
              <Link className="footer-hover">Post a Job</Link>
              <Link className="footer-hover">Employer Login</Link>
              <Link className="footer-hover">Pricing</Link>
              <Link className="footer-hover">Candidate Search</Link>
              <Link className="footer-hover">Employer Resources </Link>
              <Link className="footer-hover">Contact Sales </Link>
              <Link className="footer-hover">Recruiter FAQ</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[0.95rem]  text-[#000] dark:text-[#fafafa]">
              Legal & Privacy
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-[0.85rem] dark:text-[#8c9e9e]">
              <Link className="footer-hover">Privacy Policy</Link>
              <Link className="footer-hover">Terms of Service</Link>
              <Link className="footer-hover">Cookie Policy</Link>
              <Link className="footer-hover">Disclaimer</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[0.95rem] text-[#000] dark:text-[#fafafa]">
              Support & Resources
            </p>
            <div className="flex flex-col gap-2 text-[#887688] text-[0.85rem] dark:text-[#8c9e9e]">
              <Link className="footer-hover">Support</Link>
              <Link className="footer-hover">Site Map</Link>
              <Link className="footer-hover"> Safety Center</Link>
              <Link className="footer-hover">Privacy Settings</Link>
              <Link className="footer-hover">Accessibility </Link>
              <Link className="footer-hover">Feedback</Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative border-t-[0.0625rem] max-w-[76rem] dark:border-[#2e2e2e] border-color  mx-8 md:mx-12 ml:mx-16  ">
        <div className=" pt-8 pb-8 md:pb-24  flex justify-between">
          <p className="text-[0.65rem] text-gray-500 dark:text-neutral-400">
            &copy; GetJob Inc {currentYear}
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
          <button>Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
