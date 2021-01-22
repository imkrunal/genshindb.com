import React from 'react'
import { Image as GatsbyImage } from 'gatsby-image'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { getElementColor } from '../../utils/helper'

const CharacterFrame = ({ character }) => {
  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor="gray.900"
      borderRadius={4}
      boxShadow="md"
      padding={8}
    >
      <Image
        as={GatsbyImage}
        fallbackSrc="https://via.placeholder.com/150"
        borderRadius={4}
        marginBottom={4}
      />
      <Heading as="h1" fontSize={24} color="white">
        {character.name} Build Guide
      </Heading>
      <Flex marginBottom={2} align="center">
        <Text color={getElementColor(character.vision)} marginRight={2}>
          {character.vision}
        </Text>
        &middot;
        <Text marginLeft={2}>{character.weapon}</Text>
      </Flex>
      <Text textAlign="center">{character.description}</Text>
    </Flex>
  )
}

export default CharacterFrame
