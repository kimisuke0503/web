import React from "react";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { linkRiakutoBOOTH } from "../../components/ExternalLinks";
import { Box, List, ListItem, Typography } from "@mui/material";

const Blog_20221004 = () => {
  return (
    <Box p={3}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
      >
        個人サイトを作りました。(2022/09/08)
      </Typography>
      <Box sx={{ margin: "0 10px 0" }}>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          はじめに
        </Typography>
        どうも、kimisukeです。ブログ2本目にしてサイトを作り直したという唐突っぷりですが、まあ作り直したんだから書きます。
        <br />
        全然関係ないですが、最近は文通にハマっております。もし興味ある方がいたら、SNSにDMなんかくれると嬉しいです。無駄なやり取りしましょう。
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          使用した技術スタック
        </Typography>
        今回このサイトを作り直す上で新たに使用した技術スタックの紹介をします。とはいっても、自分は初心者の中の初心者、井の中の蛙もいいとこなので、初心者が何となく理解した結果のアウトプットだと思ってもらえればと思います。
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "30px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            <BuildCircleIcon />
            Typescript
          </Typography>
          Javascriptを拡張して作られたプログラミング言語です。JavascriptはHTMLに埋め込んだりしてDOM操作(あとでちょっと書きます)やAjax(ページを再ロードせずに通信を行うこと)を行う便利な言語ですが、変数の型(数字や文字列)を言語が自動で判断して使うものになっており、個人開発レベルでは特に気にすることもないのかもしれませんが、巨大なシステムやサービスを作っているつよつよたちからすると、エラーが起こった時にどこを直せばいいのか判断しにくいという問題があるらしいです。
          <br />
          そこで、Microsoftが開発したのが、Javascriptでできることは残しつつ、型宣言の機能を付け加えたのがTypescriptというわけです。最近は至る所で聞くことが多いみたいです。
          <br />
          TypescriptはコンパイルしてJavascriptに変換する段階で型のエラーなどを知らせてくれて、どこが良くないのかが分かりやすくなっていますが、コンパイルをするということで、その環境構築が必要になります。それについてもノートに書いているのでよろしければ。
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "30px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            <BuildCircleIcon />
            React
          </Typography>
          Javascriptのライブラリです。(Javascriptで使える道具箱みたいなやつ。Javascriptがポケモンだとしたら、Javascriptが覚えるわざマシンのハッピーセットみたいなイメージ)
          <br />
          最近というかおしゃれなwebの世界では、いちいち欲しい情報に辿り着くのにページが移り変わるのはなんかダサいよね。ページはそのまま変えたいとこだけ変えれば良くない？みたいな考えがあるみたいです。(Single
          Page Applicationというみたい)
          <br />
          そのようなおしゃれなUI(ユーザーインターフェース、僕らがネットを使う時に実際に操作する部分)を作るのに、何かと便利で高速、汎用性も高い。というのがReactです。(諸説あり)
          <br />
          Reactで開発をしていくのに、コンポーネントというのがありまして、大きい土台に小さな部品(コンポーネント)をたくさん組み合わせて作るみたいな作り方になっているのですが、その部品同士で変数や関数のやり取りが少なからず必要になります。
          <br />
          その際にTypescriptが相性が良く、部品同士の値の受け渡しの際のエラーや脆弱性をいち早く見つけられる。というような利点があるみたいです。(初心者すぎてあまり実感できていない...)
          <br />
          Facebook(今はMeta)が作ったもので、例によって環境構築がなかなか難しかった(webpackやbabelの知識が必要になってくる)ので導入になかなか腰が重くなりがちだったらしいのですが、製作者であるMetaがその辺りの難しさを一旦解決して、その上に色々カスタムしてね、みたいな感じで(マインクラフトみたい)「create-react-app」というのを提供してくれています。
          <br />
          長いものには巻かれろ精神で僕も使って今回のサイトを作りました！(自由すぎるのは、不自由の始まり。読み人知らず)
        </Box>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          サイト概要(変わってません)
        </Typography>
        <List>
          <ListItem>Profile : 自己紹介を載せています。</ListItem>
          <ListItem>
            Note :
            勉強したことやこのサイトを作るにあたってのインプットなどを細かく書いています。
          </ListItem>
          <ListItem>
            Blog :
            この記事もその一つ。日々のことや趣味のこと、勉強で苦労したことなど、文字通りのブログ。
          </ListItem>
          <ListItem>
            App :
            まだ先にはなると思いますが、制作物なんかを供養するページにできればと...。
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
          役に立った書籍など
        </Typography>
        このサイトを作る上で役に立って、勉強した教材を紹介します。(とはいってもまだまだ勉強中で、何をするにしてもとにかく調べながら進めていく感じで作りました)webページの公開やらサーバーのことやらはわからないことばかりで、Javascriptはチュートリアル程度の知識でした。
        <Box sx={{ margin: "10px 0 0 10px" }}>
          <span
            onClick={linkRiakutoBOOTH}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            りあクト！TypeScriptで始める作らないReact開発：
          </span>
          <br />
          Reactのためだけの情報だけでなく、周辺環境や最近のトレンド、TypeScriptのことについても繋がりを持って理解できる本です。会話形式なので読みやすい。
          <br />
          ただ、開発経験のない方には向かない、と本に明言してある通り、何かを作りながら進めるみたいな形ではないので、インプット用の読み物としては非常に良書ですが、練習用ではないので、その都度参照という形でもいいのかもしれません。(僕はまだ最後まで読めておらず、経験不足を痛感する結果となりました...)
        </Box>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          感想/今後の展望
        </Typography>
        2週間ほどかけてゆっくり作っていきました。ほとんどReact固有の技術は使えておらず、まだまだ勉強と経験が必要と言った感じです。
        <br />
        でも、初心者でも割と個人サイトぐらいは作れるもんだなとも思いました。(正直一番しんどかったのは環境開発でした...)
        <br />
        今後に関しては、しばらく作る時に調べたり勉強したことをノートにまとめていくことを考えてます。ただ、今この記事とかもtsxでベタ書きしている状態なので、ワードプレスや何たらCMS?(ちょっと調べたけど難しそうでスルーした)でもっと個人サイトの管理がしやすいように機能を導入していくことを考えてます。
        <br />
        そうはいっても、しばらく休憩ということにしたいとも思っています。(なかなかカロリー高かったので、ゲームやら映画やら、少し趣味に没頭します！)
        <br />
        読んでくれてありがとうございます！では！
      </Box>
    </Box>
  );
};

export default Blog_20221004;
