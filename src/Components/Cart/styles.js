import styled from 'styled-components';

const Cart = styled.div`
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    padding-bottom: 20px;
  }
`;

const Product = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  display: grid;
  grid-template-columns: 250px 4fr auto;
  align-items: center;
  gap: 1rem;
  padding: 12px 0;
  border-top: ${({ theme }) => theme.primaryColor} solid 1px;
  transition: heigth, 0.5s ease;

  @media (max-width: 767px) {
    grid-template-columns: 250px 4fr;
  }

  @media (max-width: 560px) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ProductDetails = styled.div`
  align-self: start;
`;

const ProductForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  .price {
    padding: 0 12px;
    display: block;
    font-size: 20px;
  }

  .quantity {
    padding: 0 12px;
    input {
      border: ${({ theme }) => theme.primaryColor} solid 1px;
      border-radius: 4px;
      width: 50px;
      padding: 8px;
      font-size: 16px;
      text-align: center;
      transition: 0.3s all;

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.secondaryColor};
      }
    }
  }

  .actions {
    button {
      cursor: pointer;
      background-color: transparent;
      color: ${({ theme }) => theme.primaryColor};
      transition: 0.3s all;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 767px) {
    .price,
    .quantity,
    .actions button {
      padding: 0;
    }
  }
`;

const Total = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  .basket {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 28px;
  }
  .display {
    font-size: 28px;
  }

  @media (max-width: 560px) {
    padding: 8px;
    justify-content: space-between;
    .display,
    .basket {
      font-size: 24px;
    }
  }
`;

export { Cart, Product, ProductDetails, ProductForm, ProductImage, Total };
