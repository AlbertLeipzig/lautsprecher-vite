import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { getEvents, getVenues } from '../logic/fetchData.js';
import { HeaderLogoContext } from '../context/HeaderLogoContext';

export const LandingPage = () => {
  const { setHeaderLogo } = useContext(HeaderLogoContext);

  return (
    <div className="landing-page">
      <div className="landing-page__hero">
        <h1>Lautsprecher</h1>
      </div>
      <menu>
        <li>
          <Link to="/events">
            <div className="landing-page__container1">
              <p> Veranstaltungen</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className="landing-page__container2">
              <p>Was ist Lautsprecher</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <div className="landing-page__container3">
              <p>Projekte</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <div className="landing-page__container4">
              <p>Mitmachen</p>
            </div>
          </Link>
        </li>
      </menu>
    </div>
  );
};
