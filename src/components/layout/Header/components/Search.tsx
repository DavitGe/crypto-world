import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-11 h-11 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.4)] rounded-full flex items-center justify-center">
      <IoMdSearch color="#F0F0F0" fontSize={24} />
    </div>
  );
};

export default Search;
