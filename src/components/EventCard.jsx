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
    bands: formatBandArray(rawEvent.bands, bands) || [
      { name: 'placeholder bands' },
    ],
    date:
      (rawEvent.date && dateFormat(rawEvent.date)) ||
      dateFormat(['10.10.2023']),
    description: formatDescription(rawEvent.description),
    image: imageFormat(rawEvent),
    link: rawEvent.link || 'placeholder link',
    musicians: formatMusicianArray(rawEvent.musicians, musicians) || [
      { firstName: 'placeholder musicians' },
    ],

    price:
      { normalPreis: 15, vorverkauf: 10, abendkasse: 15, ermaessigt: 5 } ||
      rawEvent.prices,
    organizer: pairOrganizer(rawEvent, organizers) || 'placeholder organizer',
    subtitle:
      (rawEvent.subtitle && subtitleFormat(rawEvent.subtitle)) ||
      subtitleFormat('placeholder filter subtitle'),
    tags: rawEvent.tags,
    title:
      (rawEvent.title && titleFormat(rawEvent.title)) ||
      titleFormat('placeholder filter title'),
    venue: pairVenue(event, venues) || pairVenue('placeholder venue', venues),
  };

  return (
    <div className="event-card">
      <div className="event-card__main">
        <img src={event.image} alt={'event image'} />
        {formattedEvent.title && <h3>{`TITLE : ${formattedEvent.title}`}</h3>}
        {formattedEvent.subtitle && (
          <p className="event-subtitle">{`SUBTITLE : ${formattedEvent.subtitle}`}</p>
        )}
      </div>
      <div className="event-card__content">
        <p>{`VENUE : ${formattedEvent?.venue.name}`}</p>
        <div>
          <p>DATE : </p>
          {formattedEvent?.date.map((date) => (
            <p>{date}</p>
          ))}
        </div>
        <div>
          <p>MUSICIANS : </p>
          {formattedEvent.musicians &&
            formattedEvent.musicians.map((musician) => (
              <p>{musician?.firstName}</p>
            ))}
        </div>
        <div>
          <p>BANDS : </p>
          {formattedEvent?.bands.map((band) => (
            <p>{band?.name}</p>
          ))}
        </div>
        {formattedEvent.price && (
          <div className="event-card__prices">
            <p> PRICE: </p>
            <p>{formattedEvent.price.normalPreis}</p>
            <p>vvk {formattedEvent.price.vorverkauf}</p>
            <p>Ak {formattedEvent.price.abendkasse}</p>
            <p>Er {formattedEvent.price.ermaessigt}</p>
            <BiEuro />
          </div>
        )}

        <a href={formattedEvent?.link} target={'_blank'}>
          + INFO
        </a>
        {formattedEvent?.description && (
          <p className="event-description">{formattedEvent.description}</p>
        )}
        {formattedEvent?.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
    </div>
  );
};
