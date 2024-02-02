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
		setIsMobNavOpen(!isMobNavOpen);
	};

	return {
		activeLanguage,
		handleLanguageButtonClick,
		isMobNavOpen,
		handleMobNavOpen,
	};
}