// list all the words in the document that can be used to filter events

const listEventWords = (event) => {
  let eventWords = [];
  event.name && eventWords.push(event.name.toLowerCase());
  event.firstName && eventWords.push(event.firstName.toLowerCase());
  event.lastName && eventWords.push(event.lastName.toLowerCase());
  event.location && eventWords.push(event.location.toLowerCase());
  event.tags.forEach((tag) => {
    eventWords.push(tag.toLowerCase());
  });
  return eventWords;
};

// list every word in the filter into an array

const listFilterWords = (filterArray) => {
  let filterWords = [];
  const splittedString = filterArray.split(' ');
  splittedString.forEach((word) => {
    filterWords.push(word.toLowerCase());
  });
  return filterWords;
};

const filteredByTag = (events, filter) => {
  let filteredEvents = [];
  const filterTagsArray = listFilterWords(filter);

  events.forEach((event) => {
    const eventTagsArray = listEventWords(event);
    eventTagsArray.forEach((tag) => {
      filterTagsArray.includes(tag) ? filteredEvents.push(event) : null;
    });
    console.log(filteredEvents);
  });
  /* console.log('filtered events BY TAG : ', filteredEvents); */

  return filteredEvents;
};

export { filteredByTag };
