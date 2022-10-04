import React, { useEffect } from "react";
import Prism from "prismjs";

import AnchorLink from "react-anchor-link-smooth-scroll";

const reactCode1 = `
const [show, setShow] = useState<boolean>(false);

...

<Modal show={show} setShow={setShow} />  // showやらsetShowがpropsにあたる
`.trim();
const reactCode2 = `
const Modal = (props: { show: boolean; setShow: (show: boolean) => void }) => { // propsを受けとる(型定義もしっかり)
    const toggleModal = () => {
      props.setShow(!props.show);
    };
  
    return props.show ? (
      <div className="overlay" onClick={toggleModal}></div>
    ) : null;
  };
`.trim();

const NoteReact = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <main className="blog-note-content">
      <h1>Reactのメモ</h1>
      <div>
        リンク集：
        <AnchorLink href="#useState">useState</AnchorLink>,
      </div>
      <h2 id="useState">useState</h2>
      <h3>概要</h3>
      <p>
        関数コンポーネントでstateを管理するためのフック。(このフックって呼び方慣れない)値変えるのに何でこんなめんどいことをするのかというと、reactの特徴でもあるSPAを実現するためだから。
        <br />
        ふつう値とか変えても、ページを更新しないと見えてるところは変わらない。その値の変更とページの再レンダリングをどっちもやってくれるのがフックたち。
      </p>
      <h3>使い方(あくまで一例)</h3>
      <p>どっかのコンポーネントのtsxにpropsを定義</p>
      <pre className="line-numbers">
        <code className="language-js">{reactCode1}</code>
      </pre>
      <p>
        その制御をpropsで受け取り、イベントを定義(例ではshowがtrueならdiv要素を返す、というイベント)
      </p>
      <pre className="line-numbers">
        <code className="language-js">{reactCode2}</code>
      </pre>
    </main>
  );
};

export default NoteReact;
