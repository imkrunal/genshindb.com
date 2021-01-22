import React from 'react'
import { Image as GatsbyImage } from 'gatsby-image'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { getElementColor } from '../../utils/helper'

const TalentUpgrade = ({ upgrade }) => {
  return (
    <Flex paddingY={4} paddingX={8} backgroundColor="gray.900" borderRadius={4}>
      <Box width={0.5}>{upgrade.name}</Box>
      <Box width={0.5}>{upgrade.value}</Box>
    </Flex>
  )
}

const SkillTalent = ({ talent, vision }) => {
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
          <Text as="span" fontSize={14} color="gray.300">
            {talent.unlock}
          </Text>
        </Box>
        <Box flex={1}>
          <Heading
            as="h3"
            fontSize={18}
            color={getElementColor(vision)}
            marginBottom={2}
          >
            {talent.name}
          </Heading>
          {/* {talent.description.split('\n').map((info) => ( */}
          <Text>{talent.description}</Text>
          {/* ))} */}
        </Box>
      </Flex>
      {talent.upgrades && (
        <>
          <Heading
            as="h4"
            fontSize={18}
            paddingX={8}
            paddingY={4}
            backgroundColor="gray.700"
            color="white"
          >
            Talent Upgrades
          </Heading>
          <Box>
            {talent.upgrades.map((upgrade) => (
              <TalentUpgrade upgrade={upgrade} />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export default SkillTalent
