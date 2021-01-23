import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Head = (props) => {
  const { pathname, character, characterNode, data } = props
  const { config } = data.site
  const URL = `${config.siteUrl}${pathname}`

  let title
  let description
  let image

  if (character) {
    let postImage
    if (!characterNode.image) {
      postImage = ''
    } else {
      postImage = characterNode.image.childImageSharp.fluid.src
    }
    title = `${characterNode.name} Build Guides – ${config.siteShortName}`
    if (!characterNode.description) {
      description = `${characterNode.excerpt}`
    } else {
      description = `${characterNode.description}`
    }
    image = `${config.siteUrl}${postImage}`
  } else {
    title = config.siteTitle
    description = config.siteDescription
  }

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* OG DATA */}
      {/* <meta property="og:site_name" content={config.facebook} /> */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={character ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:see_also" content="https://github.com/imkrunal" />
      <meta
        property="og:see_also"
        content="https://www.instagram.com/krunal7091"
      />
      <meta property="og:see_also" content="https://www.behance.net/rizegfx" />
      <meta property="og:see_also" content="https://twitter.com/krunal7091" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={config.twitter} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  )
}

const SEO = (props) => (
  <StaticQuery
    query={querySEO}
    render={(data) => <Head {...props} data={data} />}
  />
)
export default SEO

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        siteTitle
        siteDescription
        siteShortName
        siteUrl
      }
    }
  }
`
