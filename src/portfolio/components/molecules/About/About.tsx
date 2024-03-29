import React from "react";
import * as styles from "./About.module.scss";
import { ButtonSquare, Typography } from "../../atoms";
import { StaticImage } from "gatsby-plugin-image";

interface AboutProperties {
	activeLanguage: string;
	handleLanguageButtonClick: (language: string) => void;
}

export function About(properties: AboutProperties) {
	return (
		<>
			<section className={styles.aboutContainer} id={"about"}>
				<div className={styles.languageButtons}>
					<ButtonSquare active={properties.activeLanguage === "es"}
								  onClick={() => properties.handleLanguageButtonClick("es")}>
						<Typography size={"large"}>
							ES
						</Typography>
					</ButtonSquare>
					<ButtonSquare active={properties.activeLanguage === "en"}
								  onClick={() => properties.handleLanguageButtonClick("en")}>
						<Typography size={"large"}>
							EN
						</Typography>
					</ButtonSquare>
				</div>
				<div className={styles.aboutTextContainer}>
					<div className={styles.aboutMe}>
						<Typography Component={"h2"} variant={"subtitle"} weight={"bold"} size={"small"}>
							{properties.activeLanguage === "en" ? "About Me" : "Sobre Mí"}
						</Typography>
					</div>
					<div className={styles.description}>
						{properties.activeLanguage === "en" ? (
							<Typography Component={"p"} variant={"normal"} size={"large"}>
								Hi!, my name is Agustin Barcia, a self-taught with 26 years old who is passionate about the world of web development.<br/><br/>
								
								My orientation is Front-End, focused more than anything on React and TypeScript.
								I&#39;m motivated to continue learning and gaining experience in the professional
								field.<br/><br/>
								
								I believe that being a developer means not being afraid of challenges and
								have the ability to continually learn to tackle new projects more efficiently.
							</Typography>
						) : (
							<Typography Component={"p"} variant={"normal"} size={"large"}>
								Hola!, mi nombre es Agustin Barcia, tengo 26 años y soy un autodidacta apasionado por el mundo del desarrollo web.<br/><br/>

								Mi orientación es Front-End, centrado más que nada en React y TypeScript.
								Estoy motivado a seguir aprendiendo y adquiriendo experiencia en el campo profesional.<br/><br/>

								Creo que ser un desarrollador significa no tener miedo a los desafíos y tener la
								capacidad de aprender continuamente para abordar nuevos proyectos con mayor eficiencia.
							</Typography>
						)}
					</div>
					<hr className={styles.horizontalLine}/>
					<div className={styles.technologiesContainer}>
						<div>
							<Typography Component={"h2"} variant={"normal"} weight={"bold"} size={"large"}>
								Technologies
							</Typography>
						</div>
						<div className={styles.technologies}>
							<ul>
								<li><Typography Component={"span"} size={"large"}>JavaScript (ES6+)</Typography></li>
								<li><Typography Component={"span"} size={"large"}>React</Typography></li>
								<li><Typography Component={"span"} size={"large"}>SASS</Typography></li>
							</ul>
							<ul>
								<li><Typography Component={"span"} size={"large"}>TypeScript</Typography></li>
								<li><Typography Component={"span"} size={"large"}>Node</Typography></li>
								<li><Typography Component={"span"} size={"large"}>Nest</Typography></li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.image}>
					<StaticImage alt={"face photo"}
								 src={"../../../../images/PortfolioImages/me.png"}
								 width={200}
					>
					</StaticImage>
				</div>
			</section>
		</>
	);
}
