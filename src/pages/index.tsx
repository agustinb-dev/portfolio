import * as React from "react";
import * as styles from "../portfolio/templates/main.module.scss";
import "normalize.css";
import "../portfolio/styles/app.scss";
import type { HeadFC, PageProps } from "gatsby";
import { Portfolio } from "./Portfolio";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className={styles.main}>
			<Portfolio />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => {return (
	<title>Portfolio</title>
);};



