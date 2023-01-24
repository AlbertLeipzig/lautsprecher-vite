const filteredByTag = (events, filter) => {
  let filteredEvents = [];
  const listEventWords = (document) => {
    let eventWords = [];
    document.name && eventWords.push(document.name);
    document.firstName && eventWords.push(document.firstName);
    document.lastName && eventWords.push(document.lastName);
    document.location && eventWords.push(document.location);
    document.tags.forEach((tag) => {
      eventWords.push(tag);
    });
    return eventWords;
  };

  events.forEach((event) => {
    const tagsArray = Object.values(listEventWords(event));
    const filterArray = filter.tag;
    tagsArray.forEach((tag) => {
      if (tag.toLowerCase().includes(filterArray.toLowerCase())) {
        filteredEvents.push(event);
      }
    });
  });
  return filteredEvents;
};

export { filteredByTag };
