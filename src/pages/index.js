import React from "react"
import Layout from "../components/layout/layout";
import Jumbotron from "../components/jumbotron/jumbotron";
import { connect } from "react-redux"

const IndexPage = () => (
  <Layout>
    <Jumbotron />
  </Layout>
)

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
  }
}

export default connect(mapStateToProps, null)(IndexPage)
