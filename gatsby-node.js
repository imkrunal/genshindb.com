const path = require('path')

const characterPages = (data, createPage, characterTemplate) => {
  data.map(({ node }) => {
    const slug = `/characters/${node.slug}`
    return createPage({
      path: slug,
      component: characterTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query {
      characters: allCharactersJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (errors) {
    return reporter.panicOnBuild(`errors`, new Error())
  }

  const { characters } = data
  const characterTemplate = path.resolve('./src/templates/character.jsx')

  characterPages(characters.edges, createPage, characterTemplate)
}
