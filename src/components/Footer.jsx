import { BsInstagram } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
export const Footer = () => {
  return (
    <footer>
      <div className="footer__by">
        <p>Created by </p>
        <a href="https://twitter.com/albert__loewe" target={'_blank'}>
          @albertLeipzig
        </a>
      </div>
      <div className="social-container">
        <a href="https://instagram.com" target={'_blank'}>
          <BsInstagram />
        </a>
        <button>

        </button>
      </div>
    </footer>
  );
};
