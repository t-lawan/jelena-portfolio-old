import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles";
import { Link } from "gatsby";

const LinkWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: space-evenly;
  height: 80vh;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "flex")};
  }
`

const ExternalLink = styled.a`
    padding-top: 2rem;
    transform: rotate(90deg);
    font-size: 1.1rem;
    @media (max-width: ${size.tablet}) {
      transform: rotate(0deg);
      font-size: 1.2rem;
      display: ${props => (props.showinmob ? "inherit" : "none")};
    }
`

const InternalLink = styled(Link)`
    padding-top: 2rem;
    transform: rotate(90deg);
    font-size: 1.1rem;
    @media (max-width: ${size.tablet}) {
      transform: rotate(0deg);
      font-size: 1.2rem;
      display: ${props => (props.showinmob ? "inherit" : "none")};
    }
`

const Links = props => {
  let sidebarLinks = props.sidebarLinks;
  sidebarLinks = sidebarLinks.sort((a, b) => {
      return a.order - b.order;
  });
  return (
    <LinkWrapper hideInMobile={props.hideInMobile}>
      {sidebarLinks.map((li, index) => (
        li.isExternalLink ? <ExternalLink showinmob={true} href={li.isEmail ? `mailto:${li.email}` : li.url} target="__blank" key={index}> {li.title} </ExternalLink> : <InternalLink key={index} to={li.url}> {li.title}</InternalLink>    
      ))}
    </LinkWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    sidebarLinks: state.sidebar_links,
  }
}
export default connect(mapStateToProps, null)(Links)
