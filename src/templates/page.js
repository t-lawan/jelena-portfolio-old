import React from "react"
import Layout from "../components/layout/layout"
import PageContent from "../components/page-content/page-content";

const Page = props => {
  let pageContent = props.pageContext
  return (
    <Layout title={pageContent.title}>
      <PageContent pageContent={pageContent} />
    </Layout>
  )
}

export default Page
