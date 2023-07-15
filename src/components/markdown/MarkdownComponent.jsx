import React from 'react'
import { useState, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const MarkdownComponent = () => {
    
  const [mdText, setmdText] = useState("");

  useEffect(() => {
     fetch('/src/components/markdown/MarkdownText.md')
     .then(response => response.text())
     .then(data => setmdText(data))
     
  }, []);
  

  return (
  
      <ReactMarkdown children={mdText} />
    
  )
}

export default MarkdownComponent