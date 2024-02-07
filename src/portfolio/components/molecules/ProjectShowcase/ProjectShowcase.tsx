import React, { useContext } from "react";
import * as styles from "./ProjectShowcase.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorButton, Typography } from "../../atoms";
import { getImage } from "gatsby-plugin-image";
import { useViewport } from "react-viewport-hooks";
import { Project, StaticQueryResult } from "../../organisms/ProjectsSection/ProjectsSection.hook";
import { ImageDataLike } from "gatsby-plugin-image/dist/src/components/hooks";
import { LanguageContext } from "../../../context/LanguageContext";

interface ProjectShowcaseProperties {
	project: Project;
	data: StaticQueryResult;
}

export function ProjectShowcase(properties: ProjectShowcaseProperties) {
	const { activeLanguage } = useContext(LanguageContext);
	const image = getImage(properties.data.allFile.edges.find((edge: { node: { name: string; }; }) => edge.node.name === properties.project.imageName)?.node.childImageSharp.gatsbyImageData as ImageDataLike | null);
	const { vw } = useViewport({});
	return (
		<>
			{/*Desktop HTML structure*/}
			<div className={styles.project}>
				{properties.project.imageSide === "left" &&
					<div className={styles.imageWrapper}>
						{image && <GatsbyImage image={image} alt={""}/>}
					</div>
				}
				<div className={styles.projectInfoContainer}>
					<div className={styles.projectTitle}>
						<Typography variant={"subtitle"} size={vw < 1024 ? "extraSmall" : "small"} weight={"bold"} Component={"h3"}>
							{properties.project.title}
						</Typography>
					</div>
					<div className={styles.projectTechnologies}>
						{properties.project.techIcons && properties.project.techIcons.map((techIcon) => (
							techIcon
						))}
					</div>
					<div className={styles.projectDescription}>
						<Typography variant={"normal"} size={vw < 1280 ? "normal" : "large"}>
							{activeLanguage === "en" ? properties.project.descriptionEN : properties.project.descriptionES}
						</Typography>
					</div>
					<AnchorButton href={properties.project.websiteUrl} size={vw < 1024 ? "small" : "normal"}>
						<Typography weight={"semi-bold"} size={vw < 1024 ? "normal" : "large"}>Website</Typography>
					</AnchorButton>
				</div>
				{properties.project.imageSide === "right" && <div className={styles.imageWrapper}>
					{image && <GatsbyImage image={image} alt={""}/>}
				</div>}
			</div>
			{/*Mobile HTML structure*/}
			<div className={styles.projectMobile}>
				<div className={styles.projectTitleMobile}>
					<Typography variant={"subtitle"} size={vw < 475 ? "extraSmall" : "small"} weight={"bold"} Component={"h3"}>
						{properties.project.title}
					</Typography>
				</div>
				{properties.project.imageSide &&
					<div className={styles.imageWrapperMobile}>
						{image && <GatsbyImage image={image} alt={""}/>}
					</div>}
				<div className={styles.projectInfoContainerMobile}>
					<div className={styles.projectTechnologiesMobile}>
						{properties.project.techIcons && properties.project.techIcons.map((techIcon) => (
							techIcon
						))}
					</div>
					<div className={styles.projectDescriptionMobile}>
						<Typography variant={"normal"} size={"normal"}>
							{activeLanguage === "en" ? properties.project.descriptionEN : properties.project.descriptionES}
						</Typography>
					</div>
					<AnchorButton href={properties.project.websiteUrl} size={"small"}>
						<Typography weight={"semi-bold"}>Website</Typography>
					</AnchorButton>
				</div>
			</div>
		</>
	);
}