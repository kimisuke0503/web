import React from "react";
// ルーティング
import { Outlet } from "react-router-dom";
// CSS
import "./App.css";
import "./prism.css";
import "./components/common/Hamberger.css";
// 各コンポーネント
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <article>
        <Outlet />
      </article>
      <Footer />
    </>
  );
};

export default App;
