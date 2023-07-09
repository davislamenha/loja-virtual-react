import ShowcaseStyles, { ProductStyles } from './styles';

import products from '../../services/products';
import Title from '../Title';
import livro_1 from '../../assets/livro_1.jpg';
import livro_2 from '../../assets/livro_2.jpg';
import { addProduct } from '../../services/Cart';

const Showcase = () => {
  return (
    <ShowcaseStyles>
      {products.map((product) => {
        const { id, name, description, price } = product;
        return (
          <ProductStyles key={id}>
            <img src={id % 2 === 0 ? livro_2 : livro_1} alt={`Livro ${name}`} />
            <div className="details">
              <Title fontSize="p">{name}</Title>
              <p>{description}</p>
            </div>
            <span className="price">R$ {price}</span>
            <button onClick={() => addProduct(product)} className="addbtn">
              Adicionar Ao Carrinho
            </button>
          </ProductStyles>
        );
      })}
    </ShowcaseStyles>
  );
};

export default Showcase;
