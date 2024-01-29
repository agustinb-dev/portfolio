import React from "react";
import * as styles from "./Anchor.module.scss";
import { Anchor, AnchorProperties } from "./Anchor";

export function AnchorButton(properties: AnchorProperties) {
	const { className, ...rest } = properties;
	return <Anchor className={`${styles.anchorButton} ${className}`} {...rest}></Anchor>;
}