import { Header, About, ProjectSection, Contact, Footer } from '../'
import { GlobalStyles } from '../../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import defaultThemes from '../../styles/default';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyles selectedTheme={theme}/>
      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
