import styled from "styled-components"
import { mainBackgroundColor } from '../../styles/constants';

interface Props {
  toggled: boolean
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${mainBackgroundColor};
  width: 100%;
  position: fixed;
  z-index: 2;

  .burger-icon {
    transition: 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      fill: #999E9C;
    }
  }
`

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
  }
`;

export const HeaderText = styled.p<Props>`
  font-size: 15px;
  margin-top: 12px;
`;
