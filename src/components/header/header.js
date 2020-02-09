import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as ActionTypes from "../../store/actions"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
const HeaderWrapper = styled.header`
  padding: 0.5rem;
  @media (max-width: ${size.tablet}) {
    padding: 0;
  }
  padding-top: 1rem;
`

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: space-around; */
  justify-content: space-between;
  align-items: baseline;
`

const HeaderLink = styled.a`
  font-size: 1.4rem;
  font-style: italic;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
    font-size: 1.2rem;
  }
`

const HeaderTitle = styled.p`
  font-size: 1.4rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const Header = props => {
  let links = props.headerLinks
  links = links.sort((a, b) => {
    return a.order - b.order
  })
  console.log('Links', links)

  return (
    <HeaderWrapper>
      <HeaderTitleContainer>
        <Hamburger
          toggleButton={props.toggleMobileModal}
          showInMobile={true}
          isActive={props.show_mobile_modal}
          barColor="black"
          buttonWidth={30}
        />
        {links.map((link, index) =>
          link.externalLink ? (
            <HeaderLink
              hideInMobile
              href={link.url}
              target="__blank"
              key={index}
            >
              {" "}
              {link.title.toUpperCase()}{" "}
            </HeaderLink>
          ) : (
            <HeaderTitle showInMobile={link.showInMobile} onClick={() => props.showJumbotronModal(link.jumbotron_content)} key={index}>
              {" "}
              {link.title.toUpperCase()}{" "}
            </HeaderTitle>
          )
        )}
      </HeaderTitleContainer>
    </HeaderWrapper>
  )
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    headerLinks: state.header_links,
    show_mobile_modal: state.show_mobile_modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () =>
      dispatch({
        type: ActionTypes.TOGGLE_JUMBOTRON_MODAL,
      }),
    showJumbotronModal: (jumbotron_id) =>
      dispatch({
        type: ActionTypes.SHOW_JUMBOTRON_MODAL,
        jumbotron_modal_content: jumbotron_id
      }),
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)
