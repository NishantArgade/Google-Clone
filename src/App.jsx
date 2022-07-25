import React from "react";
import Routers from "./components/Routers";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {
  const { darkTheme } = useSelector((state) => state.google);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Routes>
        <Route exact path="/" element={<Home />} />

        {["/search", "/image", "/news", "/video"].map((path, i) => (
          <Route key={i} exact path={path} element={<Routers />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
