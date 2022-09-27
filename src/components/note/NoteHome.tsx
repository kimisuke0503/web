import React from "react";
import { Link } from "react-router-dom";
import pcUserImg from "../../images/note/addfunction.png";
import cssImg from "../../images/note/css.png";

const NoteHome = () => {
  return (
    <main>
      <article className="note">
        <h1>Note</h1>
        <div className="wrapper grid">
          <div className="item">
            <Link className="item-link" to="/web/note/function">
              <p>
                機能追加ノート
                <br />
                2022/09/10更新
              </p>
              <img src={pcUserImg} alt="pcUserImg"></img>
            </Link>
          </div>
          <div className="item">
            <Link className="item-link" to="/web/note/css">
              <p>
                CSSのメモ
                <br />
                2022/09/10更新
              </p>
              <img id="img-css" src={cssImg} alt="cssImg"></img>
            </Link>
          </div>
        </div>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=あなたのid"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'あなたのid');
    `,
          }}
        />
      </article>
    </main>
  );
};

export default NoteHome;
