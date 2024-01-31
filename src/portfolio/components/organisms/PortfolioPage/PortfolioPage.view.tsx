import React from "react";
import { Header, Hero, About } from "../../molecules";
import { usePortfolioPageHook } from "./PortfolioPage.hook";


export function PortfolioPageView() {
	const { activeLanguage, handleLanguageButtonClick } = usePortfolioPageHook();

	return (
		<>
			<Header activeLanguage={activeLanguage}/>
			<Hero activeLanguage={activeLanguage}/>
			<About activeLanguage={activeLanguage} handleLanguageButtonClick={handleLanguageButtonClick}/>
		</>
	);
}