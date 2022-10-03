import React from "react";
import { Link } from "react-router-dom";
import pcUserImg from "../../images/blog/pc.png";

import { motion } from "framer-motion";

const BlogHome = () => {
  return (
    <main className="blog">
      <h1>Blog</h1>
      <div className="wrapper grid">
        <Link to="/web/blog/20220908">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              個人サイトを作りました。
              <br />
              2022/09/08
            </p>
            <img src={pcUserImg} alt="pcUserImg"></img>
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default BlogHome;
