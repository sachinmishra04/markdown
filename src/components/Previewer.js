import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={materialDark}
        language={language}
        children={value}
      />
    );
  },
};

const Previewer = (props) => {
  return (
    <ReactMarkdown
      plugins={[gfm]}
      renderers={renderers}
      children={props.editorText}
    ></ReactMarkdown>
  );
};

export default Previewer;
