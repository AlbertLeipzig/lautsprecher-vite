/* we pass a filter (string) and an array of events (every event is an object) */
/* we turn the filter into an array of words */
/* for every event we compare it's words with the filter. If there's a match we send a true back */
/* we go thru the events array, and for every event we do #3 */
/* we filter the events array, and we keep only the events that match the filter */
/* we return the filtered array */

export const filteredByTag = (filter, events) => {
  const filterWords = filter;
  /* const filterEvent = (event) => {
    const eventWords = event.tags.split(' ');
    return filterWords.some((filterWord) => eventWords.includes(filterWord));
  }; */
  const stepTest = filterWords;
  return stepTest;
  /* return events.filter(filterEvent); */
};
