import React from "react";
import * as styles from "./Anchor.module.scss";
import cls from "classnames";
import { Anchor, AnchorProperties } from "./Anchor";

interface AnchorButtonProperties extends AnchorProperties {
	size: "small" | "normal" | "large";
}
export function AnchorButton(properties: AnchorButtonProperties) {
	const { className, size, ...rest } = properties;

	return <Anchor className={cls(styles.anchorButton, className, styles[size])} {...rest}></Anchor>;
}

AnchorButton.defaultProps = {
	size: "normal",
};