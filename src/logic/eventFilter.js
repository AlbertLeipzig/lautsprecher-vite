import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag.js';

import { convertDateStringFromInput } from './formatDate';

// formats input date

/* const formatInputDate = (date) => {
  return convertDateStringFromInput(date);
}; */

/* const totalFilter = (dateFilter, tagFilter) => {
  if (dateFilter === false && tagFilter === []) {
    return 'tagFilter';
  } else if (dateFilter === [] && tagFilter === undefined) {
    return 'dateFilter';
  } else {
    //return dateFilter.filter((date) => tagFilter.includes(date));
    return 'both';
  }
}; */

export const eventFilter = (events, filter) => {
  let filteredEvents = [];
  //console.log(filter);

  const tagEvents = filteredByTag(events, filter) || events;
  console.log(events);
  //console.log('TAG EVENTS : ', tagEvents);
  const dateEvents = filteredByDate(tagEvents, filter) || tagEvents;
  //console.log('DATE EVENTS : ', dateEvents);
  filteredEvents = dateEvents;
  return filteredEvents;
};
