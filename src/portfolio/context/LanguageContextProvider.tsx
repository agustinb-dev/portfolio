import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

interface Properties {
	children: React.ReactNode
}

export function LanguageContextProvider(properties: Properties ) {

	// TODO: Change for i18n implementation.
	const isBrowser = typeof window !== "undefined";
	const initialLanguage = isBrowser && (localStorage.getItem("language") || navigator.language.slice(0, 2)) || "en";
	const [activeLanguage, setActiveLanguage] = useState<string>("en");

	const updateLanguageState = (newState: string) => {
		setActiveLanguage(newState);
	};

	useEffect(() => {
		updateLanguageState(initialLanguage);
	}, []);

	useEffect(() => {
		isBrowser && localStorage.setItem("language", activeLanguage);
	}, [activeLanguage]);

	return (
		<LanguageContext.Provider value={{ activeLanguage, updateLanguageState: updateLanguageState }}>
			{properties.children}
		</LanguageContext.Provider>
	);
}