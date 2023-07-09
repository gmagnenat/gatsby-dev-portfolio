/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Gwenaël Magnenat - Web Developer`,
		description: `Personal developer portfolio of Gwenaël Magnenat built with GatsbyJS`,
		twitterUsername: `@gmagnenat`,
		image: ``,
		siteUrl: `https://gmagnenat.com`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-postcss',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-remark',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-netlify`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/blog`,
			},
		},
	],
};
