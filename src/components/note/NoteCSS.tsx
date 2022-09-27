import React, { useEffect, useState } from "react";

const NoteCSS = () => {
  return (
    <article>
      <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
      <pre>
        <code className="prettyprint">{`
.elem {
  font-size: 16px;
}
    `}</code>
      </pre>
    </article>
  );
};

export default NoteCSS;
