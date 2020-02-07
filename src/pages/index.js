import React from "react"
import Layout from "../components/layout/layout";
import { TwoColumnSection } from "../index.styles";
import Jumbotron from "../components/jumbotron/jumbotron";
import Links from "../components/links/links";

const IndexPage = () => (
  <Layout>
    <TwoColumnSection>
      <Jumbotron />
      <Links />
    </TwoColumnSection>
  </Layout>
)

export default IndexPage
