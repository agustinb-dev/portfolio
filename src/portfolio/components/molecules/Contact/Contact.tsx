import React from "react";
import * as styles from "./Contact.module.scss";
import { AnchorButton, Typography } from "../../atoms";
import { useViewport } from "react-viewport-hooks";

export function Contact() {
	const { vw } =useViewport();
	return (
		<section id={"contact"} className={styles.contactSectionContainer} >
			<div className={styles.contactTitle}>
				<Typography variant={"subtitle"} size={"normal"} weight={"bold"} Component="h2">
					Get In Contact
				</Typography>
			</div>
			<Typography size={"large"} className={styles.contactDescription}>
				Whether you are starting a project,
				have business inquiries or just want to say hi,
				my inbox is always open so feel free to reach out
				and I will get back to you as soon as possible.
			</Typography>
			<AnchorButton href={"mailto:agustinbarcia.dev@gmail.com"} size={vw < 768 ?  "normal" : "large"}>
				<Typography weight={"semi-bold"} variant={"normal"} size={"large"}>
					Reach Out
				</Typography>
			</AnchorButton>
		</section>
	);
}