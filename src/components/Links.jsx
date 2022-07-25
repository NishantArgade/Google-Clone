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
      <div className=" sm:ml-0 md:ml-5 sm:m-2 ml-3 ">
        <div className="flex  flex-wrap">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.url}
              className=" text-gray-600  dark:text-gray-300 focus:border-b-2 focus:text-blue-700 border-blue-700 hover:text-blue-700 pb-2 sm:mr-5 mr-2   "
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
