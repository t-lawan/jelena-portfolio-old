import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"
import ImageCarousel from "../components/image-carousel/image-carousel"
import { PageWrapper } from "../components/page-content/page-content"
import styled from "styled-components"
import { size } from "../index.styles"

const ProjectDoubleColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const ProjectWrapper = styled(PageWrapper)`
  width: 100%;
  height: auto;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  @media (max-width: ${size.tablet}) {
    padding: 0rem;
  }
`

const ScrollableTextBox = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  /* padding: 0.5rem; */
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }

  @media (max-width: ${size.tablet}) {
    height: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
`

const Project = props => {
  let item = Convert.toProjectModel(props.pageContext)
  return (
    <Layout title={item.title}>
      <ProjectWrapper>
        <ProjectDoubleColumn>
          <ScrollableTextBox>
            {/* DESCRIPTION */}
            {item.display_description
              ? documentToReactComponents(
                  item.description.json,
                  richTextOptions
                )
              : null}

            {/* VIDEO */}
            {item.display_video ? <p>videos</p> : null}
          </ScrollableTextBox>
          <ImageColumn>
            {/* IMAGES */}
            {item.display_images ? (
              <ImageWrapper>
                <ImageCarousel images={item.images} />
              </ImageWrapper>
            ) : null}
          </ImageColumn>
        </ProjectDoubleColumn>
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
