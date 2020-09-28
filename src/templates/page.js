import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"


const Page = props => {
  let item = Convert.toProjectModel(props.pageContext)
  return (
    <Layout>
      <div>
        <p> Hello </p>

      </div>
    </Layout>
  )
}

export default Page
