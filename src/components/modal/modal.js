import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import Links from "../links/links";
import { ModalTypes } from "../../utility/richtext";
import ProjectLinks from "../links/project-links";
import Img from "gatsby-image"


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  background: rgb(242,242,242);
  left: 0;
  z-index: 1500;
  height: 100%;
  padding: 0 1rem;
  width: 100%;
  /* display: none; */
  display: ${props => (props.showinmob ? "inherit" : "none")};

  @media (max-width: ${size.tablet}) {
  }
`

const ImageWrapper = styled.div`
    height: 90vh;
    width: 90vw;
    top: 0;
    left: 0;
    @media (max-width: ${size.tablet}) {
      display: none;
    }

`

const Image = styled(Img)`
  /* position: fixed !important; */
  width: 90vw;
  height: 100vh;
  img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
    display: block;
    margin: 0 auto;
    /* position: inherit !important; */
  }
  > picture > img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
    display: block;
    margin: 0 auto;
  }
`


const Hamburger = styled(HamburgerBoring)`
  /* display: none;   */
  float: right;
  padding: 1rem 0 !important;
  display: ${props => (props.showinmob ? "inherit" : "none")};
  position: relative !important;
  @media (max-width: ${size.tablet}) {
  }

  @media (max-width: ${size.mobileL}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`
const Modal = props => {
  let fluid = props.image_fluid ? JSON.parse(props.image_fluid) : null;
  return (
    <ModalWrapper showinmob={props.show_mobile_modal}>
        <Hamburger
          toggleButton={props.toggleMobileModal}
          showinmob={true}
          isActive={props.show_mobile_modal}
          barColor="black"
          buttonWidth={30}
        />
        {props.modal_content === ModalTypes.CONTACT ?  <Links /> : null}
        {props.modal_content === ModalTypes.PROJECTS ?  <ProjectLinks /> : null}
        {props.modal_content === ModalTypes.IMAGE ?  
        (
          <ImageWrapper>
            <Image isLandscape={fluid.aspectRatio > 1} fluid={fluid} />
        </ImageWrapper>
        ) : null}
    </ModalWrapper>
  )
}

const mapStateToProps = state => {
  return {
    show_mobile_modal: state.show_mobile_modal,
    modal_content: state.modal_content,
    image_fluid: state.image_fluid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileModal: () =>
      dispatch({
        type: ActionTypes.TOGGLE_MOBILE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
