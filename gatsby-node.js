/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const project = path.resolve(`src/templates/project.js`)
  const page = path.resolve(`src/templates/page.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      {
        allContentfulProjects {
          edges {
            node {
              contentful_id
              title
              slug
              displayDescriptions
              displayImages
              displayVideo
              images {
                fluid(quality: 100, maxWidth: 2000) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              description {
                json
              }
              vimeoId
            }
          }
        }
          allContentfulPages {
            edges {
              node {
                id
                title
                slug
                content {
                  json
                }
                showVideo
                videoUrl
              }
            }
          }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allContentfulProjects.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: project,
        context: edge.node,
      })
    })

    result.data.allContentfulPages.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: page,
        context: edge.node,
      })
    })
  })
}
