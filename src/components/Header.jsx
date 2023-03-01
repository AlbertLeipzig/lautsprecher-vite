import { useContext } from 'react';
import { HeaderLogoContext } from '../context/HeaderLogoContext';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import logo from '../../public/favicon.jpg';
import { BurgerContext } from '../context/BurgerContext.jsx';
export const Header = () => {
  const { burgerState } = useContext(BurgerContext);
  const { headerLogo } = useContext(HeaderLogoContext);
  return (
    <header>
      <div className="header__logo">
        {headerLogo && (
          <Link to="/">
            <div className="header__main">
              <img src={logo} alt="" className="header__icon" />
              <h2 className="header__title">Lautsprecher</h2>
            </div>
            <p className="header__subtitle">Musik Magazine der Stadt Leipzig</p>
          </Link>
        )}
      </div>

      <Burger />
      <nav className={`header__nav--${burgerState}`}>
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
