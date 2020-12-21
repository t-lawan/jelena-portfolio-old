import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";
import { size } from '../../index.styles';
const VideoPlayerWrapper = styled.div`
  /* position: relative;
  padding-top: 56.25%  */
`

const StyledVideoPlayer = styled(ReactPlayer)`
  /* position: absolute;
  top: 0;
  left: 0; */
  @media (max-width: ${size.mobileL}) {
  width: auto!important;
  height: auto !important;
  }
`
class VideoPlayer extends React.Component {
    constructor(props) {
      super(props)
    }

  
    render() {
      return (
          <VideoPlayerWrapper>
                <StyledVideoPlayer url={this.props.url} loop={false} volume={1} playing={false} muted={false} pip={true} />
          </VideoPlayerWrapper>
      )
    }
  }
  
  export default VideoPlayer
  