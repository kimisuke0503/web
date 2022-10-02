import React from "react";
import { Link } from "react-router-dom";
import pcUserImg from "../../images/blog/pc.png";

const BlogHome = () => {
  return (
    <main className="blog">
      <h1>Blog</h1>
      <div className="wrapper grid">
        <div className="item">
          <Link className="item-link" to="/web/blog/20220908">
            <p>
              個人サイトを作りました。
              <br />
              2022/09/08
            </p>
            <img src={pcUserImg} alt="pcUserImg"></img>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogHome;
