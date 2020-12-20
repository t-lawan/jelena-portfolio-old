import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/actions"
import { Convert } from "../../utility/convert"
const State = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulHeaderLinks {
          edges {
            node {
              contentful_id
              url
              title
              order
              externalLink
              activatedItem {
                contentful_id
              }
              showInMobile
            }
          }
        }
        allContentfulSidebarLinks {
          edges {
            node {
              contentful_id
              order
              title
              url
              isEmail
              isExternalLink
            }
          }
        }
        allContentfulNavbarLink {
          edges {
            node {
              id
              externalLink
              order
              showInMobile
              title
              project {
                slug
              }
            }
          }
        }
        allContentfulPages {
          edges {
            node {
              contentful_id
              title
              slug
              content {
                json
              }
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let {
      allContentfulHeaderLinks,
      allContentfulSidebarLinks,
      allContentfulNavbarLink,
      allContentfulPages,
    } = data

    let headerLinks = Convert.toModelArray(
      allContentfulHeaderLinks,
      Convert.toHeaderLinkModel
    )
    props.setHeaderLinks(headerLinks)

    let pages = Convert.toModelArray(allContentfulPages, Convert.toPageModel)
    props.setPages(pages)

    let navbarLinks = Convert.toModelArray(
      allContentfulNavbarLink,
      Convert.toNavbarLinkModel
    )
    props.setNavbarLinks(navbarLinks)

    let sidebarLinks = Convert.toModelArray(
      allContentfulSidebarLinks,
      Convert.toSidebarLinkModel
    )
    props.setSidebarLinks(sidebarLinks)

    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHeaderLinks: header_links =>
      dispatch({
        type: ActionTypes.SET_HEADER_LINKS,
        header_links: header_links,
      }),
    setPages: pages =>
      dispatch({
        type: ActionTypes.SET_PAGES,
        pages: pages,
      }),
    setNavbarLinks: navbar_links =>
      dispatch({
        type: ActionTypes.SET_NAVBAR_LINKS,
        navbar_links: navbar_links,
      }),
    setSidebarLinks: sidebar_links =>
      dispatch({
        type: ActionTypes.SET_SIDEBAR_LINKS,
        sidebar_links: sidebar_links,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
