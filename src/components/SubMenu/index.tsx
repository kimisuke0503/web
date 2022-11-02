import React from "react";
import { Stack } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

import MenuButton from "../MenuButton";

const SubMenu = (props: { show: boolean; toggleModal: () => void }) => {
  return (
    <div className={`sub-menu ${props.show ? "active" : ""}`}>
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
    </div>
  );
};

export default SubMenu;
