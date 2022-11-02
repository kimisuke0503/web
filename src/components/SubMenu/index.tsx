import React from "react";
import { Box, Stack } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

import MenuButton from "../MenuButton";

const SubMenu = (props: { show: boolean; toggleModal: () => void }) => {
  return (
    <Box
      pt={3}
      pl={2}
      sx={{
        zIndex: "99",
        position: "fixed",
        right: props.show ? "0" : "-60%",
        width: "60%",
        height: "100vh",
        background: "rgba(255,255,255,.9)",
        transition: "ease 0.4s",
      }}
    >
      <Stack
        spacing={2}
        alignItems={"flex-start"}
        justifyContent="space-between"
      >
        <MenuButton
          icon={<AccountBoxIcon />}
          linkTo="/web"
          text="PROFILE"
          clickHandler={props.toggleModal}
        />
        <MenuButton
          icon={<MenuBookIcon />}
          linkTo="/web/note"
          text="NOTE"
          clickHandler={props.toggleModal}
        />
        <MenuButton
          icon={<MusicVideoIcon />}
          linkTo="/web/blog"
          text="BLOG"
          clickHandler={props.toggleModal}
        />
      </Stack>
    </Box>
  );
};

export default SubMenu;
