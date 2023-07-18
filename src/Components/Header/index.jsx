import * as S from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo>MyShop</S.Logo>
        <nav>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">Início</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/carrinho" className="cart" href="#">
                <ShoppingCart size={28} />
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </nav>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
