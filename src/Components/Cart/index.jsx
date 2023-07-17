import CartStyles, { ProductStyles, Total } from './styles';
import { Trash } from '@phosphor-icons/react';
import livro_1 from '../../assets/livro_1.jpg';
import livro_2 from '../../assets/livro_2.jpg';
import {
  calculateTotal,
  getProductsInLocalStorage,
  setProductsInLocalStorage,
} from '../../services/Cart';
import { useEffect, useState } from 'react';
import Title from '../Title';

const CartComponent = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = getProductsInLocalStorage();

    setCart(cart);
  }, []);

  useEffect(() => {
    const total = calculateTotal(cart);
    setTotal(total);
  }, [cart]);

  const updateQuantity = (id, newQty) => {
    if (newQty) {
      const newCart = cart.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: newQty };
        }
        return p;
      });
      setCart(newCart);
      setProductsInLocalStorage(newCart);
    }
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
    setProductsInLocalStorage(newCart);
  };

  return (
    <CartStyles>
      {cart
        ? cart.map((product) => {
            const { id, name, description, price, quantity } = product;

            return (
              <ProductStyles key={id} id={id}>
                <img
                  src={id % 2 === 0 ? livro_2 : livro_1}
                  alt={`Livro ${name}`}
                />
                <div className="details">
                  <Title>{name}</Title>
                  <p>{description}</p>
                </div>
                <form className="product_form">
                  <div className="price">
                    <span>R$ {price}</span>
                  </div>
                  <div className="quantity">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        updateQuantity(id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <div className="actions">
                    <button onClick={() => removeProduct(id)}>
                      <Trash size={32} />
                    </button>
                  </div>
                </form>
              </ProductStyles>
            );
          })
        : 'Nenhum produto foi adicionado ao carrinho.'}
      <Total>
        <span className="text">Total:</span>
        <span className="display">R$ {total}</span>
      </Total>
    </CartStyles>
  );
};

export default CartComponent;
