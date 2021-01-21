import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Container, Flex, Link } from '@chakra-ui/react'

const NavItem = ({ to, children, ...props }) => (
  <Link
    as={GatsbyLink}
    to={to}
    display="block"
    color="gray.400"
    paddingX={4}
    _hover={{
      color: 'brand.400',
    }}
    _focus={{
      color: 'brand.400',
    }}
    {...props}
  >
    {children}
  </Link>
)

const Navigation = () => {
  return (
    <Box background="gray.900" boxShadow="sm">
      <Container maxWidth="7xl">
        <Flex align="center" justify="space-between">
          <Link
            as={GatsbyLink}
            to="/"
            display="block"
            fontSize={20}
            fontWeight="700"
            color="brand.400"
            paddingY={4}
            _hover={{}}
            _focus={{}}
          >
            GenshinDB
          </Link>
          <Flex>
            <NavItem to="/">Characters</NavItem>
            <NavItem to="/">Teams</NavItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation
