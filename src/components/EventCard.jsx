import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext.jsx';

import { BiEuro } from 'react-icons/bi';
import axios from 'axios';
import {
  pairOrganizer,
  pairVenue,
  titleFormat,
  subtitleFormat,
  imageFormat,
  dateFormat,
  formatMusicianArray,
  formatBandArray,
  formatDescription,
  formatPricesArray,
  linkFormat,
} from '../logic/formatFunctions/formatFunctions.js';

export const EventCard = ({ props }) => {
  const rawEvent = props;
  /* rawEvent?.tags.length > 0 && console.log('RAW EVENT : ', rawEvent); */
  const { musicians, bands, setVenues, venues, organizers } =
    useContext(DataContext);

  const [event, setEvent] = useState({
    image: undefined,
    name: undefined,
    title: undefined,
    subtitle: undefined,
    date: undefined,
    venue: undefined,
    organizer: undefined,
    price: undefined,
    description: undefined,
    tags: [],
    musicians: [],
    bands: [],
  });

  // edit an event using axios
  /*   const editEvent = async () => {
    const response = await axios.put(
      `http://localhost:3001/events/${rawEvent.id}`,
      {
        bands: rawEvent.bands,
        date: rawEvent.date,
        description: rawEvent.description,
        image: rawEvent.image,
        link: rawEvent.link,
        musicians: rawEvent.musicians,
        prices: rawEvent.prices,
        organizer: rawEvent.organizer,
        subtitle: rawEvent.subtitle,
        tags: rawEvent.tags,
        title: rawEvent.title,
        venue: rawEvent.venue,
      }
    );
  }; */

  const getVenues = async () => {
    try {
      const res = await axios.get(
        'https://tame-blue-cuff.cyclic.app/api/v1/venues'
      );
      const data = res.data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    rawEvent && setEvent(formattedEvent);
  }, [rawEvent]);

  useEffect(() => {
    getVenues();
    pairVenue(venues);
  }, []);

  const placeholderImage =
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60';

  const formattedEvent = {
    date: rawEvent.date && dateFormat(rawEvent.date),
    description: formatDescription(rawEvent.description),
    image: imageFormat(rawEvent),
    link: linkFormat(rawEvent.link, rawEvent, venues),
    price: formatPricesArray(rawEvent.price),
    tags: rawEvent.tags || [],
    title: rawEvent.title && titleFormat(rawEvent.title),
    venue: rawEvent.venue,
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={'event image'} className="event-card__img" />
      {formattedEvent.title && (
        <h3 className="event-card__title">{formattedEvent.title}</h3>
      )}
      <div className="event-card__main-info">
        {formattedEvent.venue && (
          <a
            href={formattedEvent?.venue.link}
            className="event-card__info"
            target={'_blank'}
          >
            + info : asdfasdf
          </a>
        )}
        {formattedEvent?.price && (
          <div className="event-card__prices">
            {formattedEvent.price.forEach((price) => {
              <p>
                {price}
                <BiEuro />
              </p>;
            })}
          </div>
        )}
      </div>
      {formattedEvent?.date.length > 1 && (
        <select className="event-card__dates">
          {formattedEvent?.date.map((date) => (
            <option>{date}</option>
          ))}
        </select>
      )}

      {formattedEvent?.date.length === 1 && <p>{formattedEvent?.date}</p>}
    </div>
  );
};
