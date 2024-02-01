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
			<section className={styles.aboutContainer}>
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
								Hi!, my name is Agustin Barcia, a self-taught with 26 years old who is passionate about the world of web development.
								<br/><br/>
								My orientation is Front-End, focused more than anything on Typescript.
								I&#39;m motivated to continue learning and gaining experience in the professional
								field.<br/><br/>
								I believe that being a Front-End developer means not being afraid of challenges and
								have the ability to continually learn to tackle new projects more efficiently.
							</Typography>
						) : (<Typography Component={"p"} variant={"normal"} size={"large"}>
							Mi nombre es Agustin Barcia, tengo 26 años, soy un estudiante en la carrera de ingeniería en
							computación y autodidacta,
							apasionado por el mundo del desarrollo mobile y web.<br/><br/>
							Mi orientación es Full-Stack, centrado más que nada en Python y JavaScript.
							Estoy motivado a seguir aprendiendo y adquiriendo experiencia en el campo
							profesional.<br/><br/>
							Creo que ser un desarrollador Full Stack significa no tener miedo a los desafíos y tener la
							capacidad de aprender continuamente para abordar nuevos proyectos con mayor eficiencia.
						</Typography>)}
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
								<li><Typography Component={"span"} size={"large"}>Node.Js</Typography></li>
							</ul>
							<ul>
								<li><Typography Component={"span"} size={"large"}>Typescript</Typography></li>
								<li><Typography Component={"span"} size={"large"}>SCSS</Typography></li>
								<li><Typography Component={"span"} size={"large"}>Nest.Js</Typography></li>
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