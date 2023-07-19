import * as S from './styles';
import products from '../../services/products';
import Title from '../Title';
import livro_1 from '../../assets/livro_1.jpg';
import livro_2 from '../../assets/livro_2.jpg';
import { addProduct } from '../../services/Cart';

const Showcase = () => {
  return (
    <S.Showcase>
      {products.map((product) => {
        const { id, name, description, price } = product;
        return (
          <S.Product key={id}>
            <S.ProductImage
              src={id % 2 === 0 ? livro_2 : livro_1}
              alt={`Livro ${name}`}
            />
            <S.ProductDetails>
              <Title>{name}</Title>
              <p>{description}</p>
            </S.ProductDetails>
            <S.ProductPrice>R$ {price}</S.ProductPrice>
            <S.ProductButton onClick={() => addProduct(product)}>
              Adicionar Ao Carrinho
            </S.ProductButton>
          </S.Product>
        );
      })}
    </S.Showcase>
  );
};

export default Showcase;
