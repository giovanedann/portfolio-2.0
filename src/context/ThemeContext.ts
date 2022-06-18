import { createContext } from "react";

interface ThemeContext {
  theme: string
  handleToggleTheme: () => void
}

export default createContext<ThemeContext>({} as ThemeContext)
