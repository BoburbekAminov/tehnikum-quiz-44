import { createContext } from "react";

export const themes = {
  light: "light",
  dark: "dark",
};

const initialState = {
  theme: themes.light,
  toggleThemes: () => {},
};

export const ThemeContext = createContext(initialState);
