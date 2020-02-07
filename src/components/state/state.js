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
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulHeaderLinks, allContentfulSidebarLinks } = data

    let headerLinks = Convert.toModelArray(
      allContentfulHeaderLinks,
      Convert.toHeaderLinkModel
    )
    props.setHeaderLinks(headerLinks)

    let sidebarLinks = Convert.toModelArray(
      allContentfulSidebarLinks,
      Convert.toSidebarLinkModel
    );
    props.setSidebarLinks(sidebarLinks);

    props.loaded();
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
