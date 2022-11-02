import { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import IconButton from "@mui/material/IconButton";
import { Box, Grid, Stack, Typography } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import MenuIcon from "@mui/icons-material/Menu";

import MenuButton from "../MenuButton";

const Header = (props: { show: boolean; toggleModal: () => void }) => {
  // スクロール位置取得
  const scrollTop = (): number => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  };

  // スクロールによるヘッダーの制御
  const [showHeader, setShowHeader] = useState<boolean>(true);
  useScrollPosition(({ prevPos, currPos }) => {
    const visible: boolean = currPos.y > prevPos.y;
    if (scrollTop() > 170) setShowHeader(visible);
  }, []);

  // 画面の広さ制御
  const isWide = useMedia("(min-width: 600px)");

  return (
    <Grid
      container
      zIndex="97"
      position="fixed"
      width="90%"
      margin="2% 5% 0"
      height="60px"
      borderRadius="20px"
      justifyContent="space-between"
      alignItems="center"
      padding="0 5%"
      boxShadow="0px 5px 10px rgba(0,0,0,0.3)"
      sx={{
        backgroundColor: "#fff",
        transition: "ease .4s",
        transform: showHeader ? "" : "translate(0, -100%)",
      }}
    >
      <Grid item>
        <Link to="/web">
          <Typography fontSize={18} fontWeight={700}>
            Kimisuke Web
          </Typography>
        </Link>
      </Grid>
      {isWide ? (
        <Grid item>
          <Stack direction="row" spacing={2}>
            <MenuButton
              icon={<AccountBoxIcon />}
              linkTo="/web"
              text="PROFILE"
            />
            <MenuButton
              icon={<MenuBookIcon />}
              linkTo="/web/note"
              text="NOTE"
            />
            <MenuButton
              icon={<MusicVideoIcon />}
              linkTo="/web/blog"
              text="BLOG"
            />
          </Stack>
        </Grid>
      ) : (
        <Grid item>
          <IconButton onClick={props.toggleModal}>
            <MenuIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
