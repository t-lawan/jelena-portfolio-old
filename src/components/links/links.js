import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles";

const LinkWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: space-evenly;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "flex")};
  }
`

const ExternalLink = styled.a`
    padding-top: 2rem;
    transform: rotate(90deg);
`

const Links = props => {
  let sidebarLinks = props.sidebarLinks;
  sidebarLinks = sidebarLinks.sort((a, b) => {
      return a.order - b.order;
  });

  return (
    <LinkWrapper hideInMobile={props.hideInMobile}>
      {sidebarLinks.map((li, index) => (
        <ExternalLink href={li.isEmail ? `mailto:${li.email}` : li.url} target="__blank" key={index}> {li.title} </ExternalLink>
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
