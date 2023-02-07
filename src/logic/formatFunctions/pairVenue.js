export const pairVenue = (rawEvent, venues) => {
  const eventVenue = venues.find((venue) => {
    venue._id === rawEvent.venue
      ? venue.name
      : 'formatted venue';
  });

  const filteredVenue = eventVenue || { name: 'formatted venue' };
  return filteredVenue;
};