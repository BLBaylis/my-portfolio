module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
   	'gatsby-plugin-eslint', 
   	'gatsby-plugin-typography',
  	{
      	resolve: `gatsby-plugin-typography`,
      	options: {
        	pathToConfigModule: `src/utils/typography.js`,
      	},
    }],
    pathPrefix: `/my-portfolio`,
}