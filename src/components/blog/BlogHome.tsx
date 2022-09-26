import React from "react";
import pcUserImg from "../../images/blog/pc.png";

const BlogHome = () => {
  return (
    <main>
      <article className="blog">
        <h1>Blog</h1>
        <div className="wrapper grid">
          <div className="item">
            <a href="blog_20220908.html">
              <p>
                個人サイトを作りました。
                <br />
                2022/09/08
              </p>
              <img src={pcUserImg} alt="pcUserImg"></img>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogHome;
