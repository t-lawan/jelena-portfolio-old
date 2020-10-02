import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
import { Link } from "gatsby"
import { ModalTypes } from "../../utility/richtext";

const NavbarMobileWrapper = styled.header`
  padding: 0.5rem;
  width: 90vw;
  display: none;
  @media (max-width: ${size.tablet}) {
    padding: 0;
    display: inherit;
    padding: 0 0.5rem;
    /* width: 10vw; */
  }
  padding-top: 1rem;
`

const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const NavbarTitle = styled.h3`

`

const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const NavbarMobile = props => {

  return (
    <NavbarMobileWrapper>
      <NavbarContent>
            <NavbarTitle onClick={() => props.toggleMobileModal(ModalTypes.PROJECTS)}> Projects</NavbarTitle>
            <NavbarTitle onClick={() => props.toggleMobileModal(ModalTypes.CONTACT)}> Contact</NavbarTitle>
      </NavbarContent>
    </NavbarMobileWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    navbarLinks: state.navbar_links,
    show_mobile_modal: state.show_mobile_modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileModal: (content) =>
      dispatch({
        type: ActionTypes.TOGGLE_MOBILE_MODAL,
        content: content
      }),
    showMobileModal: () =>
      dispatch({
        type: ActionTypes.SHOW_MOBILE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile)
