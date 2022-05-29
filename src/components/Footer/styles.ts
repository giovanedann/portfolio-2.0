import styled from 'styled-components';

export const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .gray-line {
    width: 100%;
    height: 2px;
    background: #86859A;
  }

  p {
    font-size: 12px;
    margin-bottom: 20px;
    color: #86859A;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    p {
      font-size: 15px;
    }    
  }

  @media screen and (min-width: 1200px) {
    p {
      font-size: 17px;
    }    
  }
`
