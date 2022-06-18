import { useState, useContext } from 'react';
import { FaCode } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HeaderContainer, HeaderText, NameDiv } from './styles';
import Navbar from '../Navbar';
import ThemeContext from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const toggleMenu = () => setToggleLinks(!toggleLinks);

  const { theme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <HeaderContainer id="Home" toggled={ toggleLinks }>

        <NameDiv>
          <FaCode size={ 30 } />
          <HeaderText toggled={ toggleLinks }>Giovane Saes</HeaderText>
        </NameDiv>

        {
          theme === 'light'
            && <FiSun className="theme-icon" size={ 30 } onClick={handleToggleTheme} color="white"/>
        }
        {
          theme === 'dark'
            && <FiMoon className="theme-icon" size={ 30 } onClick={handleToggleTheme} color="white"/>
        }

        { !toggleLinks 
        && (
        <AiOutlineMenu
          size={ 40 }
          className="burger-icon"
          onClick={ toggleMenu }
        />) }

        { toggleLinks 
        && (
        <AiOutlineClose
          size={ 40 }
          className="burger-icon"
          onClick={ toggleMenu }
        />) }

      </HeaderContainer>

      <Navbar toggled={ toggleLinks } onLinkClick = { toggleMenu }/>
    </>
  )
}

export default Header;