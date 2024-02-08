import React from "react";
import * as styles from "./Header.module.scss";
import cv_en from "../../../../assets/cv_en.pdf";
import cv_es from "../../../../assets/cv_es.pdf";
import { Anchor, AnchorButton, ButtonSquare, Typography } from "../../atoms";
import { SocialList } from "../SocialList/SocialList";

interface HeaderProperties {
	activeLanguage: string;
	isMobNavOpen: boolean;
	handleMobNavOpen: () => void;
}
export function Header(properties: HeaderProperties) {
	return (
		<header className={styles.header}>
			<SocialList />
			<nav className={styles.navbar}>
				<ol>
					<li key={"about"}>
						<Anchor href={"/#about"}>
							<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
								{properties.activeLanguage === "en" ? "About" : "Presentación"}
							</Typography>
						</Anchor>
					</li>
					<li key={"work"}>
						<Anchor href={"/#work"}>
							<Typography weight={"semi-bold"} Component={"span"} variant={"info"}>
								{properties.activeLanguage === "en" ? "Work" : "Proyectos"}
							</Typography>
						</Anchor>
					</li>
					<li key={"contact"}>
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
						<li key={"aboutMobile"}>
							<Anchor href={"/#about"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"} size={"large"}>
									{properties.activeLanguage === "en" ? "About" : "Presentación"}
								</Typography>
							</Anchor>
						</li>
						<li key={"workMobile"}>
							<Anchor href={"/#work"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"} size={"large"}>
									{properties.activeLanguage === "en" ? "Work" : "Proyectos"}
								</Typography>
							</Anchor>
						</li>
						<li key={"contactMobile"}>
							<Anchor href={"/#contact"} onClick={() => properties.handleMobNavOpen()}>
								<Typography weight={"semi-bold"} Component={"span"} variant={"info"} size={"large"}>
									{properties.activeLanguage === "en" ? "Contact" : "Contacto"}
								</Typography>
							</Anchor>
						</li>
						<li className={styles.mobileNavLine} key={"resumeMobile"}></li>
						<AnchorButton href={"/#resume"} size={"thin"}>
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