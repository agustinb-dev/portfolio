import React from "react";
import * as styles from "./Anchor.module.scss";

export interface AnchorProperties extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Anchor(properties: AnchorProperties) {
	const { className, ...rest } = properties;
	return (
		<a className={`${className} ${styles.anchorNormal}`} {...rest}></a>
	);
}