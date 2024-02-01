import React from "react";
import * as styles from "./ProjectShowcase.module.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { AnchorButton, Typography } from "../../atoms";
import { getImage } from "gatsby-plugin-image";

interface ProjectShowcaseProperties {
	imageData: IGatsbyImageData,
	title: string,
	description: string,
	imageSide: string,
	websiteUrl: string,
}

export function ProjectShowcase(properties: ProjectShowcaseProperties) {
	const image = getImage(properties.imageData);
	return (
		<>
			<div className={styles.project}>
				{properties.imageSide === "left" && <div className={styles.imageWrapper}>
					{image && <GatsbyImage image={image} alt={""}/>}
				</div>}
				<div className={styles.projectInfoContainer}>
					<div className={styles.projectTitle}>
						<Typography variant={"subtitle"} size={"small"} weight={"bold"} Component={"h3"}>
							{properties.title}
						</Typography>
					</div>
					<div className={styles.projectDescription}>
						<Typography variant={"normal"} size={"normal"}>
							{properties.description}
						</Typography>
					</div>
					<AnchorButton href={properties.websiteUrl} size={"normal"}>
						<Typography weight={"bold"} size={"large"}>Website</Typography>
					</AnchorButton>
				</div>
				{properties.imageSide === "right" && <div className={styles.imageWrapper}>
					{image && <GatsbyImage image={image} alt={""}/>}
				</div>}
			</div>
			{/*Mobile HTML structure*/}
			<div className={styles.projectMobile}>
				<div className={styles.projectTitleMobile}>
					<Typography variant={"subtitle"} size={"extra-small"} weight={"bold"} Component={"h3"}>
						{properties.title}
					</Typography>
				</div>
				{properties.imageSide &&
					<div className={styles.imageWrapperMobile}>
						{image && <GatsbyImage image={image} alt={""}/>}
					</div>}
				<div className={styles.projectInfoContainerMobile}>
					<div className={styles.projectDescriptionMobile}>
						<Typography variant={"info"} size={"large"}>
							{properties.description}
						</Typography>
					</div>
					<AnchorButton href={properties.websiteUrl} size={"normal"}>
						<Typography weight={"bold"}>Website</Typography>
					</AnchorButton>
				</div>
			</div>
		</>
	);
}