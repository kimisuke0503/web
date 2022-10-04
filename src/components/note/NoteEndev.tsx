import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NoteEndev = () => {
  return (
    <main className="blog-note-content">
      <h1>環境開発のメモ</h1>
      <div>
        リンク集：
        <AnchorLink href="#nodePakageManager">
          node package manager
        </AnchorLink>,{" "}
        <AnchorLink href="#intro-typescript">Typescript導入の手順</AnchorLink>
      </div>
      <h2 id="nodePakageManager">npm(node package manager)について</h2>
      <h3>概要</h3>
      <p>
        node.js(サーバーで動くjavascript、サーバーで動くとは、ブラウザが直接読み込むんじゃなくて、サーバーが読み込んで、計算とかして、返してくれるイメージ)の天才たちが作った抽象化されたプログラムのディレクトリ(パッケージ)のバージョン管理をやってくれてかつ自動でインストールしたりしてくれるやつ
        （メタが作ったyarnとかもあるけど、ややこしくなるからnpmで）
      </p>
      <h3>npmのメリット</h3>
      <p>
        パケージをいちいちダウンロードして使うとバージョンとかパッケージ同士のバージョンの違いによるエラーなんかがめちゃくちゃだるいことになる。その辺を解決した状態でインストールしてもらって使う方が楽。これを外部パッケージをnpmに依存している。(dependency)という
      </p>
      <h3>node_modulesとは</h3>
      <p>
        プロジェクト(一つのアプリのプログラム群、俺でいうkimisukeweb)のルートディレクトリ(kimisukewebディレクトリ)直下に置かれ、ダウンロードしたパッケージたちが入る普通は編集してはいけない。
      </p>
      <h3>package.jsonとは</h3>
      <p>
        (とりあえずの理解、よくわかってないがあんまりいじることもないのかな)作成したプロジェクトの詳細設定、バージョンとか名前とか依存とかwebpackとかを管理する…？
      </p>
      <h3>webpack(モジュールバンドラ)とは</h3>
      <p>
        複数のファイル(複数のtypescriptファイルとか)を、まとめて(bundle)一つのファイルにしてくれる。どこのtypescriptをどこにどんな感じでjsにして保存するのかとかを設定する。
      </p>
      <h2 id="intro-typescript">Typescript導入の手順</h2>
      <p>
        1. ルートディレクトリとなるディレクトリを作成し、そこのターミナルで「npm
        init -y」(質問項目をすべてyesで)コマンド入力→package.jsonができる
      </p>
      <p>
        2. 次に「npm install -D
        typescript」（npmで、インストール、開発者モードで(—save-devでもいい、こんときだけの設定って意味grobalではない)、typescriptを）コマンド入力→node_modulesとpackage-lock.jsonができる（ここまでで一応typescript使える、typescriptのコンパイルは「npx
        tsc (ファイル名)」、javascriptのコンパイルは「node (ファイル名)」）
      </p>
      <p>
        3. Webpackをダウンロードしていく「npm install -D webpack webpack-cli
        webpack-dev-server
        ts-loader」（npmで、インストール、webpackを、webpackをコマンドラインで使えるようにするツールを、webpackでローカルサーバーを立ち上げられるやつを(いらない？)、tsをいい感じにコンパイルしてくれるやつを）→node_modulesの中にいろいろ入って、package.jsonにいろいろ情報が追加される
      </p>
      <p>
        4.
        webpack.config.jsで設定をしていく(何をバンドルするのか、それはどこにあるのか、どこにバンドルしたものを出すのか、などなど、詳しくは中身参照)
      </p>
      <p>
        5. 「npx tsc
        —init」でtypescriptのための構成ファイルのダウンロード、中身はおいおい
      </p>
      <p>
        6. 最後に、package.jsonの中のscriptsを編集(特に“build”:
        “webpack”)し、tsは「npm run build」でコンパイル、ローカルサーバーは「npm
        start」で立てられる
      </p>
    </main>
  );
};

export default NoteEndev;
