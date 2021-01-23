const path = require('path')
const config = require('./src/common/config')

module.exports = {
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    twitter: config.twitter,
    facebook: config.facebook,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `characters`,
        path: path.join(process.cwd(), 'src', 'data', 'characters'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
