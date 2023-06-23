import styled from 'styled-components';
import { Container } from '../../styles/global';

const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.corPrincipal};

  h1 {
    color: ${(props) => props.theme.corSecondary};
  }

  nav {
    ul {
      display: flex;
      gap: 12px;

      li a {
        color: ${(props) => props.theme.corSecondary};
        transition: color, 0.3s all;

        &:hover {
          color: ${(props) => props.theme.corLinkHover};
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
