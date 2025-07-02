import React from "react";
import { ContactForm, Contact2Form, SocialIcon } from "@/components";
import { FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-wrap m-6 justify-center gap-6 p-6 lg:border-y-1 rounded-md dark:text-gray-50 ">
      <div className="flex-1 flex justify-center ml:w-[50%]  ">
        <div className="py-4  max-w-[30rem]   ">
          <p className="text-3xl font-semibold mb-1 dark:text-[#fff]">
            Contact Us
          </p>
          <p className="pb-5 dark:text-[#b0b0b0]">
            Any question? We would be happy to help you!
          </p>
          <div className="flex flex-col gap-6">
            <p className="py-3 px-4 border-1 border-color dark:border-gray-800  rounded-md">
              <span></span>
              <span>+0123456789</span>
            </p>
            <p className="py-3 px-4 border-1 border-color bg-[#1F2937] dark:bg-[#171717] rounded-md text-gray-200 ">
              <span></span>
              <span>example@email.com</span>
            </p>
            <p className="py-3 px-4 border-1 border-color dark:border-gray-800 rounded-md">
              <span></span>
              <span>775 Rolling Green Rd.</span>
            </p>
          </div>
          <div className=" flex mb-4 mt-12 justify-center">
            <SocialIcon />
          </div>
        </div>
      </div>

      <div className="lg:w-px bg-gray-200 dark:bg-gray-700"></div>

      <div className="flex-1 flex justify-center ml:w-[50%] ">
        <div className="py-4 max-w-[30rem]  rounded-md  ">
          <Contact2Form label1="First name" label2="Last name" />
          <ContactForm placeholder="example@email.com" label="Email" />
          <ContactForm placeholder="+923456789" label="Phone Number" />
          <div className="flex justify-center">
            <div className="flex flex-col mt-4 ">
              <label className="text-gray-600 dark:text-gray-300">
                Message
              </label>

              <input
                className="bg-white dark:bg-[#171717] dark:text-gray-100 shadow lg:w-[22rem]   xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 pt-3 pb-16 border-t-1 border-color rounded-md my-1 border dark:border-[#b0b0b010] dark:placeholder-gray-400"
                placeholder="Type your message here..."
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#1F2937] dark:bg-[#000] text-gray-300 dark:text-white shadow lg:w-[22rem] md:w-[18rem] ml:w-[21rem] xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 text-md flex gap-3 justify-center items-center dark:border-[#b0b0b010]">
              <p>Send Message </p>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
