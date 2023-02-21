import { filteredByTag } from './filteredByTag.js';
import { filteredByDate } from './filteredByDate.js';

const filteredByTagAndDate = (events, tagFilter, dateFilter) => {
  let filteredEvents = [];

  const filteredEventsByTag = filteredByTag(events, tagFilter);
  const filteredEventsByDate = filteredByDate(events, dateFilter);

  console.log("filteredEventsByTag : ", filteredEventsByTag);
  console.log("filteredEventsByDate : ", filteredEventsByDate);
  filteredEventsByTag.forEach((event) => {
    filteredEventsByDate.includes(event) && filteredEvents.push(event);
  });

  // console.log('filteredEventsByTag : ', filteredEventsByTag);
  // console.log('filteredEventsByDate : ', filteredEventsByDate);

  /* console.log(events, filter.tag)
  console.log(filteredEventsByTag); */

  /* console.log("FILTERED EVENTS : ", filteredEvents); */

};

export { filteredByTagAndDate };
