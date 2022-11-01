import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { linkWakabaAmazon } from "../../components/ExternalLinks";
import { linkHTMLCSSAmazon } from "../../components/ExternalLinks";

const Blog_20220908 = () => {
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
        どうも、はじめまして、はじめましてじゃない方もいるかもしれませんが、kimisuke（中身は毛利憲竜）です。よろしくお願いします。ご無沙汰してます。
        <br />
        現在大学院生で、大学受験頑張った人で大学生活なかなかにダラダラ過ごした人なら共感してくれるかもしれませんが、勉強したことや趣味のことなど、日々自分の中に入ってくるものがいつの間にか抜けていく感覚が寂しく、それらをまとめる個人サイトを作ってみました。
        <br />
        まずはじめに、このサイトを作った時点の(今後さまざま改良していく所存ではありますが)自分のことについてまとめたく、本記事を書いています。
        暇つぶし程度にお付き合いいただけると嬉しいです。(詳しい技術スタックなど、そんな堅いことは特に書いていません...)
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          サイト作成のモチベーション
        </Typography>
        「いらぬ。」と思うかもしれませんが、この個人サイトを作ったモチベーションをもう少し詳しく話させてもらいます。
        <br />
        もともとひょんなきっかけからJavascriptやTypescript、Reactなどの最近のUIを構築している言語や技術に興味がわき、研究のプレッシャーの合間を縫ってちょくちょく勉強していました。
        そんな中、やっぱりさまざまな天才たちが作ってきた技術は自分の身に余るものがあり、一気に勉強していくとキャパオーバーになるので、勉強したことを都度都度練習してやっていきたいなと感じていました。
        ということで、JavascriptやTypescript、Reactなどの技術スタックの練習の土台として、この個人サイトは完成したわけです。
        <br />
        というので、じゃあそれらを使ってこのサイトはできているのかというと、そうではなく...。
        主にこのサイトはHTML&CSSでできており、現時点で少しだけJavascriptを用いて動きをつけて、サイトの公開やサーバー関連のことはまだまだ知識が乏しいので、GitHub
        Pagesにおまかせしているという状況です。
        本当はTypescriptやReactなんかを使って書きたかったのですが、技術不足甚だしく、途方もないなと感じたので、こうなった次第です。
        なので、勉強したことをまとめるNoteにはこのサイトを作るにあたって勉強したHTML&CSSや、Javascript、Typescript、Reactなどのフロントエンド関連のことが多くなっていくと思います。(そのうちこのサイトをそっくり別の言語や技術スタックで思いっきり作り替えるかもしれません、ていうかそのつもりです。)
        <br />
        そうはいっても勉強ガチ勢ではないし、せっかく学生のなので、あんまり堅くならずに趣味のことだったりも載せていくことになると思います。需要があるかはわかりませんがみてる人そもそもそんなにいないと思うので(笑)。どうぞ、よろしくお願いします。
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "50px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          サイト概要
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
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          使われているツールたち(2022/09時点)
        </Typography>
        お恥ずかしいですが、本サイトを作るのに使ったものたちを少し説明します。
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          言語
        </Typography>
        <List>
          <ListItem>
            HTML :
            有名なマークアップ言語です。文章がどんな役割を持っているのかを指定する程度のものです。
          </ListItem>
          <ListItem>
            CSS : HTMLで書いた文章を装飾しています。これがなかなか奥深い...
          </ListItem>
          <ListItem>
            Javascript :
            現状全体の2%くらいしか使っていませんが、サイトの動きをつけるのをアシストしているみたいな感じです。本当は非同期通信やAjax、DOM操作など、優秀なやつです。(そんなに詳しくわかっていない)
          </ListItem>
        </List>
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          その他
        </Typography>
        <List>
          <ListItem>
            GitHub :<br />
            このサイトの公開にもお世話になっています。複数人でプログラムを作成する場合や、個人でも確実じゃない機能をテスト追加したりするときにメインのプログラムに影響を与えずパラレルワールドみたいにして編集できる便利なやつです。まだまだ勉強不足なので偉そうなことは言えませんが、とにかくすごいやつです。参考になった本を下に載せておきます。
          </ListItem>
          <ListItem>
            Visual Studio Code :<br />
            言わずもがなMicrosoftが出しているソースコードエディタです。下の編集画面がこれです。料理で言うフライパンみたいなもんかも(違う)
          </ListItem>
        </List>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          役に立った書籍など
        </Typography>
        このサイトを作る上で役に立って、勉強した教材を紹介します。(なんかここまで書いてきて技術不足を晒すのが恥ずかしくなってきたけど、気にすんな！)情報系なのでプログラミングは授業にやっとついていける程度の知識で、GitHubやHTML&CSSは興味はあるけど全然わからんと言う感じでした。(Javascriptはチュートリアル程度)
        <Box sx={{ margin: "0 0 10px 10px" }}>
          <br />
          <span
            onClick={linkWakabaAmazon}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            改訂2版 わかばちゃんと学ぶ Git使い方入門：
          </span>
          <br />
          結構有名なやつですね。GitHub超初心者でしたがこれ読んでちょっと理解できました。ただ、書籍内ではsourcetree(Gitを使うためのwebアプリ)を使って話が進んでいきますが、書かれた時と現在では認証の仕方が変わったらしく、うまくいかなかったので、gitの説明は本で理解して、使うのは上述のvscodeでやりました。(Git
          Graphっていう拡張機能が見やすくて良かったです)
          <br />
          <br />
          <span
            onClick={linkHTMLCSSAmazon}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            1冊ですべて身につくHTML & CSSとWebデザイン入門講座:
          </span>
          <br />
          これで基礎的な部分は理解できました。実際に書きながら学べたので良かったです。本屋さんでたくさんあるHTML&CSSの本の中から、一際輝いていたので選びました。(本当は著者のManaさんが可愛かったので。迷った時は心躍る方へ！)
        </Box>
        上記の本を参考に作成をはじめて、わからない時はその都度調べて作っていきました。大元の制作時間は3日間(15時間)くらいです。(インターンに落ちたり中止になったり非常に暇な夏休みでした...)
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          今後の展望
        </Typography>
        ここまで読んでいただいてありがとうございます。あくまで僕の練習用のサイトなので、いろいろ大目に見てもらえるとありがたいです。今後については以下のように考えてます。(言ってる自分が勉強しないといけないことの多さにやられてモチベが下がってきていますが...)
        <List>
          <ListItem>
            ・このサイト作成にあたってメモしたくなったことについてNoteにまとめていく。
          </ListItem>
          <ListItem>
            ・なるべくJavascriptを使って動きなど、機能を追加していく。
          </ListItem>
          <ListItem>
            ・ある程度慣れてきたらTypescriptやReactを使ってみる&Noteにまとめる。
          </ListItem>
          <ListItem>
            ・もっと慣れてきたらこのサイト自体をTypescriptやReact、その他バックエンド関連の技術を使って作り直す。
          </ListItem>
        </List>
        などなど考えてます😫
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{
            marginTop: "30px",
            fontFamily: `"M PLUS Rounded 1c", sans-serif`,
          }}
        >
          おわりに
        </Typography>
        ここまで読んでくれたあなたは非常に物好きでしょう。乱文失礼しました。アウトプットしながら慣れていきたいと思います。今後の伸び代に期待してください。飽きて止める可能性も十分にありますが、しばしお付き合いいただけると幸いです。ありがとうございました😺
      </Box>
    </Box>
  );
};

export default Blog_20220908;
