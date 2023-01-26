import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

import { convertDateStringFromInput } from './formatDate';

// formats input date

const formatInputDate = (date) => {
  return convertDateStringFromInput(date);
};

// implement a function that proves that every date has the right format

// loops every date on every event (since there can be many dates on every event) and checks it's date is the same as filter's date

export const eventFilter = (events, filter) => {
  const formattedInputData = formatInputDate(filter.date);
  let filteredEvents = [];
  // it must compare both filter and "delete" every event that doesn't match
  // this way there's no "if else statement" and it's - hopefully - easier to read

  const dateEvents = filteredByDate(events, formattedInputData);
  const tagEvents = filteredByTag(events, filter.tag);

  /* dateEvents &&
    dateEvents.forEach((event) => {
      
    }); */

  return filteredEvents;
};
