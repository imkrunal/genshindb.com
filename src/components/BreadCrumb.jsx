import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Container, Flex, Link } from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Breadcrumb = ({ crumbs }) => {
  return (
    <Box backgroundColor="breadcrumbsBg" paddingY={2} fontSize={14}>
      <Container maxWidth="7xl">
        <Flex alignItems="center">
          {crumbs &&
            crumbs.map((crumb, index) => (
              <Flex key={index} alignItems="center">
                <Link
                  as={GatsbyLink}
                  to={crumb.link}
                  display="block"
                  marginRight={2}
                  _hover={{}}
                  _focus={{}}
                >
                  {crumb.title}
                </Link>
                {crumbs.length !== index + 1 && (
                  <Box marginRight={2}>
                    <RiArrowRightSLine />
                  </Box>
                )}
              </Flex>
            ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default Breadcrumb
