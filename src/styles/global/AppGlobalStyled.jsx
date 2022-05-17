import { createGlobalStyle } from "styled-components";

export const AppGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    ::-webkit-scrollbar {
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.bgColor.main}; 
    }
 
    ::-webkit-scrollbar-thumb {
      background: rgba(250,250,250,.25);
      visibility: hidden;
    }

    ::-webkit-scrollbar-thumb:hover {
      visibility: visible;
    }
    
    body {
       height: max-content;
        max-width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        background: ${({ theme }) => theme.bgColor.main_alt};
        color: ${({ theme }) => theme.fontColor.body};
    }

    a {
        text-decoration:none;
    }

    li {
        list-style: none;
    }

    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
`;

//* vscode theme

export const vscodeTheme = {
  bgColor: {
    body: "#1A132F",
    main: "#383838",
    main_alt: "#202020",
    hover: "#598DEF64",
  },
  fontColor: {
    body: "#f0f1f5",
    tag: "#598DEF",
    attribute: "#84DFFF",
    value: "#966C3B",
    symbol: "#7F8487",
    comment: "#4E944F",
    const: "#598DEF",
    var: "#E15FED",
    property: "#eee",
    obj_value: "#FFEF82",
  },
  border: {
    nav: "#202020 1px solid",
    nav_hover: "1px solid inherit",
    sidebar: "null",
  },
};

//* darkcontrast theme

export const darkcontrastTheme = {
  bgColor: {
    body: "#000",
    main: "#111",
    main_alt: "#000000",
    hover: "transparent",
  },
  fontColor: {
    body: "#fff",
    tag: "#6BCB77",
    attribute: "#84DFFF",
    value: "#966C3B",
    symbol: "#7F8487",
    comment: "#f0f0f0",
    const: "#FF6464",
    var: "#39A2DB",
    property: "#eee",
    obj_value: "#84DFFF",
  },
  border: {
    nav: "rgb(255 255 255 / .5) 1px solid",
    nav_hover: "1px dashed #598DEF",
    sidebar: "1px solid #f0f0f0",
    footer: "1px solid #f0f0f0",
  },
};

//* github theme

export const githubTheme = {
  bgColor: {
    body: "#f1f1f1",
    main: "#2f363d",
    main_alt: "#1e242e",
    hover: "#444d56",
  },
  fontColor: {
    body: "#fff",
    tag: "#9AE66E",
    attribute: "#5D8BF4",
    value: "#966C3B",
    symbol: "gray",
    comment: "rgb(255 255 255 / .35)",
    const: "#FF6464",
    var: "#5D8BF4",
    property: "rgb(255 255 255 / .65)",
    obj_value: "#84DFFF",
  },
  border: {
    nav: "rgb(255 255 255 / .25) 1px solid",
    nav_hover: null,
    sidebar: "1px solid rgb(255 255 255 / .2)",
  },
};
//* eva theme

export const evaTheme = {
  bgColor: {
    body: "#f1f1f1",
    main: "#252d33",
    main_alt: "#1f252a",
    hover: "#598DEF64",
  },
  fontColor: {
    body: "#f0f1f0",
    tag: "#ff6464",
    attribute: "#3BACB6",
    value: "#9ae66e",
    symbol: "gray",
    comment: "rgb(255 255 255 / .35)",
    const: "#A85CF9",
    var: "#f8f8f8",
    property: "#ff6464",
    obj_value: "#9ae66e",
  },
  border: {
    nav: "rgb(255 255 255 / .18) 1px solid",
    nav_hover: null,
    sidebar: "1px solid rgb(255 255 255 / .2)",
  },
};

//* darksoft theme

export const darksoftTheme = {
  bgColor: {
    body: "#fff",
    main: "#261C2C",
    main_alt: "#191919",
    hover: "#3f3351c6",
  },
  fontColor: {
    body: "#f0f8f8",
    tag: "#c400c6",
    attribute: "#EDE68A",
    value: "#F9D276",
    symbol: "#827397",
    comment: "#5C527F",
    const: "#C400C6",
    var: "#7A0BC0",
    property: "#F9d276",
    obj_value: "#8799b9",
  },
  border: {
    nav: "1px solid #3F3351",
    nav_hover: "1px dashed #8E05C2",
    sidebar: "1px solid rgb(255 255 255 / .2)",
  },
};

//* keychron theme

export const keychronTheme = {
  bgColor: {
    body: "#444444",
    main: "#73777B",
    main_alt: "#2B2B2B",
    hover: "#515559",
  },
  fontColor: {
    body: "#DBD8E3",
    tag: "#F55353",
    attribute: "gray",
    value: "lightgray",
    symbol: "#73777b",
    comment: "#878d94",
    const: "#FF6B6B",
    var: "#F2F2F2",
    property: "#73777b",
    obj_value: "#EEEEEE",
  },
  border: {
    nav: "1px solid #2b2b2b",
    nav_hover: "1px dashed #F55353",
    sidebar: "1px solid rgb(255 255 255 / .2)",
  },
};

//* light theme

export const lightTheme = {
  bgColor: {
    body: "#444444",
    main: "#F6F6F6",
    main_alt: "#f0f1f7",
    hover: "rgb(0 0 0 / .12)",
  },
  fontColor: {
    body: "#101010",
    tag: "#414141",
    attribute: "gray",
    value: "gray",
    symbol: "#73777b",
    comment: "#00BD56",
    const: "#222831",
    var: "gray",
    property: "#73777b",
    obj_value: "gray",
  },
  border: {
    nav: "1px solid #2b2b2b",
    nav_hover: null,
    sidebar: "1px solid rgb(0 0 0 / .12)",
  },
};
