import React from "react";
import pcUserImg from "../../images/note/addfunction.png";
import cssImg from "../../images/note/css.png";

const NoteHome = () => {
  return (
    <main>
      <article className="note">
        <h1>Note</h1>
        <div className="wrapper grid">
          <div className="item">
            <a href="note_function/note_function.html">
              <p>
                機能追加ノート
                <br />
                2022/09/10更新
              </p>
              <img src={pcUserImg} alt="pcUserImg"></img>
            </a>
          </div>
          <div className="item">
            <a href="note_css.html">
              <p>
                CSSのメモ
                <br />
                2022/09/10更新
              </p>
              <img id="img-css" src={cssImg} alt="cssImg"></img>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
};

export default NoteHome;
