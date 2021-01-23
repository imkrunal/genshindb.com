import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Image from 'gatsby-image'
import { Flex, Text, Link, Image as GatsbyImage } from '@chakra-ui/react'

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
        {character.icon ? (
          <Flex
            align="center"
            justify="center"
            backgroundColor="gray.700"
            borderRadius={4}
            textAlign="center"
            width={100}
            height={100}
            margin="auto"
            position="relative"
          >
            <Image fixed={character.icon.childImageSharp.fixed} />
            <Flex
              borderRadius={5}
              position="absolute"
              top="-22px"
              right="-22px"
              align="center"
              justify="center"
              padding={2}
            >
              <Image fixed={character.vision.image.childImageSharp.fixed} />
            </Flex>
          </Flex>
        ) : (
          <GatsbyImage
            fallbackSrc="https://via.placeholder.com/100"
            borderRadius={4}
          />
        )}
        <Text marginTop={2}>{character.name}</Text>
      </Link>
    </Flex>
  )
}

export default CharacterCard
