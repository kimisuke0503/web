import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// ルーティング
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 各コンポーネント
import App from "./App";
import Profile from "./components/Profile";
import NoteHome from "./components/note/NoteHome";
import BlogHome from "./components/blog/BlogHome";
import NotFound from "./components/NotFound";
import NoteFunctionHome from "./components/note/noteFunction/NoteFunctionHome";
import NoteCSS from "./components/note/NoteCSS";
import NoteFunctionHamberger from "./components/note/noteFunction/NoteFunctionHamberger";
import Blog20220908 from "./components/blog/Blog_20220908";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ガワ */}
        <Route path="/web" element={<App />}>
          {/* ホーム */}
          <Route index element={<Profile />} />

          {/* ノート */}
          <Route path="note" element={<NoteHome />} />
          <Route path="note/function" element={<NoteFunctionHome />} />
          <Route
            path="note/function/hamberger"
            element={<NoteFunctionHamberger />}
          />

          <Route path="note/css" element={<NoteCSS />} />

          {/* ブログ */}
          <Route path="blog" element={<BlogHome />} />
          <Route path="blog/20220908" element={<Blog20220908 />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
