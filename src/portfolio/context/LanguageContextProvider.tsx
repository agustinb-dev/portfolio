import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

interface Properties {
	children: React.ReactNode
}

export function LanguageContextProvider(properties: Properties ) {
	const initialLanguage = (localStorage.getItem("language") || navigator.language.slice(0, 2)) || "en";
	const [activeLanguage, setActiveLanguage] = useState<string>(initialLanguage);

	const updateLanguageState = (newState: string) => {
		setActiveLanguage(newState);
	};

	useEffect(() => {
		localStorage.setItem("language", activeLanguage);
	}, [activeLanguage]);

	return (
		<LanguageContext.Provider value={{ activeLanguage, updateLanguageState: updateLanguageState }}>
			{properties.children}
		</LanguageContext.Provider>
	);
}