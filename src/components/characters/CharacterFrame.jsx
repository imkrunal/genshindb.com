import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex } from '@chakra-ui/react'

const CharacterFrame = ({ character }) => {
  return (
    <Flex direction="column" align="center" borderRadius={4}>
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
    </Flex>
  )
}

export default CharacterFrame
