import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import JoinNow from "./pages/JoinNow";
import GamesList from "./pages/GamesList";
import Home from "./pages/Home";

import Header from "./components/UI/Header";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="JoinNow" element={<JoinNow />} />
          <Route path="GamesList" element={<GamesList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
