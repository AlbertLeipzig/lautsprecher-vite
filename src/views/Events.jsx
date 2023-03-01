import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { TitleContext } from '../context/TitleContext.jsx';
import { HeaderLogoContext } from '../context/HeaderLogoContext.jsx';
import { EventCard } from '../components/EventCard.jsx';
import axios from 'axios';
import { filteredByDate } from '../logic/filteredByDate.js';
import { filteredByTag } from '../logic/filteredByTag.js';
import { filteredByTagAndDate } from '../logic/filteredByTagAndDate.js';

export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const [error, setError] = useState(undefined);
  const { events, setEvents } = useContext(DataContext);
  const { title, setTitle } = useContext(TitleContext);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const { setHeaderLogo } = useContext(HeaderLogoContext);


  const recoverData = async () => {
    try {
      const res = await axios.get(
        `https://tame-blue-cuff.cyclic.app/api/v1/events`
      );
      const data = res.data;
      setEvents(data);
    } catch (e) {
      setError(
        'Es tut uns leid, derzeit sind keine Veranstaltung vorhanden. Kommt bitte auf eine späteren Zeitpunkt zurück. Wir freuen uns auf Dich!'
      );
      console.error(e);
    }
  };

  const filterData = (events, filter) => {
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events);
    } else if (filter.date !== '' && filter.tag === '') {
      setFilteredEvents(filteredByDate(events, filter.date));
    } else if (filter.date === '' && filter.tag !== '') {
      setFilteredEvents(filteredByTag(events, filter.tag));
    } else if (filter.date !== '' && filter.tag !== '') {
      setFilteredEvents(filteredByTagAndDate(events, filter.tag, filter.date));
    } else {
      setFilteredEvents(events);
    }
  };

  useEffect(() => {
    setHeaderLogo(true);
    setTitle('Veranstaltungen');
    const rawEvents = events.length <= 0 ? recoverData() : events;
    filterData(rawEvents, filter);
  }, [filter, events]);


  return (
    <div className="events">
      {title && <h1>{title}</h1>}
      {error && (
        <div className="events__error-container">
          <p className="events__error">{error}</p>
          <img
            src="https://images.unsplash.com/photo-1617405207340-954e2e19755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      )}
      {events && (
        <div className="event__filter-container">
          <label className="event__filter">
            <input
              type="text"
              placeholder="event..."
              onChange={(e) => {
                setFilter({ tag: e.target.value, date: filter.date });
              }}
            />
          </label>
          <label htmlFor="" className="event__filter">
            <input
              type="date"
              onChange={(e) =>
                setFilter({ date: e.target.value, tag: filter.tag })
              }
            />
          </label>
        </div>
      )}

      <div className="events-container">
        {filteredEvents &&
          Object.values(filteredEvents).map((event) => (
            <EventCard props={event} />
          ))}
      </div>
    </div>
  );
};
