import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Typography, Box, List, ListItem } from "@mui/material";

const NoteEndev = () => {
  return (
    <Box p={3}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="medium"
        sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
      >
        環境開発のメモ
      </Typography>
      リンク集：
      <AnchorLink href="#nodePakageManager">
        node package managerについて
      </AnchorLink>
      , <AnchorLink href="#intro-typescript">Typescript導入の手順</AnchorLink>
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
          npm(node package manager)について
        </Typography>
        <Box sx={{ marginLeft: "10px" }}>
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
          node.js(サーバーで動くjavascript、サーバーで動くとは、ブラウザが直接読み込むんじゃなくて、サーバーが読み込んで、計算とかして、返してくれるイメージ)の天才たちが作った抽象化されたプログラムのディレクトリ(パッケージ)のバージョン管理をやってくれてかつ自動でインストールしたりしてくれるやつ
          （メタが作ったyarnとかもあるけど、ややこしくなるからnpmで）
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            npmがあると何が嬉しいか
          </Typography>
          パケージをいちいちダウンロードして使うとバージョンとかパッケージ同士のバージョンの違いによるエラーなんかがめちゃくちゃだるいことになる。その辺を解決した状態でインストールしてもらって使う方が楽。これを外部パッケージをnpmに依存している。(dependency)という
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            node_modulesとは
          </Typography>
          プロジェクト(一つのアプリのプログラム群、俺でいうkimisukeweb)のルートディレクトリ(kimisukewebディレクトリ)直下に置かれ、ダウンロードしたパッケージたちが入る普通は編集してはいけない。
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            package.jsonとは
          </Typography>
          (とりあえずの理解、よくわかってないがあんまりいじることもないのかな)作成したプロジェクトの詳細設定、バージョンとか名前とか依存とかwebpackとかを管理する…？
          <Typography
            variant="h5"
            fontWeight="medium"
            sx={{
              marginTop: "10px",
              fontFamily: `"M PLUS Rounded 1c", sans-serif`,
            }}
          >
            webpack(モジュールバンドラ)とは
          </Typography>
          複数のファイル(複数のtypescriptファイルとか)を、まとめて(bundle)一つのファイルにしてくれる。どこのtypescriptをどこにどんな感じでjsにして保存するのかとかを設定する。
        </Box>
        <Typography
          id="intro-typescript"
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          Typescript導入の手順
        </Typography>
        <List>
          <ListItem>
            1.
            ルートディレクトリとなるディレクトリを作成し、そこのターミナルで「npm
            init -y」(質問項目をすべてyesで)コマンド入力→package.jsonができる
          </ListItem>
          <ListItem>
            2. 次に「npm install -D
            typescript」（npmで、インストール、開発者モードで(—save-devでもいい、こんときだけの設定って意味grobalではない)、typescriptを）コマンド入力→node_modulesとpackage-lock.jsonができる（ここまでで一応typescript使える、typescriptのコンパイルは「npx
            tsc (ファイル名)」、javascriptのコンパイルは「node (ファイル名)」）
          </ListItem>
          <ListItem>
            3. Webpackをダウンロードしていく「npm install -D webpack webpack-cli
            webpack-dev-server
            ts-loader」（npmで、インストール、webpackを、webpackをコマンドラインで使えるようにするツールを、webpackでローカルサーバーを立ち上げられるやつを(いらない？)、tsをいい感じにコンパイルしてくれるやつを）→node_modulesの中にいろいろ入って、package.jsonにいろいろ情報が追加される
          </ListItem>
          <ListItem>
            4.
            webpack.config.jsで設定をしていく(何をバンドルするのか、それはどこにあるのか、どこにバンドルしたものを出すのか、などなど、詳しくは中身参照)
          </ListItem>
          <ListItem>
            5. 「npx tsc
            —init」でtypescriptのための構成ファイルのダウンロード、中身はおいおい
          </ListItem>
          <ListItem>
            6. 最後に、package.jsonの中のscriptsを編集(特に“build”:
            “webpack”)し、tsは「npm run
            build」でコンパイル、ローカルサーバーは「npm start」で立てられる
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default NoteEndev;
