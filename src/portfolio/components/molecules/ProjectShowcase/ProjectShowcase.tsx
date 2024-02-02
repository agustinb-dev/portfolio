import React from "react";
import * as styles from "./ProjectShowcase.module.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { AnchorButton, Typography } from "../../atoms";
import { getImage } from "gatsby-plugin-image";
import { useViewport } from "react-viewport-hooks";

interface ProjectShowcaseProperties {
	imageData: IGatsbyImageData,
	title: string,
	description: string,
	imageSide: string,
	websiteUrl: string,
}

export function ProjectShowcase(properties: ProjectShowcaseProperties) {
	const image = getImage(properties.imageData);
	const { vw } = useViewport({});
	return (
		<>
			{/*Desktop HTML structure*/}
			<div className={styles.project}>
				{properties.imageSide === "left" && <div className={styles.imageWrapper}>
					{image && <GatsbyImage image={image} alt={""}/>}
				</div>}
				<div className={styles.projectInfoContainer}>
					<div className={styles.projectTitle}>
						<Typography variant={"subtitle"} size={vw < 1024 ? "extraSmall" : "small"} weight={"bold"} Component={"h3"}>
							{properties.title}
						</Typography>
					</div>
					<div className={styles.projectDescription}>
						<Typography variant={"normal"} size={vw < 1280 ? "normal" : "large"}>
							{properties.description}
						</Typography>
					</div>
					<AnchorButton href={properties.websiteUrl} size={vw < 1024 ? "small" : "normal"}>
						<Typography weight={"semi-bold"} size={vw < 1024 ? "normal" : "large"}>Website</Typography>
					</AnchorButton>
				</div>
				{properties.imageSide === "right" && <div className={styles.imageWrapper}>
					{image && <GatsbyImage image={image} alt={""}/>}
				</div>}
			</div>
			{/*Mobile HTML structure*/}
			<div className={styles.projectMobile}>
				<div className={styles.projectTitleMobile}>
					<Typography variant={"subtitle"} size={vw < 475 ? "extraSmall" : "small"} weight={"bold"} Component={"h3"}>
						{properties.title}
					</Typography>
				</div>
				{properties.imageSide &&
					<div className={styles.imageWrapperMobile}>
						{image && <GatsbyImage image={image} alt={""}/>}
					</div>}
				<div className={styles.projectInfoContainerMobile}>
					<div className={styles.projectDescriptionMobile}>
						<Typography variant={"normal"} size={"normal"}>
							{properties.description}
						</Typography>
					</div>
					<AnchorButton href={properties.websiteUrl} size={"small"}>
						<Typography weight={"semi-bold"} >Website</Typography>
					</AnchorButton>
				</div>
			</div>
		</>
	);
}