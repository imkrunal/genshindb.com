import * as React from 'react'
import { graphql } from 'gatsby'
import {
  CharacterFrame,
  Layout,
  PassiveTalent,
  SEO,
  SkillTalent,
} from '../components'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'

const Character = ({ data }) => {
  const { character } = data
  return (
    <Layout customSEO>
      <SEO character characterNode={character} />
      <Box backgroundColor="gray.700">
        <Container maxWidth="7xl">
          {/* <Flex align="center">
            <Box flex={{ base: 1, md: 0.3 }} paddingX={{ base: 0, md: 4 }}>
              <Text fontSize={20} fontWeight="700" paddingY={4}>
                {character.name}
              </Text>
            </Box>
            <Flex
              align="center"
              flex={{ base: 1, md: 0.7 }}
              paddingX={{ base: 0, md: 4 }}
            >
              <Link
                to={`/characters/${character.slug}`}
                as={GatsbyLink}
                display="block"
                paddingY={4}
                paddingRight={8}
                fontWeight="500"
                _hover={{}}
                _focus={{}}
              >
                Skill Talents
              </Link>
              <Link
                to={`/characters/${character.slug}`}
                as={GatsbyLink}
                display="block"
                paddingY={4}
                paddingRight={8}
                fontWeight="500"
                _hover={{}}
                _focus={{}}
              >
                Passive Talents
              </Link>
              <Link
                to={`/characters/${character.slug}`}
                as={GatsbyLink}
                display="block"
                paddingY={4}
                paddingRight={8}
                fontWeight="500"
                _hover={{}}
                _focus={{}}
              >
                Constellations
              </Link>
            </Flex>
          </Flex> */}
        </Container>
      </Box>
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
            <Heading
              as="h2"
              color="white"
              fontSize={20}
              marginBottom={4}
              marginTop={{ base: 4, md: 0 }}
            >
              {character.name} Passive Talents
            </Heading>
            {character.passiveTalents.map((talent, index) => (
              <PassiveTalent
                key={index}
                talent={talent}
                vision={character.vision}
              />
            ))}
            <Heading
              as="h2"
              color="white"
              fontSize={20}
              marginBottom={4}
              marginTop={{ base: 4, md: 0 }}
            >
              {character.name} Constellations
            </Heading>
            {character.passiveTalents.map((talent, index) => (
              <PassiveTalent
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
