import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    padding-bottom: 20px;
  }
`;

export const ProductStyles = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  display: grid;
  grid-template-columns: 250px 4fr auto;
  align-items: center;
  gap: 1rem;
  padding: 12px 0;
  border-top: ${({ theme }) => theme.primaryColor} solid 1px;
  transition: heigth, 0.5s ease;

  img {
    display: block;
    max-width: 100%;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .product_form {
    display: flex;
    align-items: center;
    margin: auto;
  }

  .details {
    align-self: start;
  }

  .price {
    padding: 0 12px;
    display: block;
    font-size: 18px;
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
    grid-template-columns: 250px 4fr;
  }

  @media (max-width: 560px) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

    .product_form {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const Total = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
  padding: 12px 0;
  text-align: right;

  .text {
    font-size: 20px;
    font-weight: bold;
  }
  .display {
    margin-top: 4px;
    display: block;
    font-size: 32px;
    font-weight: bold;
  }

  @media (max-width: 560px) {
    padding: 0;
    .text {
      font-size: 16px;
    }
    .display {
      font-size: 24px;
    }
  }
`;

export default CartStyles;
