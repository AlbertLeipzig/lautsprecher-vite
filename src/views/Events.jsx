import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { TitleContext } from '../context/TitleContext.jsx';
import { eventFilter } from '../logic/eventFilter';
import { EventsPagination } from '../components/EventsPagination.jsx';
import { EventCard } from '../components/EventCard.jsx';
import axios from 'axios';
export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const [error, setError] = useState('');
  const [loadingEvents, setLoadingEvents] = useState(true);
  const { events, setEvents } = useContext(DataContext);
  const { title, setTitle } = useContext(TitleContext);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [displayedEvents, setDisplayedEvents] = useState([]);

  setTitle('Veranstaltungen');

  const recoverData = () => {
    axios
      .get('http://localhost:5000/api/v1/events')
      .then((res) => {
        const data = res.data;
        setError(undefined);
        setLoadingEvents(false);
        setEvents(data);
      })
      .catch((e) => {
        setLoadingEvents(false);
        setError(
          `Es tut uns leid, derzeit sind keine Veranstaltung vorhanden. Kommt bitte auf eine späteren Zeitpunkt zurück. Wir freuen uns auf Dich!`
        );
        console.error(e);
      });
  };

  // in case there's no data

  events.length <= 0 && recoverData();

  /* filter events */

  /* displayed events */

  useEffect(() => {
    displayedEvents.length <= 25
      ? setDisplayedEvents(filteredEvents)
      : setDisplayedEvents(filteredEvents.slice(0, 25));
  }, [filteredEvents]);

  useEffect(() => {
    // no filter is defined
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events);
      // date is defined
    } else if (filter.date !== '' && filter.tag === '') {
      setFilteredEvents(eventFilter(events, filter.date));
      // tag is defined
    } else if (filter.date === '' && filter.tag !== '') {
      setFilteredEvents(eventFilter(events, filter.tag));
      // both are defined
    } else {
      setFilteredEvents(events);
    }
  }, [filter, events]);

const firstEvent = events[0];

  return (
    <div className="events">
      {title && <h1>{title}</h1>}
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
      {!events && loadingEvents !== false && (
        <p className="events__loading">Die Events sind gleich da ...</p>
      )}
      {error && (
        <div className="events__error-container">
          <p className="events__error">{error}</p>
          <img
            src="https://images.unsplash.com/photo-1617405207340-954e2e19755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      )}
      <div className="events-container">
        {displayedEvents &&
          Object.values(displayedEvents).map((event) => (
            <EventCard props={event} />
          ))}
      </div>
      <div className="events__pagination">
        {filteredEvents.length > 25 && (
          <EventsPagination props={filteredEvents} />
        )}
      </div>
    </div>
  );
};
