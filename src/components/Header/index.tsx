import { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

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
    <header className={showHeader ? "" : "hidden"}>
      <Link to="/web" className="logo">
        Kimisuke Web
      </Link>
      {isWide ? (
        <div className="main-menu">
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
        </div>
      ) : (
        <IconButton color="primary" onClick={props.toggleModal}>
          <MenuIcon />
        </IconButton>
      )}
    </header>
  );
};

export default Header;
