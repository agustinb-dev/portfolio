import React from "react";
import GatsbyIcon from "../../../../assets/TechSVGIcons/gatsby.svg";
import NestJsIcon from "../../../../assets/TechSVGIcons/Nestjs.svg";
import PostgresSQLIcon from "../../../../assets/TechSVGIcons/PostgresSQL.svg";
import TypeScriptIcon from "../../../../assets/TechSVGIcons/TypeScript.svg";
import ReactIcon from "../../../../assets/TechSVGIcons/ReactIcon.svg";
import SassIcon from "../../../../assets/TechSVGIcons/Sass.svg";
import AxiosIcon from "../../../../assets/TechSVGIcons/Axios.svg";
// import MongoDBIcon from "../../../../assets/mongodb.svg";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export interface Project {
	imageName: string,
	title: string,
	descriptionES: string,
	descriptionEN: string,
	imageSide: string,
	websiteUrl: string,
	techIcons: Array<React.ReactNode>,
}

interface FileNode {
	node: {
		name: string;
		relativePath: string;
		childImageSharp: {
			gatsbyImageData: ImageDataLike;
		};
	};
}

export interface StaticQueryResult {
	allFile: {
		edges: FileNode[];
	};
}

export function useProjectsSectionHook() {
	// noinspection GraphQLUnresolvedReference
	const data: StaticQueryResult = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "ProjectsImages"}}) {
                edges {
                    node {
                        name
                        relativePath
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
	`);

	const projects: Project[] = [
		{
			imageName: "z-economy",
			title: "Z-Economy",
			descriptionES:"Ea ueserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			descriptionEN: "YNAB Clone which is a comprehensive personal finance software solution based on zero-based budgeting and designed to empower individuals in managing their finances effectively.",
			imageSide: "left",
			websiteUrl: "https://waxmotiff.com",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "urlShortener",
			title: "URL Shortener",
			descriptionES:"Ea ut non cupidatat consequat sint  cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			descriptionEN: "Basic link shortener based on the first eight digits of an uuidv4, it has its own API and database for data persistence.",
			imageSide: "right",
			websiteUrl: "https://waxwmotsif.com",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "urls-api",
			title: "URL Shortener API",
			descriptionES:"Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			descriptionEN: "API and database for URL shortener data persistence. Made with Nest.Js and PostgreSQL",
			imageSide: "left",
			websiteUrl: "https://waxmotsif.com",
			techIcons: [<NestJsIcon key={1}/>, <TypeScriptIcon key={2}/>, <PostgresSQLIcon key={3}/>]
		},
		{
			imageName: "portfolio",
			title: "Portfolio",
			descriptionES:"Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			descriptionEN: "My portfolio website where I get to show off my skills and the projects I've been working on recently",
			imageSide: "right",
			websiteUrl: "https://waxmotsif.com",
			techIcons: [<GatsbyIcon key={1}/>, <TypeScriptIcon key={2}/>, <SassIcon key={3}/>]
		}
	];

	return {
		data,
		projects
	};
}
