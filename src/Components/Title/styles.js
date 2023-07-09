import styled from 'styled-components';

const TitleStyles = styled.h2`
  color: ${({ theme }) => theme.secondaryColor};
  text-align: ${({ fontSize }) => (fontSize === 'g' ? 'center' : 'left')};
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case 'g':
        return (fontSize = '48px');

      case 'm':
        return (fontSize = '32px');

      case 'p':
        return (fontSize = '20px');
    }
  }};
`;

export default TitleStyles;
