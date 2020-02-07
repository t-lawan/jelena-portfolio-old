import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from '../../store/actions';
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
    :hover {
     cursor: pointer;
    }
`
const Header = (props) => {
    let links = props.headerLinks;
    links = links.sort((a, b) => {
        return a.order - b.order;
    });

  return (
    <HeaderWrapper>
      <HeaderTitleContainer>
      {links.map((link, index) => (
         link.externalLink ? <HeaderLink href={link.url} target="__blank" key={index}> {link.title.toUpperCase()} </HeaderLink> : <HeaderTitle onClick={() => props.toggleModal()} key={index}> {link.title.toUpperCase()} </HeaderTitle> 
      ))}
      </HeaderTitleContainer>
    </HeaderWrapper>
  )
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    headerLinks: state.header_links,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () =>
      dispatch({
        type: ActionTypes.TOGGLE_MODAL,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
