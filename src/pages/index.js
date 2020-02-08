import React from "react"
import Layout from "../components/layout/layout";
import { TwoColumnSection } from "../index.styles";
import Jumbotron from "../components/jumbotron/jumbotron";
import Links from "../components/links/links";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO />
    <TwoColumnSection>
      <Jumbotron />
      <Links hideInMobile />
    </TwoColumnSection>
  </Layout>
)

export default IndexPage
