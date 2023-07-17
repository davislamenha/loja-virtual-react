import PropTypes from 'prop-types';
import { TitleH2, TitleH3 } from './styles';

const Title = ({ children, size }) => {
  return size === 'big' ? (
    <TitleH2>{children}</TitleH2>
  ) : (
    <TitleH3>{children}</TitleH3>
  );
};

Title.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
