import React from "react";
import Results from "./Results.jsx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Routers = () => {
  const { darkTheme } = useSelector((state) => state.google);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <div className="p-4 min-h-screen">
          <Results />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Routers;
