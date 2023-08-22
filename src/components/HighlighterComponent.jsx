import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HighlighterComponent = (props) => {

  
  return (

    <SyntaxHighlighter language={props.language} style={dark}>
    {props.code}
  </SyntaxHighlighter>
  
  
  )
}

export default HighlighterComponent