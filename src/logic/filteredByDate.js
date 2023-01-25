const filterSingleEvent = (event, filter) => {
  return event.date.includes(filter) ? null : event;
};

const filteredByDate = (events, filter) => {
  let filteredEvents = [];
  events.forEach((event) => {
    event.date && filteredEvents.push(filterSingleEvent(event, filter));
  });
  return filteredEvents;
};
export { filteredByDate };
