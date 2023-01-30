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
  let filteredEvents = [];
  console.log("FILTERED BY DATE : ", filteredByDate(events, filter));
  console.log("FILTERED BY TAG : ", filteredByTag(filter, events));
  return filteredEvents;
};
