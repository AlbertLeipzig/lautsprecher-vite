import { Link } from 'react-router-dom';
import { BsInstagram, BsMailbox } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
export const Footer = () => {
  return (
    <footer>
      <menu>
        <Link to="/faq"> FAQ </Link>
        <Link to="/events"> Veranstaltungen </Link>
        <Link to="/about"> About </Link>
      </menu>
      <div className="footer__contact">
        <Link to="/contact"> Kontakt </Link>
        <a href="https://instagram.com/lautsprecher_leipzig" target={'_blank'}>
          <BsInstagram />
        </a>
        <a href="https://github.com/AlbertLeipzig" target={'_blank'}>
          by @albertLeipzig
        </a>
      </div>
    </footer>
  );
};
