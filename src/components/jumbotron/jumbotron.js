import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utility/richtext"
import * as ActionTypes from "../../store/actions"
import CloseIcon from "../../images/close_overlay.svg"
import { size } from "../../index.styles"
const JumbotronWrapper = styled.section`
  /* padding: 1rem; */
  height: 70vh;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  @media (max-width: ${size.tablet}) {
    justify-content: center;
  }
`

const JumbotronModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background: yellow; */
  z-index: 500;
  padding: 1rem;
  display: ${props => (props.show ? "" : "none")};
`

const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const ModalBody = styled.div`
  overflow-y: scroll;
  height: inherit;
  scrollbar-width: none;
`
const JumbotronUnderlay = styled.div`
  display: ${props => (props.show ? "" : "none")};
  width: auto;
  max-height: 100%;
  padding-bottom: 1rem;
`

const ImageTitle = styled.p`
  display: none;
  font-style: italic;
  @media (max-width: ${size.tablet}) {
    display: inherit;
  }
`

const CloseImageContainer = styled.div`
  width: 3%;
  @media (max-width: ${size.tablet}) {
    width: 5%;
  }
`

const Jumbotron = props => {
  let content = props.jumbotronContent
  let image = content.find(im => {
    return im.type === "Image"
  })

  let bio = content.find(bi => {
    return bi.type === "Bio"
  })

  return (
    <JumbotronWrapper>
      <JumbotronModal show={props.show_modal}>
        <ModalHeader>
          <CloseImageContainer>
            <img src={CloseIcon} onClick={() => props.toggleModal()} />
          </CloseImageContainer>
        </ModalHeader>

        <ModalBody>
          {documentToReactComponents(bio.text.json, richTextOptions)}
        </ModalBody>
      </JumbotronModal>
      <JumbotronUnderlay
        onClick={() => props.toggleModal()}
        show={!props.show_modal}
      >
        <ImageTitle> {image.title} </ImageTitle>
        <Img fluid={image.image.fluid} />
      </JumbotronUnderlay>
    </JumbotronWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    jumbotronContent: state.jumbotron_content,
    show_modal: state.show_modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () =>
      dispatch({
        type: ActionTypes.TOGGLE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)
