import React from "react";
import { Grid, Typography } from "@mui/material";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
// イメージ
import pcUserImg from "../../assets/images/note/pcUser.png";
import cssImg from "../../assets/images/note/css.png";
import reactImg from "../../assets/images/note/react.png";
import endevImg from "../../assets/images/note/endev.png";

const NoteHome = () => {
  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        fontWeight="medium"
        textAlign="center"
        sx={{
          fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          marginTop: "20px",
        }}
      >
        Note
      </Typography>
      <Grid container justifyContent="center" p={3} spacing={4}>
        <ArticleItem
          linkTo="/web/note/function"
          imgSrc={pcUserImg}
          title="機能追加ノート"
          date="2022/09/10更新"
        />
        <ArticleItem
          linkTo="/web/note/endev"
          imgSrc={endevImg}
          title="環境開発のメモ"
          date="2022/10/04更新"
        />
        <ArticleItem
          linkTo="/web/note/css"
          imgSrc={cssImg}
          title="CSSのメモ"
          date="2022/09/10更新"
        />
        <ArticleItem
          linkTo="/web/note/react"
          imgSrc={reactImg}
          title="Reactのメモ"
          date="2022/10/04更新"
        />
      </Grid>
    </>
  );
};

export default NoteHome;
