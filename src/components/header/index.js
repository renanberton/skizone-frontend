import './style.scss';
import Skins from '../../pages/skins';
import Home from '../../pages/home';

function Header() {
    return (
        <header>
        <div className="logo">
          <img src='assets/images/logos/cs-go-logo.png' alt="" />
        </div>
        <nav>
          <ul>
            <a href='/'>
              <li>HOME</li>
            </a>
            <a href='/skins'>
              <li>SKINS</li>
            </a>
            <a href='/contato'>
              <li>CONTATO</li>
            </a>
            {/* <a href="">
              <li>CONTATO</li>
            </a> */}
          </ul>
        </nav>
        <div className="box-cart">
          <a href='/conta'>MINHA CONTA</a>
          <a href='/carrinho'>CARRINHO DE COMPRAS</a>
        </div>
      </header>
    )

}

export default Header;