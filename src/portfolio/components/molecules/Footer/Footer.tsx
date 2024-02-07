import React from "react";
import * as styles from "./Footer.module.scss";
import { Typography } from "../../atoms";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Typography variant={"info"} size={"normal"} weight={"medium"}>
				~ AGUSTIN BARCIA ~
			</Typography>
		</footer>
	);
}