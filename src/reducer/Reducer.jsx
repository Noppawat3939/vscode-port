import {
  darkcontrastTheme,
  darksoftTheme,
  evaTheme,
  githubTheme,
  keychronTheme,
  lightTheme,
  vscodeTheme,
} from "../styles/global/AppGlobalStyled";

export const reducer = (state, action) => {
  switch (action.type) {
    case "VSCODE":
      return { theme: vscodeTheme };
    case "CONTRAST":
      return { theme: darkcontrastTheme };
    case "GITHUB":
      return { theme: githubTheme };
    case "EVA":
      return { theme: evaTheme };
    case "DARKSOFT":
      return { theme: darksoftTheme };
    case "KEYCHRON":
      return { theme: keychronTheme };
    case "LIGHT":
      return { theme: lightTheme };

    default:
      state.theme;
  }
};
