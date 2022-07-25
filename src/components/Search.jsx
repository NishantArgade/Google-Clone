import React, { useState } from "react";
import Links from "./Links";
import { setSearchTerm } from "../redux/googleSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.google);
  const [searchText, setSearchText] = useState(searchTerm);

  return (
    <div className="relative  w-full  ">
      <input
        className="absolute md:-mt-12  md:ml-40  sm:ml-32     h-10 md:w-7/12 w-full mb-4 p-6 sm:w-7/12 dark:bg-gray-200 border-2 rounded-full shadow-sm outline-none  text-black hover:shadow-lg "
        type="text"
        placeholder="Search Google"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) =>
          e.key === "Enter" && dispatch(setSearchTerm(searchText))
        }
      />

      {searchText && (
        <button
          className="absolute top-1.5  -ml-16 text-2xl text-gray-500"
          onClick={() => setSearchText("")}
        >
          X
        </button>
      )}
      <button
        className="absolute top-1.5  -ml-10 text-2xl text-gray-500"
        onClick={() => dispatch(setSearchTerm(searchText))}
        disabled={searchText ? false : true}
      >
        <SearchIcon />
      </button>
      <Links />
    </div>
  );
};

export default Search;
