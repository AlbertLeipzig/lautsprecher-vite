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

  if (filter.date === '' && filter.tag === '') {
    filteredEvents = events;
  } else if (filter.date === '' && filter.tag !== '') {
    filteredEvents =  filteredByTag(events, filter);
  } else if (filter.date !== '' && filter.tag === '') {
    filteredEvents =  filteredByDate(events, filter);
  } else if (filter.date !== '' && filter.tag !== '') {
    filteredEvents =  filteredByDate(filteredByTag(events, filter), filter);
  } else {
    filteredEvents =  events;
  }

  /* const tagEvents = filteredByTag(events, filter) || events; */
  //console.log('filtered by tag events : ', tagEvents);
  //console.log('TAG EVENTS : ', tagEvents);

  /* const dateEvents =
    filter.date !== '' ? filteredByDate(tagEvents, filter) : tagEvents;
  console.log('filtered by date events : ', dateEvents);
  //console.log('DATE EVENTS : ', dateEvents);
  filteredEvents = dateEvents; */
  return filteredEvents;
};
