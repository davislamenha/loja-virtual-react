import styled from 'styled-components';
import { Container } from '../../styles/global';

const Footer = styled.footer`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px 0;
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: initial;
  text-align: center;
`;

export { Footer, FooterContainer };
