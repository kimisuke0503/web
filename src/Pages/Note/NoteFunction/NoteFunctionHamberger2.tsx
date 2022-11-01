import React from "react";
import img20221004_1 from "../../../assets/images/note/img20221004_1.png";
import img20221004_2 from "../../../assets/images/note/img20221004_2.png";

import { linkUseMedia } from "../../../components/ExternalLinks";
import { Box, Typography, Grid, List, ListItem } from "@mui/material";
import SyntaxHighLighter from "../../../components/SyntaxHighLighter";

const tsCode1 = `
import { useMedia } from "react-use";

// 画面の広さ制御
const isWide = useMedia("(min-width: 600px)");
  ...
const Header = () => {
    ...
    return {isWide ? (// 広い場合) : (// 狭い場合)};
};
`.trim();

const tsCode2 = `
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// モーダル制御
const Header = () => {
    ...
    const [show, setShow] = useState<boolean>(false);
    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <header>
        ...
        <>
            <Modal show={show} setShow={setShow} /> // propsの受け渡し
            <IconButton color="primary" onClick={toggleModal}> // ボタンを押すとtoggleModalを発火
              <MenuIcon />
            </IconButton>
            <div className={{show ? "active" : ""}}> // activeクラスを付与したりしなかったりでサブメニューを制御
              <SubMenu />
            </div>
          </>
        </header>
    );
};
`.trim();

const tsCode3 =
  `const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => {
    const toggleModal = () => {
      props.setShow(!props.show);
    };
  
    return props.show ? (
      <div className="overlay" onClick={toggleModal}></div> // showがtrueならオーバーレイ表示
    ) : null;
};
`.trim();

const NoteFunctionHamberger2 = () => {
  return (
    <Box p={3}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
      >
        ハンバーガーメニューを作り直した。
      </Typography>
      HTML&CSSで作っていたハンバーガーメニューをTypescript&Reactで作り直しましたのでメモ。
      <br />
      CSSでなんじゃこっちゃ書いていたよりはシンプルになっているし、ちょっと機能も足しました。
      <Box sx={{ margin: "0 10px 0" }}>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          概要
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3}>
            <img
              src={img20221004_1}
              alt="スマホのスクショ"
              style={{ width: "100%", height: "auto" }}
            ></img>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <img
              src={img20221004_2}
              alt="スマホのスクショ"
              style={{ width: "100%", height: "auto" }}
            ></img>
          </Grid>
        </Grid>
        画面を小さくしてデモしてみるとわかりやすいと思います。
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          機能の詳細
        </Typography>
        <List>
          <ListItem>
            ・画面の横幅が600px以下のときにメニューを隠して出てくる
          </ListItem>
          <ListItem>
            ・クリックorタップするとメニューが出てきて、それ以外の部分は暗くなる
          </ListItem>
          <ListItem>
            ・暗いところか、いずれかのコンテンツをクリックorタップすると元に戻る
          </ListItem>
        </List>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          機能実装の仕組み
        </Typography>
        ざっと書きます。詳しくはコード参照
        <Box sx={{ marginLeft: "10px" }}>
          1.{" "}
          <span
            onClick={linkUseMedia}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            useMedia
          </span>
          を用いて画面が600px以上あるか否かを取得し、メニューとハンバーガーボタンの表示を切り替える。
          <br />
          2.
          ハンバーガーをクリックするきっかけでサブメニューのCSS切り替えとオーバーレイ(画面が暗くなる部分)表示
          <br />
          3. メニューコンテンツのクリックかオーバーレイのクリックで元に戻る
        </Box>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          実装
        </Typography>
        <Box sx={{ marginLeft: "10px" }}>
          1.{" "}
          <span
            onClick={linkUseMedia}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            useMedia
          </span>
          を用いて画面が600px以上あるか否かを取得し、メニューとハンバーガーボタンの表示を切り替える。
          <br />
          Header.tsx
          <SyntaxHighLighter code={tsCode1} language="js" />
          2.{" "}
          ハンバーガーをクリックするきっかけでサブメニューのCSS切り替えとオーバーレイ(画面が暗くなる部分)表示
          and 非表示
          <br />
          Header.tsx
          <SyntaxHighLighter code={tsCode2} language="js" />
          Modal.tsx
          <SyntaxHighLighter code={tsCode3} language="js" />
        </Box>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          感想
        </Typography>
        materialUIやその他のライブラリを使うことでだいぶスッキリかけたと思います。useStateなどの使い方も実感できました。しかし大変🙃
      </Box>
    </Box>
  );
};

export default NoteFunctionHamberger2;
