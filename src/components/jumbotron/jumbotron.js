import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const JumbotronWrapper = styled.section`
    /* padding: 1rem; */
    height: 60vh;
    background: pink;
`
const Jumbotron = () => {
    return (
        <JumbotronWrapper>
            <p> Jumbotron </p>
        </JumbotronWrapper>
    )
}

const mapStateToProps = state => {
    return {
      isLoaded: state.isLoaded,
      headerLinks: state.header_links
    }
  }
  export default connect(mapStateToProps, null)(Jumbotron)