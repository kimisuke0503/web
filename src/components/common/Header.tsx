import { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import MenuIcon from "@mui/icons-material/Menu";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Modal from "./Modal";

const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  useScrollPosition(({ prevPos, currPos }) => {
    const visible: boolean = currPos.y > prevPos.y;
    setShowHeader(visible);
  }, []);

  const isWide = useMedia("(min-width: 600px)");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#432",
      },
    },
  });

  const [show, setShow] = useState<boolean>(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="full-img wrapper">
      <header className={showHeader ? "" : "hidden"}>
        <Link to="/web" className="logo">
          Kimisuke Web
        </Link>
        {isWide ? (
          <div className="main-menu">
            <ThemeProvider theme={theme}>
              <Stack direction="row" spacing={2}>
                <Button
                  size="medium"
                  variant={"text"}
                  startIcon={<AccountBoxIcon />}
                  component={Link}
                  to="/web"
                >
                  Profile
                </Button>
                <Button
                  size="medium"
                  variant={"text"}
                  startIcon={<MenuBookIcon />}
                  component={Link}
                  to="/web/note"
                >
                  Note
                </Button>
                <Button
                  size="medium"
                  variant={"text"}
                  startIcon={<MusicVideoIcon />}
                  component={Link}
                  to="/web/blog"
                >
                  Blog
                </Button>
              </Stack>
            </ThemeProvider>
          </div>
        ) : (
          <>
            <Modal show={show} setShow={setShow} />
            <IconButton color="primary" onClick={toggleModal}>
              <MenuIcon />
            </IconButton>
            <div className={`sub-menu ${show ? "active" : ""}`}>
              <ThemeProvider theme={theme}>
                <Stack
                  spacing={2}
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                >
                  <Button
                    size="medium"
                    variant={"text"}
                    startIcon={<AccountBoxIcon />}
                    component={Link}
                    to="/web"
                    onClick={toggleModal}
                  >
                    Profile
                  </Button>
                  <Button
                    size="medium"
                    variant={"text"}
                    startIcon={<MenuBookIcon />}
                    component={Link}
                    to="/web/note"
                    onClick={toggleModal}
                  >
                    Note
                  </Button>
                  <Button
                    size="medium"
                    variant={"text"}
                    startIcon={<MusicVideoIcon />}
                    component={Link}
                    to="/web/blog"
                    onClick={toggleModal}
                  >
                    Blog
                  </Button>
                </Stack>
              </ThemeProvider>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
