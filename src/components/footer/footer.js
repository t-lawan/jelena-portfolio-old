import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/actions"
import { size } from "../../index.styles"
import { Link } from "gatsby"
const FooterWrapper = styled.header`
  padding: 0.5rem;
  @media (max-width: ${size.tablet}) {
    padding: 0;
  }
  padding-top: 1rem;
  bottom: 0;
  position: fixed;
  width: 100vw;
  
`

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: flex-start;
  align-items: baseline;
  padding: 0 1rem;
`

const FooterLink = styled(Link)`
  font-size: 1.4rem;
  font-style: italic;
  mix-blend-mode: difference;
  padding: 0 0.5rem;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
    font-size: 1.2rem;
  }
`

const Footer = props => {
  let links = [
    {
      title: "Jelena Viskovic",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
  ]
  return (
    <FooterWrapper>
        <FooterLinkContainer>
            {links.map(link => (
                <FooterLink to={link.slug}> {link.title}</FooterLink>
            ))}
        </FooterLinkContainer>
    </FooterWrapper>
  )
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
  }
}

export default connect(mapStateToProps, null)(Footer)
