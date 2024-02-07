import React from "react";
import * as styles from "./SocialList.module.scss";
import { AnchorIconButton } from "../../atoms";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";

export function SocialList() {
	return (
		<ul className={styles.socialList}>
			<li>
				<div className={styles.socialBox}>
					<AnchorIconButton href={"https://github.com/agustinb-dev"}>
						<FaGithub size={20}/>
					</AnchorIconButton>
					<span>GitHub</span>
				</div>
			</li>
			<li>
				<div className={styles.socialBox}>
					<AnchorIconButton href={"https://www.linkedin.com/in/agustin-barcia-845b8a298/"}>
						<FaLinkedin size={20}/>
					</AnchorIconButton>
					<span>Linkedin</span>
				</div>
			</li>
			<li>
				<div className={styles.socialBox}>
					<AnchorIconButton href={"https://www.instagram.com/eternallydie/"}>
						<AiFillInstagram size={20}/>
					</AnchorIconButton>
					<span>Instagram</span>
				</div>
			</li>
		</ul>
	);
}