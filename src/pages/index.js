import React from "react"
import Layout from "../components/layout/layout";
import { connect } from "react-redux"
import PageContent from "../components/page-content/page-content";

const IndexPage = (props) => {
  
  let homePage =  props.pages.find((pg) => {
    return pg.title === "Home";
  })

  return (
  <Layout>
    {homePage ? <PageContent pageContent={homePage} /> :  null}
  </Layout>
)}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    pages: state.pages
  }
}

export default connect(mapStateToProps, null)(IndexPage)
