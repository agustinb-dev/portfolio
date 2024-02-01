import { graphql, useStaticQuery } from "gatsby";

export function useProjectsSectionHook() {
	// noinspection GraphQLUnresolvedReference
	const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "ProjectsImages"}}) {
                edges {
                    node {
                        extension
                        relativePath
                        absolutePath
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
	`);

	const projects = [
		{
			name: "project1",
			title: "Wax Motif",
			description: "Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			imageSide: "left",
			websiteUrl: "https://waxmotiff.com"
		},
		{
			name: "project2",
			title: "Wax Motif",
			description: "Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non amet nostrud officia duis.",
			imageSide: "right",
			websiteUrl: "https://waxmotsif.com"
		}
	];

	return {
		data,
		projects
	};
}