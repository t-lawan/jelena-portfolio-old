import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img from 'gatsby-image'
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`

`

const Image = styled(Img)`

`
class ImageCarousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }


    render(){
        console.log('IMAGES', this.props.images)
        return(
            <StyledCarousel
                centerMode={false}
                swipeable={true}
                dynamicHeight={false}
                showStatus={false}
            >
                {this.props.images.map((im, index) => (
                    <Image key={index} fluid={im.fluid} />
                )) }
            </StyledCarousel>
        )
    }
}

export default ImageCarousel