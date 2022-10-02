import React from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import Hamberger from "./Hamberger";

import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  const isWide = useMedia("(min-width: 600px)");

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#432",
      },
    },
  });

  return (
    <div className="full-img wrapper">
      <header>
        <Link to="/web" className="logo">
          Kimisuke Web
        </Link>
        {isWide ? (
          <ul className="main-nav">
            <ThemeProvider theme={theme}>
              <li>
                <Button
                  size="medium"
                  variant={"text"}
                  className="main-nav-menu"
                  startIcon={<AccountBoxIcon />}
                  component={Link}
                  to="/web"
                >
                  Profile
                </Button>
              </li>
              <li>
                <Button
                  size="medium"
                  className="main-nav-menu"
                  startIcon={<MenuBookIcon />}
                  component={Link}
                  to="/web/note"
                >
                  Note
                </Button>
              </li>
              <li>
                <Button
                  size="medium"
                  className="main-nav-menu"
                  startIcon={<MusicVideoIcon />}
                  component={Link}
                  to="/web/blog"
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
    </div>
  );
};

export default Header;
