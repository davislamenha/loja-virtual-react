import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  html, body {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
text-decoration: none;
  }
`;

export default ResetStyles;
