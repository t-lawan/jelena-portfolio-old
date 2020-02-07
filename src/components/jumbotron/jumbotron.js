import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Img from 'gatsby-image';
const JumbotronWrapper = styled.section`
    /* padding: 1rem; */
    height: 70vh;
`

const JumbotronModal = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: yellow;
    z-index: 1000;
    display: ${props => props.show ? 'inherit': 'none'}
`
const JumbotronUnderlay = styled.div`
    display: ${props => props.show ? 'inherit': 'none'};
    background: pink;
    width: auto;
    height: 100%;
`

const ImageContainer = styled.div`
    width: 100%;
`
const Jumbotron = (props) => {
    let content = props.jumbotronContent;
    let image = content.find((im) => {
        return im.type == "Image";
    })

    let bio = content.find((bi) => {
        return bi.type == "Bio";
    })

    console.log('bio', bio);
    console.log('image', image);

    return (
        <JumbotronWrapper>
            <JumbotronModal show={props.show_modal}>
                <p> Some text</p>
            </JumbotronModal>
            <JumbotronUnderlay show={!props.show_modal}>
            <ImageContainer>
            <Img fluid={image.image.fluid} />

            </ImageContainer>
            </JumbotronUnderlay>
        </JumbotronWrapper>
    )
}

const mapStateToProps = state => {
    return {
      isLoaded: state.isLoaded,
      jumbotronContent: state.jumbotron_content,
      show_modal: state.show_modal
    }
  }
  export default connect(mapStateToProps, null)(Jumbotron)