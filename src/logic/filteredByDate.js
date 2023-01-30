import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from './formatDate.js';

const filterSingleEvent = (event, filter) => {
  const filterDate = convertDateStringFromInput(filter.date);
  return event.date.includes(filterDate);
};

const filteredByDate = (events, filter) => {
  let filteredEvents = [];
  events.forEach((event) => {
    event.date && filteredEvents.push(filterSingleEvent(event, filter));
  });
  return filteredEvents;
};
export { filteredByDate };
