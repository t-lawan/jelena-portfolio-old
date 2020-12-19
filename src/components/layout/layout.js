import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle, TwoColumnSection } from "../../index.styles";
import State from "../state/state";
import Modal from "../modal/modal";
import Links from "../links/links";
import SEO from "../seo";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import NavbarMobile from "../navbar/navbar-mobile";

const LayoutWrapper = styled.div`
    padding: 1rem;
    max-height: 100vh;
    max-width: 100vw;
`

const MainWrapper = styled.main`
    padding: 0.5rem;   
`

const Section = styled.div`
    /* background: pink; */
`
const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Navbar />
            <NavbarMobile />
            <Modal />
            <SEO title={props.title} />

            <State />
            <MainWrapper>
                <TwoColumnSection>
                    <Section>
                        {props.children}
                    </Section>
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