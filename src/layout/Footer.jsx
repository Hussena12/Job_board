import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mx-12 md:mx-24 flex justify-center border-t-1 border-color">
      <div className="flex flex-wrap gap-24  my-28">
        <div className="flex items-center flex-col gap-6">
          <div className="pb-2 text-xl font-semibold text-[#666]">GEtjob</div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <p>
              Copyright © 2025 by GEtjob,
              <br /> Inc. All rights reserved
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="pb-2 text-xl font-semibold text-[#666]">Company</p>
          <div className="flex flex-col gap-3 text-[#887688] text-lg">
            <Link>About Us</Link>
            <Link>Contact</Link>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="pb-2 text-xl font-semibold text-[#555555]">
            Job Seekers
          </p>
          <div className="flex flex-col gap-3 text-[#887688] text-lg">
            <Link>Browse Jobs</Link>
            <Link>Contact</Link>
            <Link>Career Tips</Link>
            <Link>Upload Resume</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="pb-2 text-xl font-semibold text-[#555555]">Employers</p>
          <div className="flex flex-col gap-3 text-[#887688] text-lg">
            <Link>Post a Job</Link>
            <Link>Employer Login</Link>
            <Link>Pricing</Link>
            <Link>Recruiter FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="pb-2 text-xl font-semibold text-[#555555]">Follow Us</p>
          <div className="flex flex-col gap-3 text-[#887688] text-lg">
            <Link>FaceBook</Link>
            <Link>Twitter / X</Link>
            <Link>Linkedin</Link>
            <Link>Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
