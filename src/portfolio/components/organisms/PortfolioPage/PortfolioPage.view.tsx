import React from "react";
import * as styles from "./PortfolioPage.module.scss";
import { Header, Hero, About, Contact, Footer } from "../../molecules";
import { usePortfolioPageHook } from "./PortfolioPage.hook";
import { ProjectsSectionView } from "../ProjectsSection/ProjectsSection.view";

export function PortfolioPageView() {
	const {
		activeLanguage,
		handleLanguageButtonClick,
		isMobNavOpen,
		handleMobNavOpen,
	} = usePortfolioPageHook();

	return (
		<div className={styles.portfolioPageContainer}>
			<Header activeLanguage={activeLanguage} isMobNavOpen={isMobNavOpen} handleMobNavOpen={handleMobNavOpen}/>
			<Hero activeLanguage={activeLanguage}/>
			<About activeLanguage={activeLanguage} handleLanguageButtonClick={handleLanguageButtonClick}/>
			<ProjectsSectionView />
			<Contact />
			<Footer />
		</div>
	);
}
