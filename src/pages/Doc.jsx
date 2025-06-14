import MarkdownComponent from "../components/MarkdownComponent"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Doc = () => {

  const { docs } = useParams();

  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [docs])

  return (
    <main className="pt-[113px] h-min-witout-footer w-full pr-6 pb-10">
        <MarkdownComponent docPath={docs ? `/docs/${docs}.md` : '/docs/getStarted.md'} />
    </main>
  )
}

export default Doc