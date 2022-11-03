import React from "react";
// イメージ
import pcUserImg from "../../assets/images/blog/pc.png";
import pcUserImg2 from "../../assets/images/blog/pc2.png";

import { Typography, Grid } from "@mui/material";
import ArticleItem from "../../components/ArticleItem/ArticleItem";

const BlogHome = () => {
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
        Blog
      </Typography>
      <Grid container justifyContent="center" p={3} spacing={4}>
        <ArticleItem
          linkTo="/web/blog/20221004"
          imgSrc={pcUserImg2}
          title="Typescript&Reactで作り直しました。"
          date="2022/10/04"
        />
        <ArticleItem
          linkTo="/web/blog/20220908"
          imgSrc={pcUserImg}
          title="個人サイトを作りました。"
          date="2022/09/08"
        />
      </Grid>
    </>
  );
};

export default BlogHome;
