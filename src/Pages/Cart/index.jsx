import Header from '../../Components/Header';
import Title from '../../Components/Title';
import CartComponent from '../../Components/Cart';
import { Container } from '../../styles/global';
import Footer from '../../Components/Footer';

const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <Title fontSize="g">Meu Carrinho</Title>
        <CartComponent />
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
