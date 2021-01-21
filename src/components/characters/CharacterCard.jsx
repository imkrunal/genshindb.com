import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Image as GatsbyImage } from 'gatsby-image'
import { Flex, Image, Text, Link } from '@chakra-ui/react'

const CharacterCard = ({ character }) => {
  return (
    <Flex
      direction="column"
      justifyItems="center"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width={{ base: 0.5, sm: 0.25, md: 0.12 }}
      padding={3}
    >
      <Link
        as={GatsbyLink}
        to={`/characters/${character.slug}`}
        display="block"
        _hover={{
          color: 'brand.50',
        }}
        _focus={{}}
      >
        <Image
          as={GatsbyImage}
          fallbackSrc="https://via.placeholder.com/100"
          borderRadius={4}
        />

        <Text marginTop={2}>{character.name}</Text>
      </Link>
    </Flex>
  )
}

export default CharacterCard
