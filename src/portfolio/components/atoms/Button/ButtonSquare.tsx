import React from "react";
import * as styles from "./Button.module.scss";
import { Button, ButtonProperties } from "./Button";

interface ButtonSquareProperties extends ButtonProperties {
	active?: boolean;
}

export function ButtonSquare(properties: ButtonSquareProperties) {
	const { className,active , ...rest } = properties;
	return <Button className={`${styles.buttonSquare} ${className}`} data-active={active} {...rest}></Button>;
}