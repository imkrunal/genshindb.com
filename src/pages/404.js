import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { Layout } from '../components'
import { Container, Text } from '@chakra-ui/react'

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Paimon.png" }) {
        childImageSharp {
          fixed(width: 180, height: 250, fit: INSIDE) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container
        minHeight="calc(100vh - 66px)"
        paddingY={8}
        alignItems="center"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Image fixed={data.file.childImageSharp.fixed} />
        <Text fontSize={32} fontWeight="bold">
          Ym. yeah, This is awkward.
        </Text>
        <Text color="gray.500">
          Paimon tried really hard, but couldn&apos;t find the page you were
          looking for. You may find what you were looking for on our homepage.
        </Text>
      </Container>
    </Layout>
  )
}

export default NotFound
