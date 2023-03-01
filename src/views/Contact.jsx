import { useContext, useState, useEffect } from 'react';
import axios from "axios"
import { TitleContext } from '../context/TitleContext.jsx';
import { HeaderLogoContext } from '../context/HeaderLogoContext.jsx';

export const Contact = () => {
  const { title, setTitle } = useContext(TitleContext);
  const { headerLogo, setHeaderLogo } = useContext(HeaderLogoContext);
  const [contactData, setContactData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: '',
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/api/v1/contact", contactData)

    if(response.status === 200){
      console.log("Message sent")
    } else {
      console.log("Message not sent")
    }
  }
    catch(err){
      console.error(err)
    }
  };

  useEffect(() => {
    setHeaderLogo(true)
    setTitle('Kontakt')
  })

  return (
    <div className="contact">
      <h1>{title}</h1>
      <form onSubmit={handleSubmitForm}>
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
        <a href="mailto:lautsprecherleipzig@gmail.com">
          lautsprecherleipzig@gmail.com
        </a>
      </p>
    </div>
  );
};
