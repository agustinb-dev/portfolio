import React from "react";
import * as styles from "./SocialList.module.scss";
import { AnchorIconButton } from "../../atoms";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

export function SocialList() {
	return (
		<ul className={styles.socialList}>
			<li key={"github"}>
				<div className={styles.socialBox}>
					<AnchorIconButton href={"https://github.com/agustinb-dev"}>
						<FaGithub size={20}/>
					</AnchorIconButton>
					<span>GitHub</span>
				</div>
			</li>
			<li key={"linkedin"}>
				<div className={styles.socialBox}>
					<AnchorIconButton href={"https://www.linkedin.com/in/agustin-barcia-845b8a298/"}>
						<FaLinkedin size={20}/>
					</AnchorIconButton>
					<span>Linkedin</span>
				</div>
			</li>
		</ul>
	);
}