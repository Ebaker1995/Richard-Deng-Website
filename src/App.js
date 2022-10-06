import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import JoinNow from "./pages/JoinNow";
import GamesList from "./pages/GamesList";
import Header from "./components/UI/Header";

import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="JoinNow" element={<JoinNow />} />
          <Route path="GamesList" element={<GamesList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
