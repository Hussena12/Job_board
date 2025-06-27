import React from "react";
import { AuthForm2Input, AuthFormInput } from "@/components/auth";

const ContactUs = () => {
  return (
    <div className="m-6">
      <div className="flex flex-wrap bg-gray-100 justify-center gap-6 p-6">
        <div className="p-4 ">
          <p className="text-3xl font-semibold mb-1">Contact Us</p>
          <p className="pb-5">Any question? We would be happy to help you!</p>
          <div className="flex flex-col gap-6">
            <p className="py-3 px-4 border-1 border-color rounded-md">
              <span></span>
              <span>+0123456789</span>
            </p>
            <p className="py-3 px-4 border-1 border-color bg-[#1F2937] rounded-md text-gray-200">
              <span></span>
              <span>example@email.com</span>
            </p>
            <p className="py-3 px-4 border-1 border-color rounded-md">
              <span></span>
              <span>775 Rolling Green Rd.</span>
            </p>
          </div>
        </div>
        <div className="p-4 ">
          <AuthForm2Input />
          <AuthFormInput placeholder="email" label="Email" />
          <AuthFormInput placeholder="+923456789" label="Phone Number" />
          <div className="flex flex-col ">
            <label className="text-gray-600 dark:text-gray-300">Message</label>

            <input
              className="bg-white dark:bg-[#1F2937] dark:text-gray-100 shadow w-[20rem] px-2 pt-3 pb-12 border-t-1 border-color rounded-md my-1 "
              placeholder="Type your message here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
