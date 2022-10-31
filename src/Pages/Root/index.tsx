import React from "react";

import kimisukeImg from "../../assets/images/kimi.png";
import {
  IconButton,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  linkInstagram,
  linkTwitter,
  linkGithub,
} from "../../components/ExternalLinks";

const Profile = () => {
  return (
    <>
      <Box textAlign="center" sx={{ padding: "0 50px 0" }}>
        <Box
          mt={-6}
          component="img"
          src={kimisukeImg}
          sx={{
            boxShadow:
              "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "50% !important",
          }}
        />
        <Typography
          variant="h1"
          color="primary"
          fontWeight="medium"
          sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
        >
          Kimisuke
        </Typography>
        <Typography
          fontWeight="medium"
          my={2}
          sx={{
            fontSize: "1.3rem",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          Graduate Student
        </Typography>
        <IconButton onClick={linkInstagram}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={linkTwitter}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={linkGithub}>
          <GitHubIcon />
        </IconButton>
        <Typography my={2}>
          kimisukeです(愛猫の名前を拝借しました)。大学院生です。猫と映画と伊坂幸太郎が好きです。
          <br />
          web制作系ノートとか趣味のこととかをまとめるサイトを作ってみました。
          <br />
          アイコンの猫は実家で飼っている性格の悪い愛猫です。
        </Typography>
      </Box>
      <Box
        sx={{ margin: "0 auto 50px", textAlign: "center", maxWidth: "650px" }}
      >
        <Typography variant="h3" sx={{ marginTop: "70px" }}>
          History
        </Typography>
        <Table
          aria-label="simple table"
          sx={{ margin: "0 auto 2%", maxWidth: "500px" }}
        >
          <TableBody>
            <TableRow>
              <TableCell align="center">
                Present
                <br />|<br />
                Apr. 2022
              </TableCell>
              <TableCell align="center">
                大阪公立大学院情報学研究科に在学。
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Mar. 2022
                <br />|<br />
                Apr. 2018
              </TableCell>
              <TableCell align="center">
                大阪府立大学工学部に在学。
                <br />
                体育会バスケ部にも所属。
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Mar. 2018
                <br />|<br />
                May. 1999
              </TableCell>
              <TableCell align="center">広島の港街でぬくぬく生活</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h3" sx={{ marginTop: "70px" }}>
          Interest
        </Typography>
        <Typography my={2}>
          Javascript/Typescript/React/猫/伊坂幸太郎/映画/就活
        </Typography>
        <Typography variant="h3" sx={{ marginTop: "70px" }}>
          Academic Paper
        </Typography>
        <List>
          <ListItem>
            Seiki Ubukata, Kenryu Mouri and Katsuhiro Honda, &quot;Basic
            Consideration of Collaborative Filtering Based on Rough
            Co-clustering Induced by Multinomial Mixture Models &quot; in
            International Conference on Soft Computing and Intelligent Systems
            and 23rd International Symposium on Advanced Intelligent Systems
            (SCIS&ISIS), Dec. 2022.
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ marginTop: "70px" }}>
          Certifications
        </Typography>
        <Typography my={2}>基本情報技術者</Typography>
      </Box>
    </>
  );
};

export default Profile;
