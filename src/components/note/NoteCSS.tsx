import React, { useEffect } from "react";
import Prism from "prismjs";
import { linkCSS_1 } from "../externalLink";

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
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="blog-note-content">
      <h1>CSSのメモ</h1>
      <h2>プロパティ</h2>
      <h3>position</h3>
      <p>ボックスの左上点から見た位置を指定する。値によって起点が変わる。</p>
      <ul>
        <li>static : デフォルト。HTMLのまんまの位置。</li>
        <li>
          relative :
          top、right、left、rightで相対的な位置を指定できる。本来配置される場所を起点としてどれだけ離れているかを指定できる。
        </li>
        <li>
          absolute :
          top、right、left、rightで絶対的な位置を指定できる。今いる場所に関わらず、ページ全体を起点としてどれだけ離れているかを指定できる。
        </li>
        <li>
          fixed :
          top、right、left、rightで絶対的な位置を指定できる。ページではなく画面全体に表示されている領域を起点として配置できる。(マイナスの値を入れれば画面外に配置することも可能)
        </li>
      </ul>

      <h2>擬似クラス</h2>
      <p>クラス付与してないけどクラスっぽく書けるから"擬似"クラス。</p>
      <h3>nth-child</h3>
      <p>
        &lt;li&gt;など連続するタグに対して、&lt;ul&gt;など親要素から見た順番や奇数偶数番目などを指定できる。
      </p>
      <pre className="line-numbers">
        <code className="language-css">{cssCode1}</code>
      </pre>

      <h2>要素を真ん中に配置する方法いろいろ</h2>
      <h3>wrapperから指定する</h3>
      <ul>
        <li>text-alignで(文字列とか要素が一つの時)</li>
        <pre>
          <code className="language-css">{cssCode2}</code>
        </pre>
        <li>
          displayで(要素が複数の時とか)
          <pre>
            <code className="language-css">{cssCode3}</code>
          </pre>
        </li>
      </ul>
      <h3>transformプロパティを使う</h3>
      <p>
        画像など、上の方法でうまくいかない時もあり、最終兵器translate。アニメーションをつけるときなどにも使える。
      </p>
      <pre>
        <code className="language-css">{cssCode4}</code>
      </pre>

      <h2>ベンダープレフィックス</h2>
      <p>
        -webkit-(webkitはsafariなんかのレンダリングエンジン)などと書き、標準化されていない拡張機能なんかを使えるようにするらしい。あんまりよくわかってないが、高度なことやらない限りは必要ないかも？
      </p>
      <p>
        参考 :{" "}
        <span className="link" onClick={linkCSS_1}>
          CSSでたまに見かける、-webkit-って何だろう...？(Zenn)
        </span>
      </p>
    </main>
  );
};

export default NoteCSS;
