import React from "react";
// ルーティング
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 各コンポーネント
import AuthLayout from "../Pages/Layout/AuthLayout";
import Profile from "./Root";
import NoteHome from "./Note";
import BlogHome from "./Blog";
import NotFound from "./NotFound";
import NoteFunctionHome from "./Note/NoteFunction";
import NoteCSS from "./Note/NoteCSS";
import NoteReact from "./Note/NoteReact";
import NoteFunctionHamberger from "./Note/NoteFunction/NoteFunctionHamberger";
import Blog20220908 from "./Blog/Blog_20220908";
import Blog20221004 from "./Blog/Blog_20221004";
import NoteEndev from "./Note/NoteEndev";
import NoteFunctionHamberger2 from "./Note/NoteFunction/NoteFunctionHamberger2";

export const Pages = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* ガワ */}
          <Route path="/web" element={<AuthLayout />}>
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
};
