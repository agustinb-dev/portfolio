import React from "react";
import * as styles from "./Hero.module.scss";
import { AnchorButton, Typography } from "../../atoms";

export function Hero() {
	return (
		<section>
			<div className={styles.heroContainer}>
				<Typography variant={"title"} size={"large"} style={"italic"} weight={"bold"} Component={"h1"}>
					AGUSTIN BARCIA
				</Typography>
				<div className={styles.subTitle}>
					<Typography variant={"title"} size={"small"} style={"italic"} weight={"bold"} Component={"h2"}>
						FRONT-END DEVELOPER
					</Typography>
				</div>
				<div className={styles.heroButtons}>
					<AnchorButton href={"/#resume"}>
						<Typography style={"italic"} weight={"bold"}>DOWNLOAD CV</Typography>
					</AnchorButton>
					<AnchorButton href={"/#contact"}>
						<Typography style={"italic"} weight={"bold"}>CONTACT ME</Typography>
					</AnchorButton>
				</div>
			</div>
		</section>
	);
}