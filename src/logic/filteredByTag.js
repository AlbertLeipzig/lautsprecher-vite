/* we pass a filter (string) and an array of events (every event is an object) */
/* we turn the filter into an array of words */
/* for every event we compare it's words with the filter. If there's a match we send a true back */
/* we go thru the events array, and for every event we do #3 */
/* we filter the events array, and we keep only the events that match the filter */
/* we return the filtered array */

const stringToArray = (string) => {
  return string.split(' ');
};

const eventTags = (event) => {
  let tagsArray = [];

  event.name &&
    stringToArray(event.name).forEach((word) => tagsArray.push(word));
  event.title &&
    stringToArray(event.title).forEach((word) => tagsArray.push(word));
  event.subtitle &&
    stringToArray(event.subtitle).forEach((word) => tagsArray.push(word));
  event.musicians &&
    event.musicians.forEach((musician) => tagsArray.push(musician));
  event.bands && event.bands.forEach((band) => tagsArray.push(band));
  event.venue && tagsArray.push(event.venue);
  event.organizer && tagsArray.push(event.organizer);
  event.tags && event.tags.forEach((tag) => tagsArray.push(tag));

  return tagsArray;
};

const filterTags = (tags) => {
  let tagsArray = [];
  tags.split(' ').forEach((tag) => {
    tagsArray.push(tag.toLowerCase());
  });

  return tagsArray;
};

const filterSingleEvent = (filter, event) => {
  const eventTagsArray = eventTags(event);
  const formattedEventTagsArray = formattedTagsArray(eventTagsArray);
  const filteredEvent = filter.some((tag) =>
    formattedEventTagsArray.includes(tag)
  );
  return filteredEvent;
};

const formattedTagsArray = (tags) => {
  let formattedTags = [];
  tags.forEach((tag) => {
    formattedTags.push(tag.toLowerCase());
  });
  return formattedTags;
};

const formattedFilterTags = (filter) => {
  let formattedTags = [];
  filter.tag.split(' ').forEach((tag) => {
    formattedTags.push(tag.toLowerCase());
  });
  return formattedTags;
};

export const filteredByTag = (filter, events) => {
  let filteredEvents = [];

  const filterTagsArray = formattedFilterTags(filter);
  events.forEach((event) => {
    filterSingleEvent(filterTagsArray, event) && filteredEvents.push(event);
  });

  return filteredEvents;
};
