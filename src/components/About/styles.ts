import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  margin-top: 15rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .line {
    background: ${({ theme }) => theme.colors.purple.light};
    width: 90%;
    height: 4px;
    margin: 4rem 0;
  }

  .description {
    width: 80%;
    margin-bottom: 50px;
  }

  h1 {
    width: fit-content;
    margin-bottom: 20px;
    font-size: 50px;
    min-height: 150px;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-weight: 400;
    margin: 3rem 0;

    a {
      text-decoration: none;
    }

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.purple.light};
    }

    .emoji {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;

    .description {
      width: 70%;

      h1 {
        font-size: 60px;
      }

      h2 {
        font-size: 30px;
      }

      p {
        font-size: 23px;
      }
    }
  }
`;

export const SkillsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  h1 {
    font-size: 40px;
  }

  .line {
    background: ${({ theme }) => theme.colors.purple.light};
    width: 82%;
    height: 4px;
    margin: 4rem 0;
  }

  .skills-container {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    justify-content: center;
  }

  @media screen and (min-width: 600px) {
    .skills-container {
      width: 70%;
    }
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1300px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const SkillContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 120px;
  height: 120px;
  margin: 20px 0;
  background: transparent;
  transition: 0.2s ease-in-out !important;

  .skill-icon {
    width: 40px;
    height: 40px;
    transition: 0s;
    background: transparent;
  }

  p {
    text-align: center;
    max-width: 100px;
  }

  &:hover {
    transform: scale(1.04);

    .skill-icon {
      fill: ${({ color }) => color};
    }

    p {
      color: ${({ color }) => color};
    }
  }

  @media screen and (min-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 150px;
    height: 200px;

    .skill-icon {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1300px) {
    width: 200px;
    height: 250px;

    .skill-icon {
      width: 70px;
      height: 70px;
    }

    p {
      font-size: 18px;
      max-width: 120px;
    }
  }
`;
