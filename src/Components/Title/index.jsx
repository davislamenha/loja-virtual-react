import PropTypes from 'prop-types';
import TitleStyles from './styles';

const Title = ({ children, fontSize }) => {
  return <TitleStyles fontSize={fontSize}>{children}</TitleStyles>;
};

Title.propTypes = {
  fontSize: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
