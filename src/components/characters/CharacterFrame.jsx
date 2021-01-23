import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
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
      {character.portrait && (
        <Box position="relative">
          <Box borderRadius={4} marginBottom={4}>
            <Image fixed={character.portrait.childImageSharp.fixed} />
          </Box>
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
        </Box>
      )}
      <Heading as="h1" fontSize={24} color="white">
        {character.name} Build Guide
      </Heading>
      <Flex marginBottom={2} align="center">
        <Text color={getElementColor(character.vision.name)} marginRight={2}>
          {character.vision.name}
        </Text>
        &middot;
        <Text marginLeft={2}>{character.weapon}</Text>
      </Flex>
      <Text textAlign="center">{character.description}</Text>
    </Flex>
  )
}

export default CharacterFrame
