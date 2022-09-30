import React from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import Hamberger from "./Hamberger";

import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  const isWide = useMedia("(min-width: 600px)");

  const MenuButton = styled(Button)({
    backgroundColor: "#aqua",
  });

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#432",
      },
    },
  });

  return (
    <header>
      <Link to="/web" className="logo">
        Kimisuke Web
      </Link>
      {isWide ? (
        <ul className="main-nav">
          <ThemeProvider theme={theme}>
            <li>
              <MenuButton
                size="medium"
                href="/web"
                variant={"text"}
                className="main-nav-menu"
                startIcon={<AccountBoxIcon />}
              >
                Profile
              </MenuButton>
            </li>
            <li>
              <Button
                size="medium"
                href="/web/note"
                className="main-nav-menu"
                startIcon={<MenuBookIcon />}
              >
                Note
              </Button>
            </li>
            <li>
              <Button
                size="medium"
                href="/web/blog"
                className="main-nav-menu"
                startIcon={<MusicVideoIcon />}
              >
                Blog
              </Button>
            </li>
          </ThemeProvider>
        </ul>
      ) : (
        <Hamberger />
      )}
    </header>
  );
};

export default Header;
