import { Link } from 'react-router-dom';
import logo from '../../public/favicon.jpg';
import { useContext } from 'react';
export const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <Link to="/">
          <div className="header__main">
            <img src={logo} alt="" className="header__icon" />
            <h2 className="header__title">Lautsprecher</h2>
          </div>
          <p className="header__subtitle">Musik Magazine der Stadt Leipzig</p>
        </Link>
      </div>
      <div className="burger-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav className="header__nav">
        <Link to="/events" className="header-nav__link">
          Veranstaltungen
        </Link>
        <Link to="/about" className="header-nav__link">
          About
        </Link>
        <Link to="/contact" className="header-nav__link">
          Kontakt
        </Link>
      </nav>
    </header>
  );
};
