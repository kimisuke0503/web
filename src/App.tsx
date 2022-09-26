import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="full-img">
      <BrowserRouter>
        <Routes>
          <Route path={"/web"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
