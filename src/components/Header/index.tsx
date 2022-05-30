import { useState } from 'react';
import { FaCode } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HeaderContainer, HeaderText, NameDiv } from './styles';
import Navbar from '../Navbar';

const Header: React.FC = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  const toggleMenu = () => setToggleLinks(!toggleLinks);

  return (
    <>
      <HeaderContainer id="Home" toggled={ toggleLinks }>

        <NameDiv>
          <FaCode size={ 30 } />
          <HeaderText toggled={ toggleLinks }>Giovane Saes</HeaderText>
        </NameDiv>

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