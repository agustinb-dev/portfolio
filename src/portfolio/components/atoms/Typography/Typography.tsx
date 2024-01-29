import React, { PropsWithChildren } from "react";
import * as styles from "./Typography.module.scss";
import cls from "classnames";

interface TypographyProperties {
	size: "small" | "normal" | "large";
	Component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	variant?: "normal" | "title";
	style: "normal" | "italic";
	weight?: "normal" | "bold" | "semi-bold";
}

export function Typography({ Component, size, variant, children, style, weight }: PropsWithChildren<TypographyProperties>) {
	const variantStyles = {
		[styles.variantNormal]: variant === "normal",
		[styles.variantTitle]: variant === "title",
	};
	
	const styleStyles = {
		[styles.styleNormal]: style === "normal",
		[styles.styleItalic]: style === "italic",
	};

	const weightStyles = {
		[styles.weightNormal]: weight === "normal",
		[styles.weightSemiBold]: weight === "semi-bold",
		[styles.weightBold]: weight === "bold",
	};

	console.log(styleStyles);

	console.log(variantStyles);

	return (
		<Component className={cls(styles.typography, `${Object.keys(variantStyles).find(key => variantStyles[key])}`, styles[size], `${Object.keys(styleStyles).find(key => styleStyles[key])}`, `${Object.keys(weightStyles).find(key => weightStyles[key])}`)}>
			{children}
		</Component>
	);
}

Typography.defaultProps = {
	size: "normal",
	Component: "p",
	style: "normal",
	variant: "normal",
	weight: "normal"
};