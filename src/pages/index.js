import React from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { Breadcrumb, CharacterCard, Layout } from '../components'

const Home = ({ data }) => {
  const { characters } = data
  return (
    <Layout>
      <Breadcrumb crumbs={[{ title: 'GenshinDB', link: '/' }]} />
      <Container maxWidth="7xl" paddingY={8}>
        <Grid
          gap={4}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(6, 1fr)',
          }}
        >
          {characters.edges.map(({ node }) => (
            <CharacterCard key={node.slug} character={node} />
          ))}
        </Grid>
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
              fixed(width: 70, height: 70) {
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
