import Header from '../../Components/Header';
import Showcase from '../../Components/Showcase';
import Title from '../../Components/Title';
import { Container } from '../../styles/global';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title size="big">Nossos Produtos</Title>
        <Showcase />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
