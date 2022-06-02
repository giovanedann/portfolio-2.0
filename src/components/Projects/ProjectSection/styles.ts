import styled from 'styled-components';
import { mainLightPurple } from '../../../styles/constants';

export const ProjectSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 30px;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .purple-line {
    width: 80%;
    height: 5px;
    border-radius: 10px;
    background-color: ${ mainLightPurple }
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

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1600px) {
    flex-flow: row wrap;
  }
`;
