import * as React from 'react'
import { graphql } from 'gatsby'
import { CharacterFrame, Layout, SkillTalent } from '../components'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'

const Character = ({ data }) => {
  const { character } = data
  return (
    <Layout>
      <Container maxWidth="7xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          paddingY={{ base: 2, md: 6 }}
        >
          <Box flex={{ base: 1, md: 0.3 }} paddingX={{ base: 0, md: 4 }}>
            <CharacterFrame character={character} />
          </Box>
          <Box flex={{ base: 1, md: 0.7 }} paddingX={{ base: 0, md: 4 }}>
            <Heading
              as="h2"
              color="white"
              fontSize={20}
              marginBottom={4}
              marginTop={{ base: 4, md: 0 }}
            >
              {character.name} Skills Talents
            </Heading>
            {character.skillTalents.map((talent, index) => (
              <SkillTalent
                key={index}
                talent={talent}
                vision={character.vision}
              />
            ))}
          </Box>
        </Flex>
      </Container>
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
