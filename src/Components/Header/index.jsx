import HeaderStyle, { HeaderContainer } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/carrinho" className="cart" href="#">
                <ShoppingCart size={28} />
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
