import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Image from 'gatsby-image'
import { Flex, Text, Link, Box } from '@chakra-ui/react'

const CharacterCard = ({ character }) => {
  return (
    <Link
      as={GatsbyLink}
      to={`/characters/${character.slug}`}
      display="block"
      _hover={{}}
      _focus={{}}
    >
      <Flex
        backgroundColor="cardBodyBg"
        borderRadius={4}
        direction="column"
        alignItems="center"
        boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)"
      >
        <Box width={70} margin={2}>
          <Image fixed={character.icon.childImageSharp.fixed} />
        </Box>
        <Flex
          width="full"
          align="center"
          justify="space-between"
          backgroundColor="cardHeaderBg"
          padding={2}
          borderRadius={4}
        >
          <Text>{character.name}</Text>
          <Image fixed={character.vision.image.childImageSharp.fixed} />
        </Flex>
      </Flex>
    </Link>
  )
}

export default CharacterCard
