import styled from 'styled-components';
import { Container } from '../../styles/global';

const Header = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MenuItem = styled.li`
  a {
    color: ${(props) => props.theme.secondaryColor};
    transition: color, 0.3s all;

    &:hover {
      color: ${(props) => props.theme.linkHoverColor};
    }
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: initial;
`;

export { HeaderContainer, Header, Logo, MenuList, MenuItem };
