import { graphql, useStaticQuery } from "gatsby";

export function useProjectsSectionHook() {
	// noinspection GraphQLUnresolvedReference
	const data = useStaticQuery(graphql`
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

	const projects = [
		{
			imageName: "project1",
			title: "Wax Motif",
			description:"Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			imageSide: "left",
			websiteUrl: "https://waxmotiff.com"
		},
		{
			imageName: "project2",
			title: "Draze Force",
			description: "Mollit ipsum sfgasdfamollit magna occaecat eiusmod sint fugiat est non adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non amet nostrud officia duis.",
			imageSide: "right",
			websiteUrl: "https://waxwmotsif.com"
		},
		{
			imageName: "project3",
			title: "Artren",
			description: "Elit est amet quis incididunt officia velit eiusmod do amet. Sint non qui nulla sit ex cillum non pariatur velit proident ut aliqua fugiat incididunt id minim.",
			imageSide: "left",
			websiteUrl: "https://waxmotsif.com"
		},
		{
			imageName: "project4",
			title: "Platform Pro",
			description: "Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris adipisicing cupidatat sint.",
			imageSide: "right",
			websiteUrl: "https://waxmotsif.com"
		}
	];

	return {
		data,
		projects
	};
}