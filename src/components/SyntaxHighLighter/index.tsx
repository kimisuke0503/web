import { useEffect } from "react";
import Prism from "prismjs";

const SyntaxHighLighter = (props: { code: string; language: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="syntax-highlight">
      <pre className="line-numbers">
        <code className={`language-${props.language}`}>{props.code}</code>
      </pre>
    </div>
  );
};

export default SyntaxHighLighter;
