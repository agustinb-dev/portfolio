import React from "react";
import * as styles from "./Header.module.scss";
import { Anchor, AnchorButton, Typography } from "../../atoms";

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<ol>
					<li>
						<Anchor href={"/#about"}>
							<Typography weight={"semi-bold"} Component={"span"}>
								About
							</Typography>
						</Anchor>
					</li>
					<li>
						<Anchor href={"/#work"}>
							<Typography weight={"semi-bold"} Component={"span"}>
								Work
							</Typography>
						</Anchor>
					</li>
					<li>
						<Anchor href={"/#contact"}>
							<Typography weight={"semi-bold"} Component={"span"}>
								Contact
							</Typography>
						</Anchor>
					</li>
				</ol>
				<AnchorButton href={"/#resume"} className={styles.resumeButton}>
					<Typography Component={"span"} weight={"semi-bold"}>
						Resume
					</Typography>
				</AnchorButton>
			</nav>
		</header>
	);
}