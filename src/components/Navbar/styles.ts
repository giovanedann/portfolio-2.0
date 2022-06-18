import styled, { css } from "styled-components";

export const NavbarStyles = styled.nav<{ toggled: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  opacity: 0;
  z-index: 1;
  inset: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translateY(-1000px);
  -webkit-transform: translateY(-1000px);
  opacity: 0;
  transition: 0.5s ease-in-out;

  ${({ toggled }) => toggled && css`
    opacity: 1;
    transform: translateY(0);
  `}

  ul {
    list-style: none;

    li {
      text-align: center;
      margin: 35px 0;

      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        transition: 0.5s ease-in-out;
        scroll-behavior: smooth;

        &:hover {
          color: ${({ theme }) => theme.colors.purple.main };
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    ul li a {
      font-size: 40px;
    }
  }
`;
