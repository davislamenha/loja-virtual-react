import styled from 'styled-components';

const Showcase = styled.ul`
  padding: 0 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 4px;
`;

const ProductDetails = styled.div``;

const ProductPrice = styled.span`
  display: block;
  font-size: 22px;
  margin-bottom: 12px;
`;

const ProductButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.cardBg};
  padding: 8px;
  text-transform: uppercase;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme }) => theme.linkHoverColor};
    color: ${({ theme }) => theme.secondaryColor};
    letter-spacing: 0;
  }
`;

export {
  Showcase,
  Product,
  ProductImage,
  ProductDetails,
  ProductPrice,
  ProductButton,
};
