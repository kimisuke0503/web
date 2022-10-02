import React from "react";
import hambergerImg from "../../../images/note/hamberger.png";
import { Link } from "react-router-dom";

const NoteFunctionHome = () => {
  return (
    <main className="note">
      <h1>Note</h1>
      <div className="wrapper grid">
        <div className="item">
          <Link className="item-link" to="/web/note/function/hamberger">
            <p>
              ハンバーガーメニューを作った。
              <br />
              2022/09/10更新
            </p>
            <img src={hambergerImg} alt="hambergerImg"></img>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NoteFunctionHome;
