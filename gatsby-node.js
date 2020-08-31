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
                  fluid {
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
          
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log('DATA', result.data.allContentfulProjects)

    // Create blog post pages.
    result.data.allContentfulProjects.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: project,
        context: edge.node,
      })
    })
  })
}
