import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const search = useRef(null);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;
    setLastSearch(searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    function callback(e) {
      if (e.code === "Enter") {
        search.current.focus();
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, []);

  return (
    <div className="flex gap-4 px-2   py-2 items-center">
      <div className="relative  ">
        {searchTerm.length === 0 && (
          <FiSearch className="absolute top-3 left-3 text-gray-500 " />
        )}

        <input
          ref={search}
          type="search"
          value={searchTerm}
          className="border-none py-2 px-3 rounded-sm  w-[14rem] sm:w-[18rem] md:w-[28rem] shadow text-gray-800  dark:bg-[#171717] dark:border-gray-600 dark:text-gray-300"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <Button
          text="SEARCH"
          color="gray-200"
          borderRadius="4px"
          onClick={handleSearch}
          className=" bg-white dark:bg-[#171717] dark:text-white text-sm py-2 shadow"
        />
      </div>
    </div>
  );
};

export default SearchBar;
