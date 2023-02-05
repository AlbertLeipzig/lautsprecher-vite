import { Link } from 'react-router-dom';
export const Faq = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <section>
        <h2>Was ist lautsprecher?</h2>
        <p>
          Lautsprecher ist eine Musik Web Magazine Leipzig. Unseres Ziel ist das
          Musikleben der Stadt bekannt zu machen und zu verstärken.{' '}
          <a href="/about">Mehr dazu</a>{' '}
        </p>
      </section>
      <section>
        <h2>Kann ich bei Lautsprecher Karten bestellen?</h2>
        <p>
          Nein.{' '}
          <span className="mark">
            Lautsprecher will nur über Musikveranstaltugen informieren und auf
            keinen Fall sich als Online-Ticket Service vorstellen
          </span>
          . Dafür kann man die Musiker, Bands, Veranstaltungsorte,
          Veranstaltergibt's, sowie Portalen die schon in diesem Bereich tätig
          sind
        </p>
      </section>
      <section>
        <h2>Ist Lautsprecher kostenlos?</h2>
        <p>
          Ja,{' '}
          <span className="mark">
            Lautsprecher ist ein kostenloses Service, und es wird immer
            kostenlos bleiben
          </span>
        </p>
      </section>
      <section>
        <h2>Was kann ich in Lautsprecher finden?</h2>
        <p>
          Momentan kann man Musikveranstaltungen alle Arten finden. Wir machen
          keinen Unterschied zwischen einem symphonischen Konzert oder einem
          alternativen Performance und wir freuen uns auf und über jedes Aspekt
          des Stadtmusiklebens. Allerdings sind auch Artikeln, Musik-Boards uvm
          geplannt, so bleib im Kontakt!
        </p>
      </section>
      <section>
        <span className="mark"></span>

        <h2>Kann ich hier meine Veranstaltung posten?</h2>
        <p>
          Auf jeden Fall! Egal was Du machst, wenn es mit Musik zu tun hat,
          interessier uns. Bitte,{' '}
          <Link to={'/contact'}>
            schick uns die Info, und wir werden gerne die teilen
          </Link>
        </p>
      </section>
      <section>
        <h2>Die Information über eine Veranstaltung stimmt nicht</h2>
        <p>
          In Lautsprecher geben wir uns mühe, Euch die beste, aktuellteste und
          akurateste Information zu geben, und hoffen, dass es klappen wird. Wir
          sind aber selber nicht die Veranstalter, die auf den oder den Grund
          last-minute Änderungen haben dürften. Deswegen empfehlen wir immer{' '}
          <span className="mark">
            die Information in Lautsprecher mit dem Veranstalter zu vergleichen.
            Die haben immer das letzte Wort!!.{' '}
          </span>{' '}
          Darüber hinaus übernimmt{' '}
          <span className="mark">
            Lautsprecher keine Hafftung für die Richtigkeit der Informationen,
            die auf der Website angezeigt werden.
          </span>{' '}
        </p>
      </section>
      <section>
        <h2>Kann ich bei Lautsprecher mitmachen?</h2>
        <p>
          Na klar, sehr gerne!{' '}
          <Link to={"/contact"}>Schreib einfach uns und wir werden Dich kontaktieren!</Link>
        </p>
      </section>
    </div>
  );
};
