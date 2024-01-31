import React from "react";
import * as styles from "./Button.module.scss";

export interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button(properties: ButtonProperties) {
	const { className, ...rest } = properties;
	return <button className={`${styles.buttonNormal} ${className}`} {...rest}></button>;
}