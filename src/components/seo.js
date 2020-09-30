/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, lang }) {
  const metaDescription =
    "Jelena Viskovic is an artist working with storytelling and world-building. She uses video game engines to build new social research tools, virtual worlds, and social organizational platforms. Her games Nirgendheim and Chimera use architectural structures, characters, and game mechanics to provide unexpected ways of interacting with opaque technological systems of control. Her collaborative projects have been commissioned by the V&A (UK), Rhizome (US), the New Institute (Netherlands), and Akademie Schloss Solitude (Germany). Viskovic is a visiting lecturer at the Royal College of Art (UK) and the AA School of Architecture (UK)."
  title = title ? `${title} | Jelena Viskovic` : "Jelena Viskovic";
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
