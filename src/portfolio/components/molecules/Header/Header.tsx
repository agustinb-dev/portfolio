import React from "react";
import * as styles from "./Header.module.scss";
import { Anchor, AnchorButton, Typography } from "../../atoms";

interface HeaderProperties {
	activeLanguage: string;
}
export function Header(properties: HeaderProperties) {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<ol>
					<li>
						<Anchor href={"/#about"}>
							<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
								{properties.activeLanguage === "en" ? "About" : "Presentación"}
							</Typography>
						</Anchor>
					</li>
					<li>
						<Anchor href={"/#work"}>
							<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
								{properties.activeLanguage === "en" ? "Work" : "Proyectos"}
							</Typography>
						</Anchor>
					</li>
					<li>
						<Anchor href={"/#contact"}>
							<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
								{properties.activeLanguage === "en" ? "Contact" : "Contacto"}
							</Typography>
						</Anchor>
					</li>
				</ol>
				<AnchorButton href={"/#resume"} className={styles.resumeButton} size={"thin"}>
					<Typography Component={"span"} weight={"semi-bold"}>
						{properties.activeLanguage === "en" ? "Resume" : "Curriculum"}
					</Typography>
				</AnchorButton>
			</nav>
		</header>
	);
}