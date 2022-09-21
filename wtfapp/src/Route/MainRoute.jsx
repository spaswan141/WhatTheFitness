import React from "react";
import GymDetails from "../Pages/GymDetail";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<GymDetails />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
