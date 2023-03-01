import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import axios from 'axios';
import { HeaderLogoContext } from '../context/HeaderLogoContext';


export const LandingPage = () => {
  const { setHeaderLogo } = useContext(HeaderLogoContext);
  const {
    events,
    setEvents,
    musicians,
    setMusicians,
    bands,
    setBands,
    venues,
    setVenues,
    organizers,
    setOrganizers,
  } = useContext(DataContext);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `https://tame-blue-cuff.cyclic.app/api/v1/events`
      );
      const data = res.data;
      console.log(data)
      setEvents(data);
      console.log('EVENTS', events);
    } catch (e) {
      console.error(e);
    }
  };

  const getMusicians = async () => {
    try {
      const res = await axios.get(
        'https://tame-blue-cuff.cyclic.app/api/v1/musicians'
      );
      const data = res.data;
      setMusicians(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getBands = async () => {
    try {
      const res = await axios.get(
        'https://tame-blue-cuff.cyclic.app/api/v1/bands'
      );
      const data = res.data;
      setBands(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getOrganizers = async () => {
    try {
      const res = await axios.get(
        'https://tame-blue-cuff.cyclic.app/api/v1/organizers'
      );
      const data = res.data;
      setOrganizers(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getVenues = async () => {
    try {
      const res = await axios.get(
        'https://tame-blue-cuff.cyclic.app/api/v1/venues'
      );
      const data = res.data;
      setVenues(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setHeaderLogo(false);
    getEvents();
    getVenues();
    getMusicians();
    getBands();
    getOrganizers();
  }, []);

  return (
    <div className="landing-page">
      <div className="landing-page__hero">
        <h1>Lautsprecher</h1>
      </div>
      <menu>
        <li>
          <Link to="/events">
            <div className="landing-page__container1">Veranstaltungen</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className="landing-page__container2">Was ist Lautsprecher</div>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <div className="landing-page__container3">Projekte</div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <div className="landing-page__container4">Mitmachen</div>
          </Link>
        </li>
      </menu>
    </div>
  );
};
