import { createGlobalStyle } from "styled-components";
import { mainBackgroundColor, fontFamily, mainLightPurple } from './constants';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, input, button {
    font-family: ${fontFamily};
  }

  body {
    background-color: ${mainBackgroundColor};
    color: #fff;
    scrollbar-width: 5px;
    scrollbar-color: ${mainLightPurple}
  }

  body::-webkit-scrollbar {
    width: 5px;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${mainLightPurple};
    border-radius: 2px;
  }
`;
