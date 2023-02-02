import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const LandingPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/events')
      .then((res) => {
        const data = res.data;
        setEvents(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div className="landing-page">
      <div className="landing-page__hero">
        <h1>Lautsprecher</h1>
      </div>
      <menu>
        <li>
          <Link to="/events">
            <div className="landing-page__container1">
              Veranstaltungskalender
            </div>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <div className="landing-page__container2">Was ist Lautsprecher</div>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <div className="landing-page__container3">Projekte</div>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <div className="landing-page__container4">Mitmachen</div>
          </Link>
        </li>
      </menu>
    </div>
  );
};
