import { css, createGlobalStyle } from "styled-components";

interface Props {
  selectedTheme: string;
}

export const GlobalStyles = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: 0.5s ease-in-out;
    overflow-x: hidden;
  }
  
  *, input, button, a {
    font-family: 'poppins', sans-serif;
    ${({ selectedTheme }) =>
      selectedTheme === "dark"
        ? css`
            background-color: ${({ theme }) => theme.colors.background.dark};
            color: ${({ theme }) => theme.colors.fontColor.dark};
          `
        : css`
            background-color: ${({ theme }) => theme.colors.background.light};
            color: ${({ theme }) => theme.colors.fontColor.light};
          `}
  }

  body {
    scrollbar-color: ${({ theme }) => theme.colors.purple.light};
    scrollbar-width: 5px;
    
    ${({ selectedTheme }) =>
      selectedTheme === "dark"
        ? css`
            background-color: ${({ theme }) => theme.colors.background.dark};
            color: ${({ theme }) => theme.colors.fontColor.dark};
          `
        : css`
            background-color: ${({ theme }) => theme.colors.background.light};
            color: ${({ theme }) => theme.colors.fontColor.light};
          `}
  }

  body::-webkit-scrollbar {
    width: 10px;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.purple.light};
    border-radius: 2px;
  }
`;
