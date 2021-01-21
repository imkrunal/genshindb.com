import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
import { Container } from '@chakra-ui/react'

const Character = ({ data }) => {
  const { character } = data
  return (
    <Layout>
      <Container maxWidth="7xl">Character</Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    character: charactersJson(slug: { eq: $slug }) {
      name
      affiliation
      birthday(formatString: "DD MM YYYY")
      constellation
      constellations {
        description
        name
        unlock
      }
      description
      gender
      nation
      passiveTalents {
        description
        name
        unlock
      }
      rarity
      skillTalents {
        description
        name
        unlock
        upgrades {
          name
          value
        }
      }
      slug
      specialDish
      title
      vision
      weapon
    }
  }
`

export default Character
