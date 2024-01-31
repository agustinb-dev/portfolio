// import { useEffect, useState } from "react";

import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

export function usePortfolioPageHook() {
	const { activeLanguage, updateLanguageState } = useContext(LanguageContext);

	const handleLanguageButtonClick = (language: string) => {
		updateLanguageState(language);
	};

	return {
		activeLanguage,
		handleLanguageButtonClick
	};
}