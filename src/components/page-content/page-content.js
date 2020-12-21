import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utility/richtext"
import { size } from "../../index.styles";
import VideoPlayer from "../video-player/video-player";

export const PageWrapper = styled.div`
  margin: 2rem 0;
  width: 80%;
  @media (max-width: ${size.tablet}) {
    width: 100%;
    margin: 1rem 0;
    
  }
`

const PageContent = props => {
  let page = props.pageContent
  return (
    <PageWrapper>
      {page.content
        ? documentToReactComponents(page.content.json, richTextOptions)
        : null}
      {page.show_video ? <VideoPlayer url={page.video_url} /> : null}
    </PageWrapper>
  )
}

export default PageContent
