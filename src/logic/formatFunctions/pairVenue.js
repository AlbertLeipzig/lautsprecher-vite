export const pairVenue = (rawEvent, venues) => {
  const eventVenue = venues.find((venue) => {
    return venue._id === rawEvent.venue && venue;
  });

  // console.log('venues : ', venues);
  // console.log('Raw Event Venue', rawEvent.venue);
  // console.log('eventVenue : ', eventVenue);
  return eventVenue;
};
