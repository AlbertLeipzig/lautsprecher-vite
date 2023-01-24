import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

const eventFilter = (events, filter) => {
  let filteredEvents;
  const eventsArray = events;

  const completeFilterEvent = () => {
    const eventByDate = filteredByDate(eventsArray, filter);
    const eventByTag = filteredByTag(eventByDate, filter);
    console.log(eventByTag);
    return eventByTag;
  };

  if (filter.date && filter.tag) {
    filteredEvents = completeFilterEvent();
  } else if (filter.date) {
    eventsArray && (filteredEvents = filteredByDate(eventsArray, filter));
  } else if (filter.tag) {
    eventsArray && (filteredEvents = filteredByTag(eventsArray, filter));
  } else {
    filteredEvents = events;
  }
  console.log('filteredEvents, : ', filteredEvents);
  return filteredEvents;
};

export { eventFilter };
