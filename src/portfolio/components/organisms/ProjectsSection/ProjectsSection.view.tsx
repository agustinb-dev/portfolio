// noinspection GraphQLUnresolvedReference

import React from "react";
import * as styles from "./ProjectsSection.module.scss";
import { Typography } from "../../atoms";
import { ProjectShowcase } from "../../molecules";
import { useProjectsSectionHook } from "./ProjectsSection.hook";

export function ProjectsSectionView() {
	const { data, projects } = useProjectsSectionHook();
	return (
		<section className={styles.projectsSectionContainer}>
			<div className={styles.projectsSectionHeader}>
				<div className={styles.generalTitle}>
					<Typography Component={"h2"} variant={"subtitle"} weight={"bold"} size={"normal"}>
						Projects
					</Typography>
				</div>
				<div className={styles.generalDescription}>
					<Typography size={"large"}>
						Some of the things I&apos;ve made over the years.
					</Typography>
				</div>
			</div>
			<div className={styles.projectsContainer}>
				{projects.map((project) => (
					<ProjectShowcase
						key={project.title}
						imageData={data.allFile.edges.find((edge: { node: { name: string; extension: string; }; }) => edge.node.name === project.imageName)?.node.childImageSharp.gatsbyImageData}
						title={project.title}
						description={project.description}
						imageSide={project.imageSide}
						websiteUrl={project.websiteUrl}
					/>
				))}
			</div>
		</section>
	);
}