import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Breadcrumb,
  Layout,
  PassiveTalent,
  SEO,
  SkillTalent,
} from '../components'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { CharacterFrame, CharacterHeader } from '../components/characters'

const Character = ({ data }) => {
  const { character } = data
  return (
    <Layout customSEO>
      <SEO character characterNode={character} />
      <Breadcrumb
        crumbs={[
          { title: 'GenshinDB', link: '/' },
          {
            title: `${character.name} Build Guides`,
            link: `/characters/${character.slug}`,
          },
        ]}
      />
      <Box
        position="relative"
        _before={{
          backgroundImage: `url(${require('../images/wall.jpg')})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          position: 'absolute',
          content: '""',
          top: 0,
          right: 0,
          left: 0,
          height: '60vh',
          opacity: 0.2,
        }}
        _after={{
          background: 'linear-gradient(to bottom, transparent, #161A21)',
          position: 'absolute',
          content: '""',
          top: 0,
          right: 0,
          left: 0,
          height: '60vh',
        }}
      >
        <Container maxWidth="7xl" position="relative" zIndex={99}>
          <CharacterHeader character={character} />
          <Flex direction={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={{ base: 1, md: 0.7 }}>
              <Heading
                as="h2"
                color="white"
                fontSize={20}
                marginBottom={4}
                marginTop={{ base: 4, md: 0 }}
              >
                {character.name} Skill Talents
              </Heading>
              {character.skillTalents.map((talent, index) => (
                <SkillTalent
                  key={index}
                  talent={talent}
                  vision={character.vision.name}
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
                  vision={character.vision.name}
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
                  vision={character.vision.name}
                />
              ))}
            </Box>
            <Box flex={{ base: 1, md: 0.3 }} paddingX={{ base: 0, md: 4 }}>
              <CharacterFrame character={character} />
            </Box>
          </Flex>
        </Container>
      </Box>
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
      weapon
      icon {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      portrait {
        childImageSharp {
          fixed(width: 250, height: 450, fit: INSIDE) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
`

export default Character
