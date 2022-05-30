import styled from 'styled-components';
import { mainLightPurple } from '../../styles/constants';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 12rem;

  h1 {
    font-size: 40px;
  }

  .purple-line {
    width: 80%;
    height: 5px;
    background-color: ${mainLightPurple};
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 60px;
    }
  }
` 

export const ContactTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    font-size: 14px;
    width: 80%;

    span {
      font-weight: 600;
      color: ${mainLightPurple};
    }

    a {
      text-decoration: none;
      color: ${mainLightPurple};
      font-weight: 600;
      transition: 0.3s ease-in-out;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .social-icons-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 40px;
    margin-top: 10px;
    margin-bottom: 50px;

    .social-icon {
      width: 40px;
      height: 40px;
    }

    a {
      color: white;
      text-decoration: none;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateY(-2px);
        color: ${mainLightPurple};
      }
    }
  }

  @media screen and (min-width: 800px) {
    p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    .social-icons-container {
      margin-top: 6rem;

      .social-icon {
        width: 60px;
        height: 60px;
      }
    }

    p {
      font-size: 20px;
      width: 100%;
    }

    h1 {
      font-size: 60px;
    }
  }
`;