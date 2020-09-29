import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"


const Page = props => {
  let pageContent = props.pageContext

  return (
    <Layout>
      <div>
        {pageContent.content ? documentToReactComponents(
          pageContent.content.json,
          richTextOptions
        ) : null}
      </div>
    </Layout>
  )
}

export default Page
