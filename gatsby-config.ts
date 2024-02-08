import type { GatsbyConfig } from "gatsby";
import path from "node:path";

const gatsbyRequiredRules = path.join(
	process.cwd(),
	"node_modules",
	"gatsby",
	"dist",
	"utils",
	"eslint-rules"
);

const config: GatsbyConfig = {
	flags: {
		DEV_SSR: true
	},
	siteMetadata: {
		title: "Portfolio",
		siteUrl: "https://www.yourdomain.tld"
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
		{
			// eslint-disable-next-line sonarjs/no-duplicate-string
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "PortfolioImages",
				"path": "./src/images/PortfolioImages/"
			},
			__key: "PortfolioImages"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "ProjectsImages",
				path: "./src/images/ProjectsImages/",
			},
			__key: "ProjectsImages",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /TechSVGIcons/
				}
			}
		},
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [
					"G-73C39H00G7"
				]
			}
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				"icon": "src/images/PortfolioImages/icon.png"
			}
		},
		{
			resolve: "gatsby-omni-font-loader",
			options: {
				enableListener: true,
				preconnect: ["https://api.fontshare.com"],
				web: [
					{
						name: "General Sans",
						file: "https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap",
					}
				]
			}
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				// Gatsby required rules directory
				rulePaths: [gatsbyRequiredRules],
				// Default settings that may be omitted or customized
				stages: ["develop"],
				extensions: ["js", "jsx", "ts", "tsx"],
				exclude: ["node_modules", "bower_components", ".cache", "public"],
				// Any additional eslint-webpack-plugin options below
				// ...
			},
		},
	]
};

export default config;
