module.exports = {
  siteMetadata: {
    title: 'Bradley Baylis | Portfolio',
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