import React from "react";
import * as styles from "./Hero.module.scss";
import cv_en from "../../../../assets/cv_en.pdf";
import cv_es from "../../../../assets/cv_es.pdf";
import { AnchorButton, Typography } from "../../atoms";
import { useViewport } from "react-viewport-hooks";

interface HeroProperties {
	activeLanguage: string;
}

export function Hero(properties: HeroProperties) {
	const { vw } = useViewport();
	return (
		<>
			<section className={styles.heroContainer}>
				<Typography variant={"title"} size={"large"} style={"italic"} weight={"bold"} Component={"h1"}>
					AGUSTIN BARCIA
				</Typography>
				<div className={styles.subTitle}>
					<Typography variant={"title"} size={"extraSmall"} style={"italic"} weight={"bold"} Component={"h2"}>
						FRONT-END DEVELOPER
					</Typography>
				</div>
				<div className={styles.heroButtons}>
					<AnchorButton href={properties.activeLanguage === "en" ? cv_en : cv_es} size={vw < 768 ? (vw < 475 ? "thin" : "normal") : "large"}>
						<Typography style={"italic"} weight={"semi-bold"} size={vw < 768 ? (vw < 475 ? "extraSmall" : "small") : "normal"}>
							{properties.activeLanguage === "en" ? "DOWNLOAD CV" : "DESCARGAR CV" }
						</Typography>
					</AnchorButton>
					<AnchorButton href={"/#contact"} size={vw < 768 ? (vw < 475 ? "thin" : "normal") : "large"}>
						<Typography style={"italic"} weight={"semi-bold"} size={vw < 768 ? (vw < 475 ? "extraSmall" : "small") : "normal"}>
							{properties.activeLanguage === "en" ? "CONTACT ME" : "CONTÁCTAME" }
						</Typography>
					</AnchorButton>
				</div>
			</section>
		</>
	);
}