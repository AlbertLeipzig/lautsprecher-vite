import { useContext, useEffect } from 'react';
import { BsMusicNote } from 'react-icons/bs';
import { HeaderLogoContext } from '../context/HeaderLogoContext.jsx';
import { TitleContext } from '../context/TitleContext.jsx';
export const About = () => {
  const {setHeaderLogo} = useContext(HeaderLogoContext);
  const { title, setTitle } = useContext(TitleContext);
  useEffect(() => {
    setHeaderLogo(true)
    setTitle('About');
  });
  return (
    <div className="about">
      <h1>{title}</h1>
      <section>
        <h2>Mission</h2>
        <p className="about__mission">
          Lautsprecher will das Musiklebens der Stadt Leipzig verbessern.
        </p>
      </section>
      <section>
        <h2>Ziele</h2>
        <ul>
          <li>
            <p>
              Dafür wollen wir das Stadtmusikleben, das aus den Musiker alle
              Arten, Herkunft, Glauben, Identität oder Niveau besteht und das
              Publikum, verstärken und ins Licht bringen
            </p>
          </li>
          <li>
            <p>Musikveranstaltungen der Stadt bekanntmachen</p>
          </li>
          <li>
            <p>
              Stimme alle Musiker, besonders die kein Platform vorhanden haben
            </p>
          </li>
          <li>
            <p>Musiker, Publikum und Veranstaltungsorte verbinden</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
