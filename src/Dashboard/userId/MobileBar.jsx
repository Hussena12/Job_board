import { FiHome, FiBriefcase, FiPlusCircle, FiList } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const MobileBar = ({ activePage, setActivePage }) => {
  return (
    <section className="">
      <div className="md:hidden fixed bottom-0 w-full">
        <div className="flex gap-1 justify-between text-gray-600 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-2xl z-50 h-20 px-4 py-2">
          <button
            onClick={() => setActivePage("home")}
            className={`flex flex-col justify-center items-center px-4 py-2 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none  ${
              activePage === "home"
                ? "bg-[#3ecf8e]/20 text-[#3ecf8e] shadow-lg"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-gray-300"
            }`}
          >
            <FiHome
              className={`text-[1.5rem] mb-1 transition-all duration-300 ${
                activePage === "home" ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activePage === "home" ? "font-semibold" : ""
              }`}
            >
              Home
            </span>
          </button>
          <button
            onClick={() => setActivePage("jobs")}
            className={`flex flex-col justify-center items-center px-4 py-2 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none   ${
              activePage === "jobs"
                ? "bg-[#3ecf8e]/20 text-[#3ecf8e] shadow-lg"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-gray-300"
            }`}
          >
            <FiBriefcase
              className={`text-[1.5rem] mb-1 transition-all duration-300 ${
                activePage === "jobs" ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activePage === "jobs" ? "font-semibold" : ""
              }`}
            >
              Jobs
            </span>
          </button>
          <button
            onClick={() => setActivePage("post")}
            className={`flex flex-col justify-center items-center px-4 py-2 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none    ${
              activePage === "post"
                ? "bg-[#3ecf8e]/20 text-[#3ecf8e] shadow-lg"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-gray-300"
            }`}
          >
            <FiPlusCircle
              className={`text-[1.5rem] mb-1 transition-all duration-300 ${
                activePage === "post" ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activePage === "post" ? "font-semibold" : ""
              }`}
            >
              Post
            </span>
          </button>
          <button
            onClick={() => setActivePage("saved")}
            className={`flex flex-col justify-center items-center px-4 py-2 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none  ${
              activePage === "saved"
                ? "bg-[#3ecf8e]/20 text-[#3ecf8e] shadow-lg"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-gray-300"
            }`}
          >
            <FaRegBookmark
              className={`text-[1.4rem] mb-1 transition-all duration-300 ${
                activePage === "saved" ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activePage === "saved" ? "font-semibold" : ""
              }`}
            >
              Saved
            </span>
          </button>
          <button
            onClick={() => setActivePage("myPost")}
            className={`flex flex-col justify-center items-center px-4 py-2 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 focus:outline-none  ${
              activePage === "myPost"
                ? "bg-[#3ecf8e]/20 text-[#3ecf8e] shadow-lg"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-gray-300"
            }`}
          >
            <FiList
              className={`text-[1.5rem] mb-1 transition-all duration-300 ${
                activePage === "myPost" ? "scale-110" : ""
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 ${
                activePage === "myPost" ? "font-semibold" : ""
              }`}
            >
              Posted
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileBar;
