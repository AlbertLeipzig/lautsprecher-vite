import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

const eventFilter = (events, filter) => {
  let filteredEvents = [];
  if (filter.date) {
  } else if (filter.tag) {
  }
  return filteredEvents;
};

export { eventFilter };
