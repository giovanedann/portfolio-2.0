import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  toggled: boolean;
  selectedTheme?: string;
}

export const HeaderContainer = styled(motion.header)<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  z-index: 2;

  .burger-icon {
    &:hover {
      cursor: pointer;
      fill: #999e9c;
    }
  }

  .theme-icon {
    background: transparent;
    position: fixed;
    right: 100px;

    &:hover {
      cursor: pointer;
    }
  }
`;

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
