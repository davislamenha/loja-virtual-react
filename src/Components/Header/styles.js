import styled from 'styled-components';
import { Container } from '../../styles/global';

const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.primaryColor};

  h1 {
    color: ${(props) => props.theme.secondaryColor};
  }

  nav {
    ul {
      display: flex;
      gap: 12px;

      li a {
        color: ${(props) => props.theme.secondaryColor};
        transition: color, 0.3s all;

        &:hover {
          color: ${(props) => props.theme.linkHoverColor};
        }
      }
    }
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default HeaderStyle;
