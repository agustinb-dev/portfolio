import React from "react";
import { Anchor, AnchorProperties } from "./Anchor";
import cls from "classnames";
import * as styles from "./Anchor.module.scss";

interface AnchorIconButtonProperties extends AnchorProperties{
	children: React.ReactNode;
}

export function AnchorIconButton(properties: AnchorIconButtonProperties) {
	const { className, children, ...rest } = properties;

	return (
		<Anchor className={cls(styles.anchorIconButton, className)} {...rest}>
			{children}
		</Anchor>
	);
}