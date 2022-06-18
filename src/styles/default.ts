export interface Themes {
  colors: {
    background: {
      light: string,
      dark: string,
    },
    fontColor: {
      light: string,
      dark: string,
    }
    purple: {
      main: string,
      light: string,
      medium: string,
      dark: string,
    }
  },
}

const defaultTheme =  {
  colors: {
    background: {
      light: '#FFF',
      dark: '#22222B'
    },
    fontColor: {
      light: '#2E2E2E',
      dark: '#FFF'
    },
    purple: {
      main: '#B537F2',
      light: '#CE82F4',
      medium: '#8A2BE2',
      dark: '#120052',
    }
  }
}

export default defaultTheme;