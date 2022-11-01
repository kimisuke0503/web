import React from "react";
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

const AuthLayout = () => {
  return (
    <Stack direction="column" display="flex">
      <Background />
      <Header />
      <Paper
        elevation={12}
        sx={{
          width: "95%",
          margin: "-40px auto 20px",
          borderRadius: "10px",
        }}
      >
        <Outlet />
      </Paper>
      <Footer />
    </Stack>
  );
};

export default AuthLayout;
