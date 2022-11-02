import React, { useState } from "react";
// ルーティング
import { Outlet } from "react-router-dom";
// CSS
import "../../App.css";
import "../../prism.css";
// 各コンポーネント
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Stack } from "@mui/system";
import { Paper } from "@mui/material";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal";
import SubMenu from "../../components/SubMenu";

const AuthLayout = () => {
  // モーダル制御
  const [show, setShow] = useState<boolean>(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <Stack direction="column" display="flex">
      <Background />
      <Modal show={show} toggleModal={toggleModal} />
      <Header show={show} toggleModal={toggleModal} />
      <SubMenu show={show} toggleModal={toggleModal} />
      <Paper
        elevation={12}
        sx={{
          width: "95%",
          margin: "-40px auto 20px",
          borderRadius: "10px",
          padding: "0 2%",
        }}
      >
        <Outlet />
      </Paper>
      <Footer />
    </Stack>
  );
};

export default AuthLayout;
