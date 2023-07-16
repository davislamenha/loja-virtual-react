import styled from 'styled-components';
import { Container } from '../../styles/global';

const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: initial;
`;

export default FooterStyle;
