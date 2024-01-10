import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ThemeContext, themes } from "./themeContexts";

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"));

    if (persistedTheme) {
      setThemeValue(persistedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeValue((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  }, []);
  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
    };
  }, [themeValue, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
