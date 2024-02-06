// noinspection GraphQLUnresolvedReference

import React, { useContext } from "react";
import * as styles from "./ProjectsSection.module.scss";
import { Typography } from "../../atoms";
import { ProjectShowcase } from "../../molecules";
import { useProjectsSectionHook } from "./ProjectsSection.hook";
import { LanguageContext } from "../../../context/LanguageContext";

export function ProjectsSectionView() {
	const { data, projects } = useProjectsSectionHook();
	const { activeLanguage } = useContext(LanguageContext);
	return (
		<section className={styles.projectsSectionContainer} id={"work"}>
			<div className={styles.projectsSectionHeader}>
				<div className={styles.generalTitle}>
					<Typography Component={"h2"} variant={"subtitle"} weight={"bold"} size={"normal"}>
						{activeLanguage === "en" ? "Projects" : "Proyectos"}
					</Typography>
				</div>
				<div className={styles.generalDescription}>
					<Typography size={"large"}>
						{activeLanguage === "en" ?
							"Some of the things I've made over the years."
							:
							"Algunas de las cosas que he creado a lo largo de los años."}
					</Typography>
				</div>
			</div>
			<div className={styles.projectsContainer}>
				{projects.map((project) => (
					<ProjectShowcase
						project={project}
						data={data}
						key={project.title}
					/>
				))}
			</div>
		</section>
	);
}