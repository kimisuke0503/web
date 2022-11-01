import React from "react";
import { linkCSS_1 } from "../../components/ExternalLinks";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Box, Typography, List, ListItem } from "@mui/material";
import SyntaxHighLighter from "../../components/SyntaxHighLighter";

const cssCode1 = `
  ul li:nth-child("数値"or"2n"or"2n+1"or"odd"or"even"or...) {
    background-color: ---;
}
`.trim();

const cssCode2 = `
  .wrapper {
    text-align: center;
}
`.trim();

const cssCode3 = `
  .wrapper {
    display: flex;
    justify-content: center; /*左右中心化(水平方向)*/
    align-items: center; /*上下中心化(垂直方向)*/
}
`.trim();
const cssCode4 = `
  .img {
    transform: translate(-50%, -50%); /* その都度調整が必要 */
}
`.trim();

const NoteCSS = () => {
  return (
    <Box p={3}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
      >
        CSSのメモ
      </Typography>
      リンク集：プロパティ(
      <AnchorLink href="#position">position, </AnchorLink>
      ), <AnchorLink href="#gizikurasu">擬似クラス</AnchorLink>,{" "}
      <AnchorLink href="#yousowomannakanihaitisuruhouhouiroiro">
        要素を真ん中に配置する方法いろいろ
      </AnchorLink>
      ,{" "}
      <AnchorLink href="#benda-purehulikkusu">
        ベンダープレフィックス
      </AnchorLink>
      <Box sx={{ margin: "0 10px 0" }}>
        <Typography
          id="nodePakageManager"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          プロパティ
        </Typography>
        <Typography
          id="position"
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "10px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          position
        </Typography>
        ボックスの左上点から見た位置を指定する。値によって起点が変わる。
        <List>
          <ListItem>static : デフォルト。HTMLのまんまの位置。</ListItem>
          <ListItem>
            relative :
            top、right、left、rightで相対的な位置を指定できる。本来配置される場所を起点としてどれだけ離れているかを指定できる。
          </ListItem>
          <ListItem>
            absolute :
            top、right、left、rightで絶対的な位置を指定できる。今いる場所に関わらず、ページ全体を起点としてどれだけ離れているかを指定できる。
          </ListItem>
          <ListItem>
            fixed :
            top、right、left、rightで絶対的な位置を指定できる。ページではなく画面全体に表示されている領域を起点として配置できる。(マイナスの値を入れれば画面外に配置することも可能)
          </ListItem>
        </List>
        <Typography
          id="gizikurasu"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          擬似クラス
        </Typography>
        <Box sx={{ marginLeft: "10px" }}>
          クラス付与してないけどクラスっぽく書けるから"擬似"クラス。 nth-child:{" "}
          &lt;li&gt;など連続するタグに対して、&lt;ul&gt;など親要素から見た順番や奇数偶数番目などを指定できる。
          <SyntaxHighLighter code={cssCode1} language="css" />
        </Box>
        <Typography
          id="yousowomannakanihaitisuruhouhouiroiro"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          要素を真ん中に配置する方法いろいろ
        </Typography>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            variant="h6"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            text-alignで(文字列とか要素が一つの時)
          </Typography>
          <SyntaxHighLighter code={cssCode2} language="css" />
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            variant="h6"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            displayで(要素が複数の時とか)
          </Typography>
          <SyntaxHighLighter code={cssCode3} language="css" />
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            variant="h6"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            transformプロパティを使う
          </Typography>
          <SyntaxHighLighter code={cssCode4} language="css" />
        </Box>
        <Typography
          id="benda-purehulikkusu"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          ベンダープレフィックス
        </Typography>
        -webkit-(webkitはsafariなんかのレンダリングエンジン)などと書き、標準化されていない拡張機能なんかを使えるようにするらしい。あんまりよくわかってないが、高度なことやらない限りは必要ないかも？
        <br />
        参考 :{" "}
        <span
          onClick={linkCSS_1}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          CSSでたまに見かける、-webkit-って何だろう...？(Zenn)
        </span>
      </Box>
    </Box>
  );
};

export default NoteCSS;
