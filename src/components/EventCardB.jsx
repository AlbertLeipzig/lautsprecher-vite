import { useEffect, useState } from 'react';

const placeholderImageArray = [
  'https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbmNlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
];

export const EventCard = ({ event }) => {
  const [image, setImage] = useState(null);

  // function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // function to make every word in the title start with a capital letter

  /*   const formattedTitle = (title) => {
    const titleArray = title.split(' ');
    const formattedTitleArray = titleArray.map((word) => {
      return capitalizeFirstLetter(word);
    });
    return formattedTitleArray.join(' ');
  };

  event.title && (event.title = formattedTitle(event.title)); */

  useEffect(() => {
    if (event.img || event.image) {
      setImage(event.img || event.image);
    } else {
      setImage(
        placeholderImageArray[
          Math.floor(Math.random() * placeholderImageArray.length)
        ]
      );
    }
  }, [event.img]);

  return (
    <div className="event-card">
      <>
        <div className="event-card__main">
          {image && <img src={image} alt={'event image'} />}
          {event.title && <h3>{`TITLE : ${event?.title}`}</h3>}
          {event.name && <h3>{` NAME : ${event?.name}`}</h3>}
          {event.subtitle && (
            <p className="event-subtitle">{`SUBTITLE : ${
              event?.subtitle || 'HI THERE'
            }`}</p>
          )}
          <p className="event-subtitle">{`SUBTITLE : ${
            event?.subtitle || 'HI THERE'
          }`}</p>
        </div>
        <div className="event-card__content">
          <div>
            {event.date && <p>{`DATE : ${Object.toString(event?.date)}`}</p>}
            {event.venue && <p>{`VENUE : ${event?.venue}`}</p>}
          </div>
          {event.musicians &&
            event.musicians.map((musician) => <p>MUSICIAN : {musician}</p>)}
          {event.bands && event.bands.map((band) => <p>BAND : {band}</p>)}
          {/* {event.description && <p>{event?.description.slice(0, 100)}</p>} */}
          {event.price && <p>{`PRICE : ${event?.price.$numberDecimal} E`}</p>}
          {event.link.length > 0 && (
            <a href={event.link} target={'_blank'}>
              + INFO
            </a>
          )}
          {event.organizer && <p>{`ORGANIZER : ${event?.organizer}`}</p>}
          {event.tags && event.tags.map((tag) => <p className="tag">{tag}</p>)}
        </div>
      </>
    </div>
  );
};
