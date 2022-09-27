import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Profile from "./components/Profile";
import NoteHome from "./components/note/NoteHome";
import BlogHome from "./components/blog/BlogHome";
import NotFound from "./components/NotFound";
import NoteFunctionHome from "./components/note/NoteFunctionHome";
import NoteCSS from "./components/note/NoteCSS";
const App = () => {
  return (
    <div className="full-img">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/web"} element={<Profile />} />

          <Route path={"/web/note"} element={<NoteHome />} />
          <Route path={"/web/note/function"} element={<NoteFunctionHome />} />
          <Route path={"/web/note/css"} element={<NoteCSS />} />

          <Route path={"/web/blog"} element={<BlogHome />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
