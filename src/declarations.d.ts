declare module "*.scss" {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.pdf" {
    const content: string;
    export = content;
}

declare module "*.svg" {
    import { JSX } from "react";
    const content: JSX;
    export default content;
}
