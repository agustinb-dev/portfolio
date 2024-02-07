import * as React from "react";
import * as styles from "../portfolio/templates/main.module.scss";
import "normalize.css";
import "../portfolio/styles/app.scss";
import type { HeadFC, PageProps } from "gatsby";
import { Portfolio } from "./Portfolio";
import { LanguageContextProvider } from "../portfolio/context/LanguageContextProvider";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className={styles.main}>
			<LanguageContextProvider>
				<Portfolio/>
			</LanguageContextProvider>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => {return (
	<title>Portfolio</title>
);};



