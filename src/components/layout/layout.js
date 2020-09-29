import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle, TwoColumnSection } from "../../index.styles";
import Header from "../header/header";
import State from "../state/state";
import Modal from "../modal/modal";
import Links from "../links/links";
import SEO from "../seo";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const LayoutWrapper = styled.div`
    padding: 1rem;
    max-height: 100vh;
    max-width: 100vw;
`

const MainWrapper = styled.main`
    padding: 0.5rem;
    
`
const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Navbar />
            <Modal />
            <SEO />

            <State />
            <MainWrapper>
                <TwoColumnSection>
                    {props.children}
                    <Links hideInMobile />
                </TwoColumnSection>
            </MainWrapper>
            <Footer />
        </LayoutWrapper>


    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    colour: PropTypes.string
}


export default Layout;