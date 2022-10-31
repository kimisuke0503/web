import React from "react";

import kimisukeimg from "../images/kimi.png";
import { IconButton } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { linkInstagram, linkTwitter, linkGithub } from "./externalLink";

const Profile = () => {
  return (
    <main className="profile">
      <img id="kimisukeimg" src={kimisukeimg} alt="kimi" />
      <div className="introduction">
        <h1>Kimisuke</h1>
        <h2>Graduate Student</h2>
        <IconButton onClick={linkInstagram}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={linkTwitter}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={linkGithub}>
          <GitHubIcon />
        </IconButton>
        <p>
          kimisukeです(愛猫の名前を拝借しました)。大学院生です。猫と映画と伊坂幸太郎が好きです。
          <br />
          web制作系ノートとか趣味のこととかをまとめるサイトを作ってみました。
          <br />
          アイコンの猫は実家で飼っている性格の悪い愛猫です。
        </p>
      </div>
      <div className="history">
        <h3 className="profile-title">History</h3>
        <ul>
          <li className="history-content">
            <div>
              <div>Present</div>
              <div>|</div>
              <div>Apr. 2022</div>
            </div>
            <div className="description">
              大阪公立大学院情報学研究科に在学。
            </div>
          </li>
          <li className="history-content">
            <div>
              <div>Mar. 2022</div>
              <div>|</div>
              <div>Apr. 2018</div>
            </div>
            <div className="description">
              大阪府立大学工学部に在学。
              <br />
              体育会バスケ部にも所属。
            </div>
          </li>
          <li className="history-content">
            <div>
              <div>Mar. 2018</div>
              <div>|</div>
              <div>May. 1999</div>
            </div>
            <div className="description">広島の港街でぬくぬく生活</div>
          </li>
        </ul>
      </div>
      <div className="interest">
        <h3 className="profile-title">Interest</h3>
        <p>Javascript/Typescript/React/猫/伊坂幸太郎/映画/就活</p>
      </div>
      <div className="akademic-paper">
        <h3 className="profile-title">Academic Paper</h3>
        <p>Coming soon...</p>
      </div>
      <div className="certification">
        <h3 className="profile-title">Certifications</h3>
        <p>基本情報技術者</p>
      </div>
    </main>
  );
};

export default Profile;
