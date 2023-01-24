import { useEffect, useState, useContext } from 'react';
import { eventFilter } from '../logic/eventFilter';
import { DataContext } from '../context/DataContext';
import { EventCard } from '../components/EventCard';
import axios from 'axios';

export const Events = () => {
  const [filter, setFilter] = useState({ date: '', tag: '' });
  const { events } = useContext(DataContext);
  const [filteredEvents, setFilteredEvents] = useState(events);

  /* fetch data from api */

  const url = 'http://localhost:6000/api/v1/events';

  useEffect(() => {
    (async () => {
      const data = (await axios.get(url)).data;
      console.log(data);
    })();
  }, []);

  /* 
  const dataFetch = async () => {
    try {
      const res = await axios('http://localhost:6000/api/v1/events');
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);
  */

  return (
    <div className="events">
      <h1>Veranstaltungen</h1>

      {filteredEvents === undefined && (
        <div className="events__nodb">
          <img
            src="https://images.unsplash.com/photo-1617405207340-954e2e19755c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBjb25jZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <h2 className="events__crash">
            Uns tut es Leid, derzeit ist keine Veranstaltung vorhanden. Kommt
            bitte auf eine späteren Zeitpunkt zurück. Wir freuen uns auf Dich!
          </h2>
          {/* {filteredEvents && (
        <>
        <p>Bei Lautsprecher bemühen wir uns, Ihnen möglichst aktuelle Informationen zur Verfügung zu stellen. Dennoch sind wir im Moment nicht in der Lage, dafür zu sorgen, dass sich nichts ändert. Lautsprecher übernimmt daher keine Verantwortung für Änderungen in letzter Minute. Bitte beachten Sie den Link zur Veranstaltung für weitere Informationen und Bestätigung. Vielen Dank!</p>
        </>
      )} */}
        </div>
      )}
      {filteredEvents && (
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
          Object.values(filteredEvents).forEach((value) => (
            <EventCard event={value} />
          ))}
      </div>
    </div>
  );
};
