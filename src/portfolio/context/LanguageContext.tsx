import React from "react";

export interface LanguageState {
	activeLanguage: string;
	updateLanguageState: (newState: string) => void;
}

const defaultState: LanguageState = {
	activeLanguage: "en",
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	updateLanguageState: (newState?: string) => {},
};

export const LanguageContext = React.createContext<LanguageState>(defaultState);