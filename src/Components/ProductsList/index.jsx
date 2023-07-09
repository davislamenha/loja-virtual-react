import ProductListStyles from './styles';
import PropTypes from 'prop-types';

const ProductList = ({ children }) => {
  return <ProductListStyles>{children}</ProductListStyles>;
};

ProductList.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProductList;
