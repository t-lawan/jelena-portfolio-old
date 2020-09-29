import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
import { Link } from "gatsby";

const NavbarWrapper = styled.header`
  padding: 0.5rem;
  @media (max-width: ${size.tablet}) {
    padding: 0;
  }
  padding-top: 1rem;
  width: 90vw;
`

const NavbarTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: space-around; */
  justify-content: space-between;
  align-items: baseline;
`

const NavbarLink = styled(Link)`
  font-size: 1.4rem;
  font-style: italic;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

const NavbarExternalLink = styled.a`
  font-size: 1.4rem;
  font-style: italic;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

const NavbarTitle = styled.p`
  font-size: 1.4rem;
  :hover {
    cursor: pointer;
  }

`

const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const Navbar = props => {
  let links = props.navbarLinks
  links = links.sort((a, b) => {
    return a.order - b.order
  })
  console.log('LINKs', links)
  return (
    <NavbarWrapper>
      <NavbarTitleContainer>
        <Hamburger
          toggleButton={props.toggleMobileModal}
          showInMobile={true}
          isActive={props.show_mobile_modal}
          barColor="black"
          buttonWidth={30}
        />
        {links.map((link, index) =>
          link.externalLink ? (
            <NavbarExternalLink
                showInMobile={false}
              href={link.url}
              target="__blank"
              key={index}
            >
              {" "}
              {link.title.toUpperCase()}{" "}
            </NavbarExternalLink>
          ) : (
            <NavbarLink to={`/${link.url}`} showInMobile={link.showInMobile} key={index}>
              {" "}
              {link.title.toUpperCase()}{" "}
            </NavbarLink>
          )
        )}
      </NavbarTitleContainer>
    </NavbarWrapper>
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
    toggleMobileModal: () =>
      dispatch({
        type: ActionTypes.TOGGLE_MOBILE_MODAL,
      }),
    showMobileModal: () =>
      dispatch({
        type: ActionTypes.SHOW_MOBILE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
