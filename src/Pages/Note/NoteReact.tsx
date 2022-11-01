import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typography, Box, List, ListItem } from "@mui/material";
import SyntaxHighLighter from "../../components/SyntaxHighLighter";

const reactCode1 = `
const [show, setShow] = useState<boolean>(false);

...

<Modal show={show} setShow={setShow} />  // showやらsetShowがpropsにあたる
`.trim();
const reactCode2 = `
const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => { // propsを受けとる(型定義もしっかり)
    const toggleModal = () => {
      props.setShow(!props.show);
    };
  
    return props.show ? (
      <div className="overlay" onClick={toggleModal}></div>
    ) : null;
  };
`.trim();
const reactCode3 = `
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};`.trim();

const NoteReact = () => {
  return (
    <Box p={3}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        sx={{
          fontFamily: `"M PLUS Rounded 1c", sans-serif`,
        }}
      >
        Reactのメモ
      </Typography>
      <Box>
        リンク集：
        <AnchorLink href="#props">props</AnchorLink>,{" "}
        <AnchorLink href="#useState">useState</AnchorLink>,{" "}
        <AnchorLink href="#mui-breakpoint">MUI -ブレイクポイント-</AnchorLink>
      </Box>
      <Box sx={{ margin: "0 10px 0" }}>
        <Typography
          id="props"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          props
        </Typography>
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "10px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          概要
        </Typography>
        コンポーネント間でやり取りする部品(props)みたいなもの。一つの変数の取得と表示を別々のコンポーネントでやらせたいときなど。(※基本的に親コンポーネントから子コンポーネントに向かってしか渡せない)
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "10px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          Typescriptでpropsの型をいろいろ
        </Typography>
        <Box>
          propsの型に子コンポーネントを定義する例。
          <SyntaxHighLighter code={reactCode3} language="js" />
        </Box>
        <List>
          <ListItem></ListItem>
        </List>
        <Typography
          id="useState"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "20px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          useState
        </Typography>
        <Typography
          id="useState"
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "10px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          概要
        </Typography>
        関数コンポーネントでstateを管理するためのフック。(このフックって呼び方慣れない)値変えるのに何でこんなめんどいことをするのかというと、reactの特徴でもあるSPAを実現するためだから。
        <br />
        ふつう値とか変えても、ページを更新しないと見えてるところは変わらない。その値の変更とページの再レンダリングをどっちもやってくれるのがフックたち。
        <Typography
          id="useState"
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "10px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          使い方(あくまで一例)
        </Typography>
        どっかのコンポーネントのtsxにpropsを定義
        <SyntaxHighLighter code={reactCode1} language="js" />
        <p>
          その制御をpropsで受け取り、イベントを定義(例ではshowがtrueならdiv要素を返す、というイベント)
        </p>
        <SyntaxHighLighter code={reactCode2} language="js" />
        <Typography
          id="mui-breakpoint"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "20px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          MUI -ブレイクポイント-
        </Typography>
        muiのGridコンポーネントのpropsに渡すnumber。画面の広さに応じてGridアイテムの大きさを変えられる。最大12のうちの割合を指定する(3だと広さの1/4)
        <List>
          <ListItem>・xs: 0px~</ListItem>
          <ListItem>・sm: 600px~</ListItem>
          <ListItem>・md: 900px~</ListItem>
          <ListItem>・lg: 1200px~</ListItem>
          <ListItem>・xl: 1536px~</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default NoteReact;
