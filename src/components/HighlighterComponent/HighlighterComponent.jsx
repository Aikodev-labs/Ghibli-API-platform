import { Dialog, DialogBody } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HighlighterComponent.css";

const transparentBackgroundStyle = {
  ...dark,
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    background: "transparent",
    boxShadow: "none !important",
    border: "none",
    whiteSpace: "pre !important",
    overflow: "visible !important",
  },
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: "none",
    boxShadow: "none !important",
    border: "none",
    margin: "0 !important",
    padding: "1rem !important",
    overflow: "visible !important",
    whiteSpace: "pre !important",
    width: "100%",
    height: "100%",
    textShadow: "none !important",
  },
  ".token": {
    textShadow: "none !important",
  },
  ".token span": {
    textShadow: "none !important",
  },
};

const HighlighterComponent = (props) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const renderHighlighter = (isInModal = false) => (
    <div className={`${isInModal ? "h-full" : "h-full"}`}>
      <div
        className={`
          highlighter-container
          ${isInModal ? "h-full" : "max-h-96 h-full"} 
          overflow-auto 
          transition-all duration-200
          rounded-md
        `}
        style={{
          overflowX: "auto",
          overflowY: "auto",
        }}
      >
        <SyntaxHighlighter
          wrapLines={false}
          language={props.language}
          style={transparentBackgroundStyle}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            overflow: "visible",
            whiteSpace: "pre",
            width: "100%",
          }}
        >
          {props.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      {props.maximizeControl && (
        <button
          onClick={toggleMaximize}
          className="maximize-button absolute top-2 right-2 z-20 
                     w-8 h-8 
                     bg-black/20 hover:bg-black/40 
                     border border-white/20 hover:border-white/40
                     rounded-md 
                     text-white/70 hover:text-white
                     transition-all duration-200 ease-in-out
                     flex items-center justify-center
                     hover:scale-110 active:scale-95"
          title={isMaximized ? "Minimizar" : "Maximizar"}
        >
          {isMaximized ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          )}
        </button>
      )}

      {renderHighlighter(false)}

      {props.maximizeControl && (
        <Dialog
          open={isMaximized}
          handler={toggleMaximize}
          size="xl"
          className="bg-gray-900/95 backdrop-blur-md border border-gray-700"
        >
          <DialogBody className="p-6 h-[85vh] relative">
            <button
              onClick={toggleMaximize}
              className="absolute top-4 right-4 z-30 
                         w-8 h-8 
                         bg-red-500/20 hover:bg-red-500/40 
                         border border-red-300/20 hover:border-red-300/40
                         rounded-md 
                         text-white/70 hover:text-white
                         transition-all duration-200 ease-in-out
                         flex items-center justify-center
                         hover:scale-110 active:scale-95"
              title="Cerrar"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {renderHighlighter(true)}
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default HighlighterComponent;

HighlighterComponent.propTypes = {
  wrapLines: PropTypes.bool,
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  maximizeControl: PropTypes.bool,
};

HighlighterComponent.defaultProps = {
  wrapLines: false,
  language: "javascript",
  code: "please provide code",
  maximizeControl: false,
};
