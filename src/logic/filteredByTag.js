const filteredByTag = (events, filter) => {
  let filteredEvents = [];

  const stringPartials = (string) => {
    const words = string.split(' ');

    return words;
  };

  const listEventWords = (document) => {
    let eventWords = [];
    document.title && eventWords.push(document.title);
    document.title && eventWords.push(...stringPartials(document.title));
    document.subtitle && eventWords.push(document.subtitle);
    document.subtitle && eventWords.push(...stringPartials(document.subtitle));
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
    const filterArray = filter;
    tagsArray.forEach((tag) => {
      if (tag.toLowerCase().includes(filterArray.toLowerCase())) {
        filteredEvents.push(event);
      }
    });
  });
  /* console.log('filtered events BY TAG : ', filteredEvents); */

  return filteredEvents;
};

export { filteredByTag };
