import React, { useState } from "react";
import { IconButton, Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import googlepng from "../assets/google-logo.png";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setSearchTerm } from "../redux/googleSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const { darkTheme } = useSelector((state) => state.google);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (searchText === "") return alert("Please enter something.");
      dispatch(setSearchTerm(searchText));
      navigate("/search");
    }
  };
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-gray-200 h-screen">
        <div className="text-right items-center space-x-3   ">
          <a className="font-normal text-sm">Gmail</a>
          <a className="font-normal text-sm">Images</a>
          <IconButton className="dark:text-white">
            <AppsIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(setDarkTheme(!darkTheme))}
            style={{ width: "32px", height: "32px" }}
            className="
             dark:bg-gray-50  dark:text-gray-900 bg-white border rounded-full 
            "
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
        <div className="flex justify-center items-center h-3/5 ">
          <div className="flex-col justify-center items-center text-center  sm:w-3/5 h-60  w-auto">
            <div className="flex justify-center items-center">
              <img className="sm:w-72 w-52" src={googlepng} alt="google" />
            </div>
            <div className="relative  ">
              <SearchIcon className="absolute z-10 top-8 ml-3 dark:text-gray-600 " />
              <span className="opacity-0 lg:opacity-100 ">
                <KeyboardVoiceIcon className="absolute   top-8 right-0 bottom-0  mr-48 dark:text-gray-600 z-10" />
              </span>
              <input
                className=" sm:w-3/5  h-12 mt-5 rounded-full px-11 outline-none  border-2 border-gray-200 dark:text-gray-900 text-md dark:bg-gray-100 text-bold white   hover:drop-shadow-md focus:drop-shadow-md  "
                type="text"
                placeholder="Search Google"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(e) => handleSubmit(e)}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() =>
                  searchText === ""
                    ? alert("Please enter something.")
                    : dispatch(setSearchTerm(searchText)) && navigate("/search")
                }
                className="bg-gray-100 dark:text-gray-600 border-gray-100 sm:m-4 m-2 mt-5 sm:py-2 sm:px-3 p-1 outline-none  rounded-md border-2 hover:border-gray-200"
              >
                Google Search
              </button>
              <button className="bg-gray-100 dark:text-gray-600 border-gray-100 sm:m-4 mt-5 m-2 sm:py-2 sm:px-3 p-1 sm:text-normal outline-none  rounded-md border-2 hover:border-gray-200">
                I'm Feeling Lucky
              </button>
            </div>
            <div className="flex justify-center items-center flex-wrap">
              <p className="mr-4 text-sm">Google offerd in :</p>
              <p className="mx-2">Images</p>
              <p className="mx-2">News</p>
              <p className="mx-2">Videos</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-44 pt-4 flex justify-center items-center border-t dark:border-gray-700 border-gray-300 ">
          <h1>@2022 Google, Inc.developed by Nishant Argade</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
