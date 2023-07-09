import HeaderStyle, { HeaderContainer } from './styles';

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
                Carrinho
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
