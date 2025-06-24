import React, { useState } from "react";
import Button from "./Button";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;
    setLastSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="flex gap-4 px-2 py-4 items-center">
      <div className="relative ">
        {searchTerm.length === 0 && (
          <FiSearch className="absolute top-3 left-3 text-gray-500 " />
        )}

        <input
          type="search"
          value={searchTerm}
          className="border-none py-2 px-3 rounded-sm  w-[24rem] md:w-[30rem] shadow text-gray-800  dark:bg-slate-900 dark:border-gray-600 "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <Button
          text="SEARCH"
          color="gray-200"
          borderRadius="4px"
          darkBgColor="black"
          onClick={handleSearch}
          className=" bg-white dark:bg-slate-900 dark:text-white "
        />
      </div>
    </div>
  );
};

export default SearchBar;
