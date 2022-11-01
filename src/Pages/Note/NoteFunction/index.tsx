// イメージ
import hambergerImg from "../../../assets/images/note/hamberger.png";
import hambergerImg2 from "../../../assets/images/note/hamberger2.png";

import { Typography, Grid } from "@mui/material";
import ArticleItem from "../../../components/ArticleItem/ArticleItem";

const NoteFunctionHome = () => {
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
      <Grid container spacing={4} p={5}>
        <ArticleItem
          linkTo="/web/note/function/hamberger2"
          imgSrc={hambergerImg2}
          title="ハンバーガーメニューを作り直した。"
          date="2022/10/04"
        />
        <ArticleItem
          linkTo="/web/note/function/hamberger"
          imgSrc={hambergerImg}
          title="ハンバーガーメニューを作った。"
          date="2022/09/10"
        />
      </Grid>
    </>
  );
};

export default NoteFunctionHome;
