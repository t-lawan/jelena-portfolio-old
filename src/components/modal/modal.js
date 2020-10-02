import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import Links from "../links/links";
import { ModalTypes } from "../../utility/richtext";
import ProjectLinks from "../links/project-links";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  background: rgb(242,242,242);
  left: 0;
  z-index: 1500;
  height: 100%;
  padding: 1rem;
  width: 100%;
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const ModalHeader = styled.div`

`


const Hamburger = styled(HamburgerBoring)`
  display: none;  
  float: right;
  padding: 0 !important;

  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }

  @media (max-width: ${size.mobileL}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`
const Modal = props => {
  console.log('CONTENT', props.modal_content)
  return (
    <ModalWrapper showinmob={props.show_mobile_modal}>
        <Hamburger
          toggleButton={props.toggleMobileModal}
          showinmob={true}
          isActive={props.show_mobile_modal}
          barColor="black"
          buttonWidth={30}
        />
        {props.modal_content === ModalTypes.CONTACT ?  <Links /> : <ProjectLinks />}
    </ModalWrapper>
  )
}

const mapStateToProps = state => {
  return {
    show_mobile_modal: state.show_mobile_modal,
    modal_content: state.modal_content
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
