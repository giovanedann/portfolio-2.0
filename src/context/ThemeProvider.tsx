import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
