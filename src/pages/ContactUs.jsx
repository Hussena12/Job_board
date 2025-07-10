import React, { useRef, useState } from "react";
import {
  ContactForm,
  Contact2Form,
  SocialIcon,
  SuccessContact,
} from "@/components";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_35t2o59",
        "template_k111xf3",
        form.current,
        "r772-5flBvKZnSDV6"
      );

      setIsSuccess(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);

        setIsSubmitting(false);
      });

      e.target.reset();
    } catch (err) {
      alert("failed to send:" + err.text);
    } finally {
      setIsSuccess(false);
    }
  };

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
            <p className="py-3 px-4 border-1 border-color dark:border-[#2e2e2e]  rounded-md">
              <span></span>
              <span>+0123456789</span>
            </p>
            <p className="py-3 px-4 border-1 border-color bg-[#1F2937] dark:bg-[#171717] rounded-md text-gray-200 ">
              <span></span>
              <span>example@email.com</span>
            </p>
            <p className="py-3 px-4 border-1 border-color dark:border-[#2e2e2e] rounded-md">
              <span></span>
              <span>775 Rolling Green Rd.</span>
            </p>
          </div>
          <div className=" flex mb-4 mt-12 justify-center">
            <SocialIcon />
          </div>
        </div>
      </div>

      <div className="lg:w-px bg-gray-200 dark:bg-[#2e2e2e]"></div>
      {isSuccess && (
        <div className="success-message flex gap-2">
          <span className="success-check w-6 h-6 rounded-full bg-[#4caf50] text-white ">
            ✓
          </span>
          <p>Thank you! We've received your message.</p>
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="flex-1 flex justify-center ml:w-[50%] "
      >
        <div className="py-4 max-w-[30rem]  rounded-md  ">
          <Contact2Form label1="First name" label2="Last name" />
          <ContactForm
            type="email"
            name="email"
            placeholder="example@email.com"
            label="Email"
          />
          <ContactForm
            type="text"
            name="text"
            placeholder="+251923456789"
            label="Phone Number (optional)"
          />
          <div className="flex justify-center">
            <div className="flex flex-col mt-4 ">
              <label className="text-gray-600 dark:text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                required
                className="bg-white dark:border-[#b0b0b010]   border-t-1 focus:outline-none focus:dark:border-[#2e2e2e] dark:bg-[#171717] dark:text-gray-100 shadow lg:w-[22rem]   xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 pt-3 pb-16  border-color rounded-md my-1  dark:placeholder-gray-400"
                placeholder="Type your message here..."
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#1F2937] dark:bg-[#000] text-gray-300 dark:text-white shadow lg:w-[22rem] md:w-[18rem] ml:w-[21rem] xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 text-md flex gap-3 justify-center items-center dark:border-[#b0b0b010]"
            >
              {isSubmitting ? (
                <span className="spinner">Sending...</span>
              ) : (
                "Send Message"
              )}
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
