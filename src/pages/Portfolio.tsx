import React from "react";
import * as styles from "../portfolio/templates/main.module.scss";
import { PortfolioPageView } from "../portfolio/components/organisms/PortfolioPage/PortfolioPage.view";

function Portfolio() {
	return (
		<div className={styles.page} id={"portfolioPage"}>
			<PortfolioPageView/>
		</div>
	);
}

export default Portfolio;