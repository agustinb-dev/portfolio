declare module "*.scss" {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.pdf" {
    const content: string;
    export = content;
}

declare module "*.svg" {
    const content: never;
    export default content;
}
