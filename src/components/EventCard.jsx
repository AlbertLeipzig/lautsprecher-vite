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
  formatPricesArray,
} from '../logic/formatFunctions/formatFunctions.js';

export const EventCard = ({ props }) => {
  const rawEvent = props;

  const [image, setImage] = useState(null);
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

  const { musicians, bands, venues, organizers } = useContext(DataContext);

  /* console.log(imageFormat(event)); */

  // FORMAT EVENT DATA

  /* 
    price: listPrices(rawEvent.price),
    description: formatDescription(rawEvent.description) || undefined,
    musicians: listMusicians(rawEvent.musicians) || undefined,
    bands: listBands(rawEvent.bands) || undefined,

    NOT NECESSARY
    organizer: pairOrganizer(rawEvent.organizer),

 */
  // find id in the dB and substitute for readable values

  /* console.log('venues : ', venues); */

  useEffect(() => {
    rawEvent && setEvent(formattedEvent);
  }, [rawEvent]);

  const formattedEvent = {
    image: imageFormat(rawEvent),
    name:
      (rawEvent.name && titleFormat(rawEvent.name)) ||
      titleFormat('placeholder filter name'),
    title:
      (rawEvent.title && titleFormat(rawEvent.title)) ||
      titleFormat('placeholder filter title'),
    subtitle:
      (rawEvent.subtitle && subtitleFormat(rawEvent.subtitle)) ||
      subtitleFormat('placeholder filter subtitle'),
    date:
      (rawEvent.date && dateFormat(rawEvent.date)) ||
      dateFormat(['10.10.2023']),
    venue: pairVenue(event, venues) || pairVenue('placeholder venue', venues),
    musicians: formatMusicianArray(rawEvent.musicians, musicians) || [
      { firstName: 'placeholder musicians' },
    ],
    bands: formatBandArray(rawEvent.bands, bands) || [
      { name: 'placeholder bands' },
    ],
    price:
      { normalPreis: 15, vorverkauf: 10, abendkasse: 15, ermaessigt: 5 } ||
      rawEvent.prices,
    link: rawEvent.link || 'placeholder link',
    organizer: pairOrganizer(rawEvent, organizers) || 'placeholder organizer',
    tags: rawEvent.tags,
  };

  useEffect(() => {
    setImage(imageFormat(event));
  }, [rawEvent]);

  //console.log('rawEvent : ', rawEvent);

  return (
    <div className="event-card">
      {event && (
        <>
          <div className="event-card__main">
            <img src={event.image} alt={'event image'} />
            {formattedEvent.title && (
              <h3>{`TITLE : ${formattedEvent?.title}`}</h3>
            )}
            {formattedEvent.name && <h3>{`NAME : ${formattedEvent?.name}`}</h3>}
            {formattedEvent.subtitle && (
              <p className="event-subtitle">{`SUBTITLE : ${formattedEvent?.subtitle}`}</p>
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
            {/* {formattedEvent.organizer && (
              <p>{`ORGANIZER : ${formattedEvent?.organizer.name}`}</p>
            )} */}
            {formattedEvent?.tags.map((tag) => (
              <p className="tag">{tag}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
