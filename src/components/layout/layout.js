import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../index.styles";
import Header from "../header/header";

const LayoutWrapper = styled.div`
    padding: 1rem;
`

const MainWrapper = styled.main`
    
`
const Layout = (props) => {
    return (
        <LayoutWrapper> 
            <GlobalStyle />
            <Header />
            <MainWrapper>
                {props.children}
            </MainWrapper>
        </LayoutWrapper>


    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    colour: PropTypes.string
  }


export default Layout;