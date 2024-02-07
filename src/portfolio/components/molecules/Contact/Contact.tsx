import React, { useContext } from "react";
import * as styles from "./Contact.module.scss";
import { AnchorButton, Typography } from "../../atoms";
import { useViewport } from "react-viewport-hooks";
import { LanguageContext } from "../../../context/LanguageContext";

export function Contact() {
	const { activeLanguage } = useContext(LanguageContext);
	const { vw } =useViewport();
	return (
		<section id={"contact"} className={styles.contactSectionContainer} >
			<div className={styles.contactTitle}>
				<Typography variant={"subtitle"} size={"normal"} weight={"bold"} Component="h2">
					{activeLanguage === "en" ? "Get In Contact" : "Contáctame"}
				</Typography>
			</div>
			<Typography size={"large"} className={styles.contactDescription}>
				{activeLanguage === "en" ?
					"I'm looking for new opportunities, if you have any questions or just want to say hi, my inbox is open and I'll try my best to get back to you as soon as possible."
					:
					"Estoy en busca de nuevas oportunidades. Si tienes alguna consulta o simplemente me quieres saludar, envíame un correo electrónico y te responderé lo antes posible."
				}
			</Typography>
			<AnchorButton href={"mailto:agustinbarcia.dev@gmail.com"} size={vw < 768 ?  "normal" : "large"}>
				<Typography weight={"semi-bold"} variant={"normal"} size={"large"}>
					{activeLanguage === "en" ? "Reach Out" : "Contactar"}
				</Typography>
			</AnchorButton>
		</section>
	);
}