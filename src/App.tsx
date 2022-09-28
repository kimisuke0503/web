import React from "react";
// ルーティング
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
import "./prism.css";
// 各コンポーネント
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Profile from "./components/Profile";
import NoteHome from "./components/note/NoteHome";
import BlogHome from "./components/blog/BlogHome";
import NotFound from "./components/NotFound";
import NoteFunctionHome from "./components/note/noteFunction/NoteFunctionHome";
import NoteCSS from "./components/note/NoteCSS";
import NoteFunctionHamberger from "./components/note/noteFunction/NoteFunctionHamberger";
import Blog20220908 from "./components/blog/Blog_20220908";

const App = () => {
  return (
    <div className="full-img">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/web"} element={<Profile />} />

          <Route path={"/web/note"} element={<NoteHome />} />
          <Route path={"/web/note/css"} element={<NoteCSS />} />
          <Route path={"/web/note/function"} element={<NoteFunctionHome />} />
          <Route
            path={"/web/note/function/hamberger"}
            element={<NoteFunctionHamberger />}
          />

          <Route path={"/web/blog"} element={<BlogHome />} />
          <Route path={"/web/blog/20220908"} element={<Blog20220908 />} />

          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
