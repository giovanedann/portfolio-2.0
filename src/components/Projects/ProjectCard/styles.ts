import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  overflow: hidden;

  .project-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .project-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .project-name {
      font-size: 18px;
      font-weight: 600;
    }

    .project-description {
      font-size: 12px;
      max-width: 90%;
      text-align: center;
    }

    .project-techs {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      max-width: 95%;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      span {
        padding: 6px;
        font-size: 9px;
        background-color: #2e2e2e;
        color: #fff;
        font-weight: 400;
        border-radius: 6px;
        opacity: 0.8;
        transition: 0.3s ease-in-out;

        &:hover {
          cursor: default;
          transform: translateY(-2px);
        }
      }
    }

    .project-links {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 10px;
        font-weight: 700;
        padding: 7px;
        text-decoration: none;
        border-radius: 5px;
        color: white;
        background-color: ${({ theme }) => theme.colors.purple.main};
        transition: 0.3s ease-in-out;

        .icon {
          background: transparent;
          fill: white;
        }

        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }

  .purple-line {
    width: 90%;
    height: 3px;
    background: ${({ theme }) => theme.colors.purple.main};
    margin-top: 30px;
  }

  @media screen and (min-width: 800px) {
    .info-container {
      .project-name {
        font-size: 25px;
      }

      .project-description {
        font-size: 15px;
      }

      .project-techs {
        span {
          padding: 9px;
          font-size: 13px;
        }
      }

      .project-links {
        a {
          font-size: 13px;
          padding: 10px;
        }
      }
    }

    @media screen and (min-width: 1000px) {
      flex-direction: row;
      padding: 20px;
      width: 900px;
      height: 400px;
      border-radius: 10px;

      .purple-line {
        display: none;
      }

      .project-image {
        width: 500px;
        height: auto;
      }

      .info-container {
        .project-description {
          max-width: 300px;
          font-size: 14px;
        }

        .project-techs {
          max-width: 300px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
