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
  const { musicians, bands, venues, organizers } = useContext(DataContext);

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

  useEffect(() => {
    rawEvent && setEvent(formattedEvent);
  }, [rawEvent]);

  const placeholderImage =
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60';

  const formattedEvent = {
    bands: formatBandArray(rawEvent.bands, bands),
    date:
      (rawEvent.date && dateFormat(rawEvent.date)) ||
      dateFormat(['10.10.2023']),
    description: formatDescription(rawEvent.description),
    image: imageFormat(rawEvent),
    link: linkFormat(rawEvent.link, rawEvent, venues),
    musicians: formatMusicianArray(rawEvent.musicians, musicians),
    price: formatPricesArray(rawEvent.price),
    organizer: pairOrganizer(rawEvent, organizers),
    subtitle: rawEvent.subtitle && subtitleFormat(rawEvent.subtitle),
    tags: rawEvent.tags || [],
    title: rawEvent.title && titleFormat(rawEvent.title),
    venue: pairVenue(rawEvent, venues),
  };

  console.log('NEW EVENT IMAGE : ', formattedEvent.tags);
  // formattedEvent.bands && console.log(formattedEvent.bands);

  return (
    <div className="event-card">
      <img src={event.image} alt={'event image'} className="event-card__img" />
      {formattedEvent.title && (
        <h3 className="event-card__title">{formattedEvent.title}</h3>
      )}
      {formattedEvent.subtitle && (
        <p className="event-card__subtitle">{formattedEvent.subtitle}</p>
      )}
      <a
        href={formattedEvent?.venue.link}
        className="event-card__venue"
        target={'_blank'}
      >
        {formattedEvent?.venue.name}
      </a>
      {/* <p className="event-card__venue">{formattedEvent?.venue.name}</p> */}
      <div className="event-card__dates">
        {formattedEvent?.date.map((date) => (
          <p>{date}</p>
        ))}
      </div>
      <div className="event-card__musicians">
        <ul>
          {formattedEvent.musicians &&
            formattedEvent.musicians.map((musician) => (
              <li>
                {musician?.firstName}, {musician?.lastName}
              </li>
            ))}
        </ul>

        <ul>
          {formattedEvent.bands &&
            formattedEvent.bands.map((band) => <li>" {band?.name} "</li>)}
        </ul>
      </div>
      {formattedEvent.price && (
        <div className="event-card__prices">
          <p>
            {formattedEvent.price || 0}
            <BiEuro />
          </p>
        </div>
      )}

      <a
        href={formattedEvent?.link}
        target={'_blank'}
        className="event-card__link"
      >
        INFO + KARTEN
      </a>
    </div>
  );
};
