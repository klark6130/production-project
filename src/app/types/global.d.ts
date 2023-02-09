declare module '*.scss' {
  const css: Record<string, string>;
  export default css;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
