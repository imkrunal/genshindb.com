import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { CharacterCard, Layout } from '../components'

const Home = ({ data }) => {
  const { characters } = data
  return (
    <Layout>
      <Container maxWidth="7xl">
        <Flex flexWrap="wrap">
          {characters.edges.map(({ node }) => (
            <CharacterCard key={node.slug} character={node} />
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query AllCharacters {
    characters: allCharactersJson(sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          name
          slug
          icon {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          vision {
            name
            slug
            image {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
