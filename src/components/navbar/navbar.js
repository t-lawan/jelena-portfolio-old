import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
import { Link } from "gatsby";

const NavbarWrapper = styled.header`
  padding: 0.5rem;
  width: 90vw;

  @media (max-width: ${size.tablet}) {
    padding: 0;
    display: none;
    width: 10vw;
  }
  padding-top: 1rem;
`

const NavbarTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: space-around; */
  justify-content: flex-start;
  align-items: baseline;
`

const NavbarLink = styled(Link)`
  font-size: 1.1rem;
  margin-right: 1rem;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const NavbarExternalLink = styled.a`
  font-size: 1.4rem;
  font-style: italic;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`
const Navbar = props => {
  let links = props.navbarLinks
  links = links.sort((a, b) => {
    return a.order - b.order
  })
  return (
    <NavbarWrapper>
      <NavbarTitleContainer>
        {links.map((link, index) =>
          link.externalLink ? (
            <NavbarExternalLink
              showinmob={0}
              href={link.url}
              target="__blank"
              key={index}
            >
              {" "}
              {link.title.toUpperCase()}{" "}
            </NavbarExternalLink>
          ) : (
            <NavbarLink activeClassName={'active-link'} to={`/${link.url}`} showinmob={0} key={index}>
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
  }
}


export default connect(mapStateToProps, null)(Navbar)
