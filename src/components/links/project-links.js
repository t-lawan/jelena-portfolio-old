import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { Link } from "gatsby"
import { TOGGLE_MOBILE_MODAL } from "../../store/actions";

const ProjectLinkWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80vh;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "flex")};
  }
`

const NavbarLink = styled(Link)`
  font-size: 1.4rem;
  margin-right: 1rem;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
  }
`

const ProjectLinks = props => {
  let navbarLinks = props.navbarLinks
  navbarLinks = navbarLinks.sort((a, b) => {
    return a.order - b.order
  })
  return (
    <ProjectLinkWrapper>
      {navbarLinks.map((navbarLink, index) => (
        <NavbarLink
          to={`/${navbarLink.url}`}
          key={index}
          activeClassName={"active-link"}
        >
          {" "}
          {navbarLink.title.toUpperCase()}{" "}
        </NavbarLink>
      ))}
    </ProjectLinkWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    navbarLinks: state.navbar_links,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileModal: () =>
      dispatch({
        type: TOGGLE_MOBILE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectLinks)
