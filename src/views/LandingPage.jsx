import { Link } from 'react-router-dom';

export const LandingPage = () => {
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
