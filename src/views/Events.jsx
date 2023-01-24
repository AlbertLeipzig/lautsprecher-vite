import { useEffect, useState, useContext } from 'react';
import { eventFilter } from '../logic/eventFilter';
import { DataContext } from '../context/DataContext';
import { EventCard } from '../components/EventCard';
import axios from 'axios';
export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const [name, setName] = useState('asdfasdf');

  /* fetch data from api */

  const dataFetch = async () => {
    try {
      const res = await axios('http://localhost:5000/api/v1/events');
      const data = await res.data;
      /* setName(events[0].name); */
      setEvents(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  /* filter events */

  useEffect(() => {
    if (filter.date === '' && filter.tag === '') {
      setFilteredEvents(events.data);
    } else if (filter.date || filter.tag) {
      setFilteredEvents(eventFilter(events, filter));
    } else {
      setFilteredEvents(events.data);
    }
  }, [filter, events]);

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>
      {events === undefined && (
        <div className="events__nodb">
          <img
            src="https://images.unsplash.com/photo-1617405207340-954e2e19755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <h2 className="events__crash">
            Uns tut es Leid, derzeit ist keine Veranstaltung vorhanden. Kommt
            bitte auf eine späteren Zeitpunkt zurück. Wir freuen uns auf Dich!
          </h2>
        </div>
      )}
      {events && (
        <div className="event__filter">
          <label htmlFor="event__filter">
            <input
              type="text"
              placeholder="event..."
              onChange={(e) => {
                setFilter({ tag: e.target.value, date: filter.date });
              }}
            />
          </label>
          <label htmlFor="">
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
            <EventCard key={event._id} event={event} />
          ))}
      </div>
    </div>
  );
};
