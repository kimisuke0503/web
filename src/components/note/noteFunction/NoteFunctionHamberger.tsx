import React, { useEffect } from "react";
import Prism from "prismjs";

import img20220910_1 from "../../../images/note/20220910_1.png";
import img20220910_2 from "../../../images/note/20220910_2.png";

const NoteFunctionHamberger = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const htmlCode = `
    <!-- HTML -->
    <!-- ハンバーガーの時のサブメニュー -->
    <nav class="sub-nav" id="js-menu">
    <ul class="sub-nav-contents">
        <li><a href="index.html">Profile</a></li>
        <li><a href="note/note.html">Note</a></li>
        <li><a href="blog/blog.html">Blog</a></li>
    </ul>
    </nav>
    <!-- ハンバーガーボタン -->
    <button class="btn-menu" id="js-btn-menu">
    <span></span>
    <span></span>
    <span></span>
    </button>
    `.trim();
  const cssCode = `
    /* CSS */
    .sub-nav {
        display: none; /* 大きい画面の時は非表示 */
    }
    /* 画面の横幅が600px以下のときの設定 */
    @media (max-width: 600px) {
    .bg-nav {
        display: none; /* メニューバーを非表示 */
    }
    .wrapper {
        margin: 0 auto;
        padding: 0 5%;
    }

    .profile {
        width: 95%;
    }
    .interest p,
    .akademic-paper p,
    .certification p {
        padding: 5px;
    }

    /* ハンバーガーここから */
    .btn-menu {
        display: inline; /* ハンバーガーを表示 */
        
        margin-top: 35px;
        height: 10%;
        width: 8%;

        border-color: transparent;
        z-index: 10; /* メニューが出てきた時最前面に出るように */
    }

    .btn-menu span {
        width: 1.5rem; /* 線の横幅 */
        height: 2px; /* 線の太さ */
        background-color: #432; /* 線の色 */

        position: relative; /* これから相対位置を指定しますよって合図 */
        display: block; /* spanをブロック要素に変換 */

        transition: ease .4s; /* ハンバーガーメニュークリック時の三本線の動きを遅延 */
    }
    /* 3本線の調整 */
    .btn-menu span:nth-child(1) {
        top: 0;
        margin: 0 6px;
    }
    .btn-menu span:nth-child(2) {
        margin: 5px 6px;
    }
    .btn-menu span:nth-child(3) {
        top: 0;
        margin: 0 6px;
    }

    /* ボタンがクリックされた後の処理(active) */
    .btn-menu.active span:nth-child(1) {
        top: 5px; /* ×にするために線の左端を下げる */
        transform: rotate(45deg); /* 線の左端から見て右45度になるよう回す */
    }

    .btn-menu.active span:nth-child(2) {
        opacity: 0; /* 真ん中の線を消す(透明にする) */
    }

    .btn-menu.active span:nth-child(3) {
        top: -9px;
        transform: rotate(-45deg);
    }

    /* サブメニュー*/
    .sub-nav {
        display: inline; /* サブメニューを表示 */
        z-index: 9; /* ハンバーガーボタンより背面になるよう指定 */

        position: fixed; /* 位置を固定 */
        top: 0;
        right: -120%; /* ボタンが押されるまで隠す(position: fixed;との連携) */
        width: 80%; /* 出てくるメニューの幅を調整 */
        height: 100vh; /* 縦の長さは画面一杯に */
        background: rgba(255,255,255,.9);
        box-shadow: 0px 10px 15px rgba(0,0,0,0.3);
        transition: ease 0.4s; /* ハンバーガーメニュークリック時のメニューの動きを遅延 */
    }
    /* ボタンがクリックされた後の処理(active) */
    .sub-nav.active {
        right: 0; /* ボタンが押されると位置を変えて出てくるようにする */
    }
    `.trim();

  const jsCode = `
    // javascript
    const btnMenu = document.querySelector("#js-btn-menu");
    const nav = document.querySelector("#js-menu");
    
    btnMenu.addEventListener("click", function () {
    btnMenu.classList.toggle("active");
    nav.classList.toggle("active");
    });
    `.trim();

  return (
    <main className="blog-note-content">
      <h1>ハンバーガーメニューを作った。(2022/09/10)</h1>
      <h2>目標物の確認</h2>
      <p>
        実装したのは下の画像の囲っている部分の3本線のアイコン(ハンバーガーみたいだからハンバーガーメニューというらしい)で、クリックorタップすると右の方からにゅっとメニューが出てきます。
      </p>
      <div className="img-20220910-wrapper">
        <div className="item">
          <img src={img20220910_1} alt="スマホのスクショ"></img>
        </div>
        <div className="item">
          <img src={img20220910_2} alt="スマホのスクショ"></img>
        </div>
      </div>
      <h2>機能の詳細</h2>
      <p>
        画面を小さくしてデモしてみるとわかりやすいと思います。詳細は以下です。
      </p>
      <ul>
        <li>画面の横幅が600px以下のときにメニューを隠して出てくる</li>
        <li>クリックorタップすると3本線がバツに変化してメニューが出てくる</li>
        <li>変化したバツをクリックorタップすると元に戻る</li>
      </ul>
      <h2>実装</h2>
      <p>
        実装方法とソースコードを載せておきます。(必要そうなところだけ抜き出してます)
      </p>
      <p>1. htmlにメニューとハンバーガーのもとになる部分を書く。</p>
      <pre className="language-markup">
        <code>{htmlCode}</code>
      </pre>
      <p>2. cssで装飾する。</p>
      <pre>
        <code className="language-css">{cssCode}</code>
      </pre>
      <p>3. javascriptで動きのきっかけを操作する。</p>
      <pre>
        <code className="language-javascript">{jsCode}</code>
      </pre>
      <p>
        なんのこっちゃですが、やってることはdocument.querySelectorでidからタグを取得して、ハンバーガーがクリックorタップされたらclassList.toggleでハンバーガーボタンとサブメニューに"active"クラスを付与(toggleなので切り替えるって表現が正しいかも、もう一回クリックすると今度は"active"クラスが剥奪される)して、CSSで指定した装飾に0.4秒かけて変える。ということです🤔
        <br />
        要するにクリックorタップのきっかけでCSSの装飾が切り替わって、その過程をゆっくりにしてるのでアニメーションっぽくなっています。
      </p>

      <h2>感想</h2>
      <p>
        最初サブメニューを位置だけ指定して横に待機させておくとスクロールで横に行けてしまって待機してるサブメニューが見れてしまう(テレビ番組に気の抜けたスタッフが映り込んでしまうみたいな)というダサいことになっていて、直すのに難航しましたが、position:
        fixed;とright:
        -120%;でなんか行けました。(多分位置を画面外に指定してそこに固定するっていうのがいいのかな？)
        <br />
        ほんのちょっとのことですが、javascriptでactiveクラスを付与するっていうのも、ああこうやってjavascriptが活躍するんだなって実感がもててなるほどポイントでした。しかし大変😫
      </p>
    </main>
  );
};

export default NoteFunctionHamberger;
