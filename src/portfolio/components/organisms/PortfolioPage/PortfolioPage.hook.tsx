// import { useEffect, useState } from "react";

import { useContext, useState } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

export function usePortfolioPageHook() {
	// state
	const { activeLanguage, updateLanguageState } = useContext(LanguageContext);
	const [ isMobNavOpen, setIsMobNavOpen] = useState(false);

	const handleLanguageButtonClick = (language: string) => {
		updateLanguageState(language);
	};

	const handleMobNavOpen = () => {
		const page = document.querySelector("#portfolioPage") as HTMLElement;
		setIsMobNavOpen(!isMobNavOpen);
		isMobNavOpen ? page.style.overflow = "hidden auto" : page.style.overflow = "hidden";
	};

	return {
		activeLanguage,
		handleLanguageButtonClick,
		isMobNavOpen,
		handleMobNavOpen,
	};
}