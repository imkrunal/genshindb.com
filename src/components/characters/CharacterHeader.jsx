import * as React from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { getElementColor } from '../../utils/helper'

const CharacterHeader = ({ character }) => {
  return (
    <Flex alignItems="center">
      <Box paddingY={8}>
        <Flex marginBottom={2} align="center">
          <Text color={getElementColor(character.vision.name)} marginRight={2}>
            {character.vision.name}
          </Text>
          &middot;
          <Text marginLeft={2}>{character.weapon}</Text>
        </Flex>
        <Heading as="h1" marginBottom={2} color="white" fontSize={32}>
          {character.name} Build Guides
        </Heading>
        <Text>{character.description}</Text>
      </Box>
    </Flex>
  )
}

export default CharacterHeader
