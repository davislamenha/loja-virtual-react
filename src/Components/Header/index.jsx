import HeaderStyle, { HeaderContainer } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a className="cart" href="#">
                <ShoppingCart size={28} />
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
