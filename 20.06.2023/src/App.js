import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import DetailedCountry from "./components/DetailedCountry/DetailedCountry";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<DetailedCountry />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
