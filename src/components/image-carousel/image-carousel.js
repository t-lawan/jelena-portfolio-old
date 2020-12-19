import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img from 'gatsby-image'
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`

`

const Image = styled(Img)`
    img {
        object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
      max-height: 650px ;
      display: block;
      margin: 0 auto;
    }
    > picture > img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
      max-height: 650px;
      display: block;
      margin: 0 auto;
      /* position: relative; */
    }
`
class ImageCarousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }


    render(){
        return(
            <StyledCarousel
                centerMode={false}
                swipeable={true}
                dynamicHeight={true}
                showStatus={false}
                showThumbs={false}
            >
                {this.props.images.map((im, index) => (
                    <Image isLandscape={im.fluid.aspectRatio > 1} key={index} fluid={im.fluid} />
                )) }
            </StyledCarousel>
        )
    }
}

export default ImageCarousel