module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'ITDEV-164 Gatsby Blog.',
    author: 'Jouliet Morales',
    contact: {
      name: 'Jouliet Morales',
      company: 'Blogs Inc.',
      address: 'PO Box 1234',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ctticsfutc3a',
        accessToken: 'Xmyk_gnYk53AAQuAs0UzrjC168BxqHw8l3Dmii3R7pE',
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ],
}
