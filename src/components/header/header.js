import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const HeaderWrapper = styled.header`
  padding: 0.5rem;
  padding-top: 1rem;
`

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: space-around; */
  justify-content: space-between;
`

const HeaderLink = styled.a`
    font-size: 1.4rem;
`

const HeaderTitle = styled.p`
    font-size: 1.4rem;
`
const Header = (props) => {
    let links = props.headerLinks;
    links = links.sort((a, b) => {
        return a.order - b.order;
    });

    console.log('PRO', links);
  return (
    <HeaderWrapper>
      <HeaderTitleContainer>
      {links.map((link, index) => (
         link.externalLink ? <HeaderLink href={link.url} target="__blank" key={index}> {link.title} </HeaderLink> : <HeaderTitle key={index}> {link.title} </HeaderTitle> 
      ))}
      </HeaderTitleContainer>
    </HeaderWrapper>
  )
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    headerLinks: state.header_links
  }
}
export default connect(mapStateToProps, null)(Header)
