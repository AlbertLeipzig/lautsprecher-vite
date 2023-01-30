import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag.js';

import { convertDateStringFromInput } from './formatDate';

// formats input date

const formatInputDate = (date) => {
  return convertDateStringFromInput(date);
};

// implement a function that proves that every date has the right format

// loops every date on every event (since there can be many dates on every event) and checks it's date is the same as filter's date

export const eventFilter = (events, filter) => {
  let filteredEvents = events;
  if (filter.date && filter.tag) {
    let doubleFilter = [];
    const dateFilteredEvents = filteredByDate(events, filter);
    doubleFilter.push(filteredByTag(filter, dateFilteredEvents));
    filteredEvents = doubleFilter;
  } else if (filter.date) {
    filteredEvents = filteredByDate(events, filter);
  } else if (filter.tag) {
    filteredEvents = filteredByTag(filter, events);
  } else {
    filteredEvents = events;
  }
  // console.log("FILTERED BY DATE : ", filteredByDate(events, filter));
  // console.log("FILTERED BY TAG : ", filteredByTag(filter, events));
  console.log('filteredEvents : ', filteredEvents);
  return filteredEvents;
};
