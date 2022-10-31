import React from "react";
import { Link } from "react-router-dom";
import pcUserImg from "../../assets/images/note/pcUser.png";
import cssImg from "../../assets/images/note/css.png";
import reactImg from "../../assets/images/note/react.png";
import endevImg from "../../assets/images/note/endev.png";

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

        <Link to="/web/note/endev">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              環境開発のメモ
              <br />
              2022/10/04更新
            </p>
            <img src={endevImg} alt="endevImg"></img>
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
            <img src={cssImg} alt="cssImg"></img>
          </motion.button>
        </Link>

        <Link to="/web/note/react">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              Reactのメモ
              <br />
              2022/10/04更新
            </p>
            <img src={reactImg} alt="reactImg"></img>
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default NoteHome;
