import { Link } from 'react-router-dom';
export const Collaborate = () => {
  return (
    <div className="collaborate">
      <h1>Collaborate</h1>
      <ul className="collaborate__content">
        <li className="collaborate__item1">
          Hast Du ein Projekt, davon mehr Menschen erfahren sollten?
        </li>
        <li className="collaborate__item2">
          Bist Du Musiker oder Veranstalter, hast Du ein Band, ein Projekt oder
          ein Geschäft?
        </li>
        <li className="collaborate__item3">
          Oder willst du bei der Herstellung dieses Magazines mitmachen?
        </li>
        <li className="collaborate__item4">
          Nutzt bitte den <Link>Kontaktformular</Link> oder schreib eine E-Mail
          auf <a href="mailto:...@...com">...@...com</a>
        </li>
        <li className="collaborate__item5">
          Wir freuen uns auf jede von Euch!
        </li>
      </ul>
    </div>
  );
};
