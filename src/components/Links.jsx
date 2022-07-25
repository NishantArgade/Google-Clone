import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const links = [
  {
    url: "/search",
    text: (
      <span className="flex items-center justify-center sm:text-sm text-xs mr-1  ">
        <SearchIcon
          style={{
            width: "20px",
            marginRight: "2px",
          }}
        />
        <span>All</span>
      </span>
    ),
  },
  {
    url: "/image",
    text: (
      <span className="flex items-center justify-center sm:text-sm text-xs ">
        <CropOriginalIcon
          style={{
            width: "20px",
            marginRight: "2px",
          }}
        />
        <span>Images</span>
      </span>
    ),
  },
  {
    url: "/news",
    text: (
      <span className="flex items-center justify-center sm:text-sm text-xs ">
        <NewspaperIcon
          style={{
            width: "20px",
            marginRight: "2px",
          }}
        />
        <span>News</span>
      </span>
    ),
  },
  {
    url: "/video",
    text: (
      <span className="flex items-center justify-center sm:text-sm text-xs ">
        <SlideshowIcon
          style={{
            width: "20px",
            marginRight: "2px",
          }}
        />
        <span>Videos</span>
      </span>
    ),
  },
];
const Links = () => {
  return (
    <>
      <div className=" sm:pt-10 md:pt-0 md:pl-10 sm:ml-36  pt-10">
        <div className="flex flex-wrap  ">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.url}
              className=" text-gray-600 mt-4 dark:text-gray-300 focus:border-b-2 focus:text-blue-700 border-blue-700 hover:text-blue-700 p-1 sm:mr-5 mr-0   "
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Links;
