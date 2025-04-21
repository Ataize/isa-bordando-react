import "./Header.css";
import logo from "../../assets/logo-1.png";
import { HeaderProps } from "../../types/Product";

function Header({ onSearchChange }: HeaderProps) {
  return (
    <header className="menu">
      <div className="menu__principal">
        <img
          className="menu__logo"
          src={logo}
          alt="Logo da loja Isa Bordando"
        />
        <input
          className="menu__buscar"
          type="text"
          placeholder="Buscar"
          id="filtrar-produto"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <a href="/login">
          <button className="menu__login Botao1" type="button">
            Login
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
