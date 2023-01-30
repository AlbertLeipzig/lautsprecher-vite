// list all the words in the document that can be used to filter events

const listEventWords = (event) => {
    let eventWords = [];
    event.name && eventWords.push(event?.name.toLowerCase());
    event.firstName && eventWords.push(event?.firstName.toLowerCase());
    event.lastName && eventWords.push(event?.lastName.toLowerCase());
    event.musicians &&
      eventWords.push(
        event?.musicians.forEach((musician) => musician.toLowerCase())
      );
    event.bands &&
      eventWords.push(event?.bands.forEach((band) => band.toLowerCase()));
    event.venue && eventWords.push(event?.venue.toLowerCase());
    event?.tags.forEach((tag) => {
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
  
  // filter single event
  
  const filterSingleEvent = (event, filterTagsArray) => {
    let filteredEvents = [];
    const eventTagsArray = Object.entries(event);
    filterTagsArray.forEach((filterTag) => {
      eventTagsArray.forEach((eventTag) => {
        filterTag === eventTag ? filteredEvents.push(event) : null;
      });
    });
    return eventTagsArray.includes(filterTagsArray) && event;
  };
  
  // compares the filter words to the event words and "deletes" every word that doesn't match
  
  const filteredByTag = (events, filter) => {
    let filteredEvents = [];
    const filterTagsArray = listFilterWords(filter);
  
    events.forEach((event) => {
      const eventTagsArray = listEventWords(event);
      eventTagsArray &&
        filteredEvents.push(filterSingleEvent(event, filterTagsArray));
    });
    console.log(filteredEvents);
    return filteredEvents;
  };
  
  export { filteredByTag };
  