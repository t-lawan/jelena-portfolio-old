import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import Links from "../links/links";

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: rgb(242,242,242);
  left: 0;
  z-index: 1000;
  height: 85vh;

  width: 100vw;
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }

  @media (max-width: ${size.mobileL}) {
    height: 80vh;
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const Modal = props => {
  return (
    <ModalWrapper showInMobile={props.show_mobile_modal}>
        <Links />
    </ModalWrapper>
  )
}

const mapStateToProps = state => {
  return {
    show_mobile_modal: state.show_mobile_modal,
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
