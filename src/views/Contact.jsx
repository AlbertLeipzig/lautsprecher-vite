import { useContext } from 'react';
import { TitleContext } from '../context/TitleContext.jsx';
export const Contact = () => {
  const { title, setTitle } = useContext(TitleContext);
  setTitle('Kontakt');
  return (
    <div className="contact">
      <h1>{title}</h1>
      <form action="">
        <label htmlFor="name">
          Vorname *
          <input type="text" id="fname" required maxLength={20} />
        </label>
        <label htmlFor="name">
          Nachname *
          <input type="text" id="lname" required maxLength={20} />
        </label>
        <label htmlFor="name">
          Email *
          <input type="email" id="email" required maxLength={20} />
        </label>
        <label htmlFor="message">
          Nachricht
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            maxLength={1000}
            required
          ></textarea>
        </label>
        <button type="submit">Senden</button>
      </form>
      <p>* erförderliche Felder</p>
      <p>
        Oder schreib Uns eine E-Mail auf{' '}
        <a href="mailto:mail@mail.com">mail@mail.com</a>
      </p>
    </div>
  );
};
