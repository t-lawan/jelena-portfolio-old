import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const LinkWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: flex-end;
`

const ExternalLink = styled.a`
    padding-top: 2rem;
`

const Links = props => {
  let sidebarLinks = props.sidebarLinks;
  sidebarLinks = sidebarLinks.sort((a, b) => {
      return a.order - b.order;
  });

  console.log('XX', sidebarLinks);
  return (
    <LinkWrapper>
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
