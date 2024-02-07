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
			descriptionES:"Clon de YNAB, software de finanzas personales basado en el presupuesto de base cero y diseñado para permitir a las personas una gestión efectiva de sus finanzas.",
			descriptionEN: "YNAB Clone which is a comprehensive personal finance software solution based on zero-based budgeting and designed to empower individuals in managing their finances effectively.",
			imageSide: "left",
			websiteUrl: "https://github.com/sergio222-dev/ztools-2",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "urlShortener",
			title: "URL Shortener",
			descriptionES:"Link shortener basado en los primeros ocho digitos de un uuidv4, tiene su propia API y base de datos para persistencia de datos.",
			descriptionEN: "Basic link shortener based on the first eight digits of an uuidv4, it has its own API and database for data persistence.",
			imageSide: "right",
			websiteUrl: "https://github.com/agustinb-dev/url-shortener",
			techIcons: [<ReactIcon key={1}/>, <TypeScriptIcon key={2}/>, <AxiosIcon key={3}/>, <SassIcon key={4}/>]
		},
		{
			imageName: "urls-api",
			title: "URL Shortener API",
			descriptionES:"API y base de datos para permitir la persistencia de datos de la app URL shortener. Hecho con Nest.Js y PostgreSQL.",
			descriptionEN: "API and database for URL shortener data persistence. Made with Nest.Js and PostgreSQL.",
			imageSide: "left",
			websiteUrl: "https://github.com/agustinb-dev/urls-server",
			techIcons: [<NestJsIcon key={1}/>, <TypeScriptIcon key={2}/>, <PostgresSQLIcon key={3}/>]
		},
		{
			imageName: "portfolio",
			title: "Portfolio",
			descriptionES:"Mi portfolio web donde puedo mostrar mis habilidades y los proyectos en los que he estado trabajando recientemente.",
			descriptionEN: "My portfolio website where I get to show off my skills and the projects I've been working on recently.",
			imageSide: "right",
			websiteUrl: "https://github.com/agustinb-dev/portfolio",
			techIcons: [<GatsbyIcon key={1}/>, <TypeScriptIcon key={2}/>, <SassIcon key={3}/>]
		}
	];

	return {
		data,
		projects
	};
}
