import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import googlePng from "../assets/google-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "../redux/googleSlice";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar, IconButton } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.google);

  return (
    <div className="sm:px-5 px-2 pt-8  border-b dark:border-gray-700 border-gray-300">
      <div className="flex justify-between items-center ">
        <div>
          <Link to="/">
            <img src={googlePng} alt="noreffered" style={{ width: "100px" }} />
          </Link>
        </div>
        <div className="flex items-center">
          <IconButton className="dark:text-white">
            <AppsIcon />
          </IconButton>
          <IconButton
            type="button"
            onClick={() => dispatch(setDarkTheme(!darkTheme))}
            className="
            text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full  mx-4
            "
            style={{ width: "32px", height: "32px" }}
          >
            {darkTheme ? "💡" : "🌙"}
          </IconButton>
          <IconButton>
            <Avatar
              src="https://lh3.googleusercontent.com/a-/AFdZucr4kGtjQHFHDxIFdpjfq-YRddyuD6uxehjBd6SraQ=s360-p-rw-no"
              style={{ width: "32px", height: "32px" }}
            />
          </IconButton>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
