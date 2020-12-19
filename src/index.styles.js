import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i&display=swap');
    * {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Source Sans Pro', sans-serif;
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-style: normal; 
  background: rgba(242, 242, 242, 0.9); 
  }
  h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: black;
    }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
  margin-bottom: 1.45rem;
  font-size: 2.5rem;
  line-height: 1.1;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.6rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.4rem;
  line-height: 1.1;
}
h4 {
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1.15em;
  line-height: 1.3;
}
li {
  list-style-type: lower-roman;
}

.active-link {
    font-style: italic;
    transform: rotate(1deg);

  }
`

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1500px",
}

export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* margin-top: 2rem; */
`
