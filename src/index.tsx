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
import NoteReact from "./components/note/NoteReact";
import NoteFunctionHamberger from "./components/note/noteFunction/NoteFunctionHamberger";
import Blog20220908 from "./components/blog/Blog_20220908";
import Blog20221004 from "./components/blog/Blog_20221004";
import NoteEndev from "./components/note/NoteEndev";
import NoteFunctionHamberger2 from "./components/note/noteFunction/NoteFunctionHamberger2";

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
          <Route
            path="note/function/hamberger2"
            element={<NoteFunctionHamberger2 />}
          />

          <Route path="note/css" element={<NoteCSS />} />
          <Route path="note/react" element={<NoteReact />} />
          <Route path="note/endev" element={<NoteEndev />} />

          {/* ブログ */}
          <Route path="blog" element={<BlogHome />} />
          <Route path="blog/20220908" element={<Blog20220908 />} />
          <Route path="blog/20221004" element={<Blog20221004 />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
