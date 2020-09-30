import React from "react"
import Layout from "../components/layout/layout"
import styled from 'styled-components'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"

export const PageWrapper = styled.div`
  margin: 1rem 0;
`
const Page = props => {
  let pageContent = props.pageContext
  return (
    <Layout title={pageContent.title}>
      <PageWrapper>
        {pageContent.content ? documentToReactComponents(
          pageContent.content.json,
          richTextOptions
        ) : null}
      </PageWrapper>
    </Layout>
  )
}

export default Page
