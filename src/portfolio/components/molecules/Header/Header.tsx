import React from "react";
import * as styles from "./Header.module.scss";
import cv_en from "../../../../assets/cv_en.pdf";
import cv_es from "../../../../assets/cv_es.pdf";
import { Anchor, AnchorButton, ButtonSquare, Typography } from "../../atoms";

interface HeaderProperties {
	activeLanguage: string;
	isMobNavOpen: boolean;
	handleMobNavOpen: () => void;
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
				<AnchorButton href={properties.activeLanguage === "en" ? cv_en : cv_es} className={styles.resumeButton} size={"thin"}>
					<Typography Component={"span"} weight={"semi-bold"}>
						{properties.activeLanguage === "en" ? "Resume" : "Curriculum"}
					</Typography>
				</AnchorButton>
			</nav>
			{/*	MOBILE Navigation */}
			<ButtonSquare onClick={() => properties.handleMobNavOpen()}
						  className={styles.mobileNavButton}
			>
				<Typography size={"large"}>|||</Typography>
			</ButtonSquare>
			{properties.isMobNavOpen &&
				<nav className={styles.mobileNavContainer}>
					<ol>
						<li>
							<Anchor href={"/#about"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
									{properties.activeLanguage === "en" ? "About" : "Presentación"}
								</Typography>
							</Anchor>
						</li>
						<li>
							<Anchor href={"/#work"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
									{properties.activeLanguage === "en" ? "Work" : "Proyectos"}
								</Typography>
							</Anchor>
						</li>
						<li>
							<Anchor href={"/#contact"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
									{properties.activeLanguage === "en" ? "Contact" : "Contacto"}
								</Typography>
							</Anchor>
						</li>
						<li className={styles.mobileNavLine}></li>
						<AnchorButton href={"/#resume"} className={styles.mobileResumeButton} size={"thin"}>
							<Typography Component={"span"} weight={"semi-bold"}>
								{properties.activeLanguage === "en" ? "Resume" : "Curriculum"}
							</Typography>
						</AnchorButton>
					</ol>
				</nav>
			}
		</header>
	);
}