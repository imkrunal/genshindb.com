import React from 'react'
import { Image as GatsbyImage } from 'gatsby-image'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { getElementColor } from '../../utils/helper'

const Constellation = ({ constellation, vision }) => {
  return (
    <Box
      backgroundColor="gray.900"
      boxShadow="md"
      marginBottom={4}
      borderRadius={4}
    >
      <Flex
        padding={8}
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'initial' }}
      >
        <Box
          width={100}
          marginRight={{ base: 0, md: 8 }}
          marginBottom={{ base: 8, md: 0 }}
          textAlign="center"
        >
          <Image
            as={GatsbyImage}
            fallbackSrc="https://via.placeholder.com/100"
            borderRadius={4}
            marginBottom={4}
          />
        </Box>
        <Box flex={1}>
          <Heading
            as="h3"
            fontSize={18}
            color={getElementColor(vision)}
            marginBottom={2}
          >
            {constellation.name}
          </Heading>
          <Text fontSize={16} color="gray.100" marginBottom={2}>
            {constellation.unlock}
          </Text>
          <Text>{constellation.description}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Constellation
