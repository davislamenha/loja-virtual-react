import Header from '../../Components/Header';
import ProductsList from '../../Components/ProductsList';
import Title from '../../Components/Title';
import { Container } from '../../styles/global';
import Products from '../../Components/Products';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title fontSize="g">Nossos Produtos</Title>
        <ProductsList>
          <Products />
        </ProductsList>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
