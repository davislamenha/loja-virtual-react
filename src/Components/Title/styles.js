import styled from 'styled-components';

const TitleH2 = styled.h2`
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  font-size: 48px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const TitleH3 = styled.h3`
  color: ${({ theme }) => theme.secondaryColor};
  text-align: left;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export { TitleH2, TitleH3 };
