import React from "react";
import { Link } from "react-router-dom";
import pcUserImg from "../../images/note/addfunction.png";
import cssImg from "../../images/note/css.png";

import { motion } from "framer-motion";

const NoteHome = () => {
  return (
    <main className="note">
      <h1>Note</h1>
      <div className="wrapper grid">
        <Link to="/web/note/function">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              機能追加ノート
              <br />
              2022/09/10更新
            </p>
            <img src={pcUserImg} alt="pcUserImg"></img>
          </motion.button>
        </Link>

        <Link to="/web/note/css">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              CSSのメモ
              <br />
              2022/09/10更新
            </p>
            <img id="img-css" src={cssImg} alt="cssImg"></img>
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default NoteHome;
