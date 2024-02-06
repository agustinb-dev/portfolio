import React from "react";
import GatsbyIcon from "../../../../assets/gatsby.svg";
import NestJsIcon from "../../../../assets/nestjs.svg";
import PostgresSQLIcon from "../../../../assets/postgresSQL.svg";
import TypeScriptIcon from "../../../../assets/typescript.svg";
import ReactIcon from "../../../../assets/ReactIcon.svg";
import SassIcon from "../../../../assets/sass.svg";
import AxiosIcon from "../../../../assets/axios.svg";
// import MongoDBIcon from "../../../../assets/mongodb.svg";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export interface Project {
	imageName: string,
	title: string,
	description: string,
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
			imageName: "project1",
			title: "Z-Economy",
			description:"Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			imageSide: "left",
			websiteUrl: "https://waxmotiff.com",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "project2",
			title: "URL Shortener",
			description: "Mollit ipsum sfgasdfamollit magna occaecat eiusmod sint fugiat est non adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non amet nostrud officia duis.",
			imageSide: "right",
			websiteUrl: "https://waxwmotsif.com",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "project3",
			title: "URL Shortener Api",
			description: "Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim.",
			imageSide: "left",
			websiteUrl: "https://waxmotsif.com",
			techIcons: [<NestJsIcon key={1}/>, <TypeScriptIcon key={2}/>, <PostgresSQLIcon key={3}/>]
		},
		{
			imageName: "project4",
			title: "Portfolio",
			description: "Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
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
