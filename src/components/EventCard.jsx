import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { BiEuro } from 'react-icons/bi';
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
} from '../logic/formatFunctions/formatFunctions.js';

export const EventCard = ({ props }) => {
  const rawEvent = props;
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
    musicians: [],
    bands: [],
  });

  useEffect(() => {
    rawEvent && setEvent(formattedEvent);
  }, [rawEvent]);

  const formattedEvent = {
    bands: formatBandArray(rawEvent.bands, bands),
    date:
      (rawEvent.date && dateFormat(rawEvent.date)) ||
      dateFormat(['10.10.2023']),
    description: formatDescription(rawEvent.description),
    image: imageFormat(rawEvent),
    link: rawEvent.link,
    musicians: formatMusicianArray(rawEvent.musicians, musicians),
    price:
      { normalPreis: 15, vorverkauf: 10, abendkasse: 15, ermaessigt: 5 } ||
      rawEvent.prices,
    organizer: pairOrganizer(rawEvent, organizers),
    subtitle: rawEvent.subtitle && subtitleFormat(rawEvent.subtitle),
    tags: rawEvent.tags,
    title: rawEvent.title && titleFormat(rawEvent.title),
    venue: pairVenue(rawEvent, venues),
  };

  formattedEvent.bands && console.log(formattedEvent.bands);

  return (
    <div className="event-card">
      <img src={event.image} alt={'event image'} className="event-card__img" />
      <div className="event-card__titles">
        {formattedEvent.title && (
          <h3 className="event-card__title">{formattedEvent.title}</h3>
        )}
        {formattedEvent.subtitle && (
          <p className="event-card__subtitle">{formattedEvent.subtitle}</p>
        )}
      </div>
      <div className="event-card__main-info">
        <p>{formattedEvent?.venue.name}</p>

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
          <p>{formattedEvent.price.normalPreis}</p>
          <p>vvk {formattedEvent.price.vorverkauf}</p>
          <p>Ak {formattedEvent.price.abendkasse}</p>
          <p>Er {formattedEvent.price.ermaessigt}</p>
          <BiEuro />
        </div>
      )}

      <a
        href={formattedEvent?.link}
        target={'_blank'}
        className="event-card__link"
      >
        + INFO
      </a>
      {/* {formattedEvent?.description && (
        <p className="event-description">{formattedEvent.description}</p>
      )}
      {formattedEvent?.tags.map((tag) => (
        <p className="tag">{tag}</p>
      ))} */}
    </div>
  );
};
