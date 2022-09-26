import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Profile from "./components/Profile";
import NoteHome from "./components/note/NoteHome";
import BlogHome from "./components/blog/BlogHome";

const App = () => {
  return (
    <div className="full-img">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/web"} element={<Profile />} />
          <Route path={"/web/note"} element={<NoteHome />} />
          <Route path={"/web/blog"} element={<BlogHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
