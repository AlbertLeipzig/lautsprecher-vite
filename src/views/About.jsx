import { useContext } from 'react';
import { BsMusicNote } from 'react-icons/bs';
import { TitleContext } from '../context/TitleContext.jsx';
export const About = () => {
  const { title, setTitle } = useContext(TitleContext);
  setTitle('About');
  return (
    <div className="about">
      <h1>{title}</h1>
      <section>
        <h2>Mission</h2>
        <p>Lautsprecher will das Musiklebens der Stadt Leipzig verbessern.</p>
      </section>
      <section>
        <h2>Ziele</h2>
        <ul>
          <li>
            <BsMusicNote className="about__bullet" />
            Dafür wollen wir das Stadtmusikleben, das aus den Musiker alle
            Arten, Herkunft, Glauben, Identität oder Niveau besteht und das
            Publikum, verstärken und ins Licht bringen
          </li>

          <li>
            <BsMusicNote className="about__bullet" />
            Musikveranstaltungen der Stadt bekanntmachen
          </li>
          <li>
            <BsMusicNote className="about__bullet" />
            Stimme alle Musiker, besonders die kein Platform vorhanden haben
          </li>
          <li>
            <BsMusicNote className="about__bullet" />
            Musiker, Publikum und Veranstaltungsorte verbinden
          </li>
        </ul>
      </section>
    </div>
  );
};
