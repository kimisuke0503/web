import React, { useEffect } from "react";
import img20221004_1 from "../../../assets/images/note/img20221004_1.png";
import img20221004_2 from "../../../assets/images/note/img20221004_2.png";

import Prism from "prismjs";

import { linkUseMedia } from "../../../components/ExternalLinks";

const tsCode1 = `
import { useMedia } from "react-use";

// 画面の広さ制御
const isWide = useMedia("(min-width: 600px)");
  ...
const Header = () => {
    ...
    return {isWide ? (// 広い場合) : (// 狭い場合)};
};
`.trim();

const tsCode2 = `
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// モーダル制御
const Header = () => {
    ...
    const [show, setShow] = useState<boolean>(false);
    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <header>
        ...
        <>
            <Modal show={show} setShow={setShow} /> // propsの受け渡し
            <IconButton color="primary" onClick={toggleModal}> // ボタンを押すとtoggleModalを発火
              <MenuIcon />
            </IconButton>
            <div className={{show ? "active" : ""}}> // activeクラスを付与したりしなかったりでサブメニューを制御
              <SubMenu />
            </div>
          </>
        </header>
    );
};
`.trim();

const tsCode3 =
  `const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => {
    const toggleModal = () => {
      props.setShow(!props.show);
    };
  
    return props.show ? (
      <div className="overlay" onClick={toggleModal}></div> // showがtrueならオーバーレイ表示
    ) : null;
};
`.trim();

const NoteFunctionHamberger2 = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="blog-note-content">
      <h1>ハンバーガーメニューを作り直した。</h1>
      <p>
        HTML&CSSで作っていたハンバーガーメニューをTypescript&Reactで作り直しましたのでメモ。
        <br />
        CSSでなんじゃこっちゃ書いていたよりはシンプルになっているし、ちょっと機能も足しました。
      </p>
      <h2>概要</h2>
      <div className="img-20220910-wrapper">
        <img src={img20221004_1} alt="スマホのスクショ"></img>
        <img src={img20221004_2} alt="スマホのスクショ"></img>
      </div>
      <p>画面を小さくしてデモしてみるとわかりやすいと思います。</p>
      <h3>機能の詳細</h3>
      <ul>
        <li>画面の横幅が600px以下のときにメニューを隠して出てくる</li>
        <li>
          クリックorタップするとメニューが出てきて、それ以外の部分は暗くなる
        </li>
        <li>
          暗いところか、いずれかのコンテンツをクリックorタップすると元に戻る
        </li>
      </ul>
      <h3>機能実装の仕組み</h3>
      <p>ざっと書きます。詳しくはコード参照</p>
      <ul>
        <li>
          <span className="link" onClick={linkUseMedia}>
            useMedia
          </span>
          を用いて画面が600px以上あるか否かを取得し、メニューとハンバーガーボタンの表示を切り替える。
        </li>
        <li>
          ハンバーガーをクリックするきっかけでサブメニューのCSS切り替えとオーバーレイ(画面が暗くなる部分)表示
        </li>
        <li>メニューコンテンツのクリックかオーバーレイのクリックで元に戻る</li>
      </ul>
      <h2>実装</h2>
      <h3>
        <span className="link" onClick={linkUseMedia}>
          useMedia
        </span>
        を用いて画面が600px以上あるか否かを取得し、メニューとハンバーガーボタンの表示を切り替える。
      </h3>
      <p>Header.tsx</p>
      <pre>
        <code className="language-js">{tsCode1}</code>
      </pre>
      <h3>
        ハンバーガーをクリックするきっかけでサブメニューのCSS切り替えとオーバーレイ(画面が暗くなる部分)表示
        and 非表示
      </h3>
      <p>Header.tsx</p>
      <pre>
        <code className="language-js">{tsCode2}</code>
      </pre>
      <p>Modal.tsx</p>
      <pre>
        <code className="language-js">{tsCode3}</code>
      </pre>
      <h2>感想</h2>
      <p>
        materialUIやその他のライブラリを使うことでだいぶスッキリかけたと思います。useStateなどの使い方も実感できました。しかし大変🙃
      </p>
    </main>
  );
};

export default NoteFunctionHamberger2;
