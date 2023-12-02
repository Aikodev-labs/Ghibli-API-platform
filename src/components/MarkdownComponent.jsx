import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Props from "prop-types";

const MarkdownComponent = ({ docPath }) => {
  const [mdText, setmdText] = useState(`  # Markdown Example `);

  useEffect(() => {
    fetch(docPath)
      .then((response) => response.text())
      .then((data) => setmdText(data));
  }, [docPath]);


  return (
    <div>
      {mdText && (
        <ReactMarkdown
          className="markdown"
        >
          {mdText}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default MarkdownComponent;

MarkdownComponent.propTypes = {
  docPath: Props.string,
};

MarkdownComponent.defaultProps = {
  docPath: "/docs/example.md",
};
