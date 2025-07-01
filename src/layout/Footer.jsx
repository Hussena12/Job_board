import { SocialIcon } from "@/components";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:flex md:gap-6 mx-6 md:mx-24 border-t-1 border-color">
      <div className="flex  flex-col gap-4 my-6 lg:py-6 lg:pr-12">
        <p className="mb-2">GEtjob</p>
        <SocialIcon />
      </div>
      <div className="flex flex-wrap gap-12  pb-28 pt-4 border-b-1 border-color lg:pt-12">
        <div className="flex flex-col gap-4">
          <p className=" text-md  text-[#000]">Job Seekers</p>
          <div className="flex flex-col gap-2 text-[#887688] text-sm ">
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
          <p className=" text-md  text-[#000]">Company</p>
          <div className="flex flex-col gap-2 text-[#887688] text-sm ">
            <Link>About Us</Link>
            <Link>Contact</Link>
            <Link>Blog/News</Link>
            <Link>Terms & Conditions</Link>
            <Link>Careers</Link>

            <Link>Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-md  text-[#000]">Employers</p>
          <div className="flex flex-col gap-2 text-[#887688] text-sm ">
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
          <p className=" text-md  text-[#000]">Legal & Privacy</p>
          <div className="flex flex-col gap-2 text-[#887688] text-sm ">
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Cookie Policy</Link>
            <Link>Disclaimer</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-md  text-[#000]">Support & Resources</p>
          <div className="flex flex-col gap-2 text-[#887688] text-sm ">
            <Link>Help Center/Support</Link>
            <Link>Site Map</Link>
            <Link>Trust & Safety Center</Link>
            <Link>Privacy Settings</Link>
            <Link>Accessibility Statement</Link>
            <Link>Feedback</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
