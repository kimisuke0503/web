import React from "react";
import hambergerImg from "../../../images/note/hamberger.png";
import hambergerImg2 from "../../../images/note/hamberger2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NoteFunctionHome = () => {
  return (
    <main className="note">
      <h1>Note</h1>
      <div className="wrapper grid">
        <Link to="/web/note/function/hamberger2">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              ハンバーガーメニューを作り直した。
              <br />
              2022/10/04
            </p>
            <img src={hambergerImg2} alt="hambergerImg2"></img>
          </motion.button>
        </Link>

        <Link to="/web/note/function/hamberger">
          <motion.button
            className="item"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              ハンバーガーメニューを作った。
              <br />
              2022/09/10
            </p>
            <img src={hambergerImg} alt="hambergerImg"></img>
          </motion.button>
        </Link>
      </div>
    </main>
  );
};

export default NoteFunctionHome;
