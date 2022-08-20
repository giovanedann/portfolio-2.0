import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.section)`
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
    background-color: ${({ theme }) => theme.colors.purple.light};
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
`;

export const ContactTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 20px;

  p {
    font-size: 14px;
    width: 80%;

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.purple.light};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.purple.light};
      font-weight: 600;
      transition: 0.3s ease-in-out;
      background: transparent;

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
    background: transparent;

    .social-icon {
      width: 40px;
      height: 40px;
      background: transparent;
      transition: 0.2s ease-in-out !important;
    }

    a {
      color: white;
      text-decoration: none;
      transition: 0.2s ease-in-out !important;
      background: transparent;

      &:hover {
        transform: translateY(-2px);

        .linkedin {
          fill: #0a66c2;
        }

        .github {
          fill: #7b7b7b;
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 5rem;

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
