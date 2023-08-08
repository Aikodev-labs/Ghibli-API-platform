import React from 'react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'




const MarkdownComponent = () => {
    
  const [mdText, setmdText] = useState("");

  useEffect(() => {
     fetch('../docs/MarkdownComponent.md')
     .then(response => response.text())
     .then(data => setmdText(data))
     
  }, []);
  

  return (
  
    <ReactMarkdown className="markdown">
    {mdText}
  </ReactMarkdown>
    
  )
}

export default MarkdownComponent