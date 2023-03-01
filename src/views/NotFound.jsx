import { useContext, useEffect } from 'react';
import { HeaderLogoContext } from '../context/HeaderLogoContext';
import favicon from '../../public/favicon.jpg';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  const uri = window.location.href;
  const formattedUri = uri.slice(7, uri.length - 1);

  useEffect(() => {
    setHeaderLogo(true);
  });

  return (
    <div>
      <h1>404</h1>
      <div className="not-found__container">
        <p>
          Die Seite <span className="not-found__uri">{formattedUri}</span> ist
          leider derzeit nicht verfügbar
        </p>
        <p>Bitte, versuch es an einem späteren Zeitpunkt</p>
        <p>
          Wenn es um ein Fehler geht,{' '}
          <Link to={'/contact'}>informier uns bitte darüber</Link>
        </p>
        {/* <img src={favicon} alt="" /> */}
        <img
          src={
            'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBzdGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }
          alt=""
        />
      </div>
    </div>
  );
};
