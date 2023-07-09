import styled from 'styled-components';

const ProductListStyles = styled.ul`
  padding: 0 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default ProductListStyles;
