import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";

const transparentBackgroundStyle = {
  ...dark,
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    background: "transparent",
    boxShadow: "none !important", // Remove box-shadow and use !important to override inline style
    border: "none",
  },
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: "none",
    boxShadow: "none !important", // Remove box-shadow and use !important to override inline style
    border: "none",
  },
  ".token": {
    textShadow: "none !important", // Remove text shadow from tokens
  },
  ".token span": {
    textShadow: "none !important", // Remove text shadow from token spans
  },
};

const HighlighterComponent = (props) => {
  return (
    
      <SyntaxHighlighter
        wrapLines={props.wrapLines}
        language={props.language}
        style={transparentBackgroundStyle}
      >
        {props.code}
      </SyntaxHighlighter>
    
  );
};

export default HighlighterComponent;

HighlighterComponent.propTypes = {
  wrapLines: PropTypes.bool,
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

HighlighterComponent.defaultProps = {
  wrapLines: false,
  language: "javascript",
  code: "please provide code",
}
