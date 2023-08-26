import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const transparentBackgroundStyle = {
  ...dark,
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    background: 'transparent',
    boxShadow: 'none !important', // Remove box-shadow and use !important to override inline style
    border: 'none',
  },
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: 'none',
    boxShadow: 'none !important', // Remove box-shadow and use !important to override inline style
    border: 'none',
  },
  '.token': {
    textShadow: 'none', // Remove text shadow from tokens
  },
  '.token span': {
    textShadow: 'none', // Remove text shadow from token spans
  },
};

const HighlighterComponent = (props) => {

  
  return (

    <div>

    <SyntaxHighlighter language={props.language} style={transparentBackgroundStyle}>
      {props.code}
    </SyntaxHighlighter>
  </div>
  
  
  )
}

export default HighlighterComponent