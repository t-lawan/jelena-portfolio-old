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
              isEmail
              email
            }
          }
        }
        allContentfulJumbotronContent {
          edges {
            node {
              contentful_id
              title
              type
              image {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              text {
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
      allContentfulJumbotronContent,
    } = data

    let headerLinks = Convert.toModelArray(
      allContentfulHeaderLinks,
      Convert.toHeaderLinkModel
    )
    props.setHeaderLinks(headerLinks)

    let sidebarLinks = Convert.toModelArray(
      allContentfulSidebarLinks,
      Convert.toSidebarLinkModel
    )
    props.setSidebarLinks(sidebarLinks)

    let jumbotronContent = Convert.toModelArray(
      allContentfulJumbotronContent,
      Convert.toJumbotronContentModel
    )

    props.setJumbotronContent(jumbotronContent)
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
    setSidebarLinks: sidebar_links =>
      dispatch({
        type: ActionTypes.SET_SIDEBAR_LINKS,
        sidebar_links: sidebar_links,
      }),

    setJumbotronContent: jumbotron_content =>
      dispatch({
        type: ActionTypes.SET_JUMBOTRON_CONTENT,
        jumbotron_content: jumbotron_content,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
