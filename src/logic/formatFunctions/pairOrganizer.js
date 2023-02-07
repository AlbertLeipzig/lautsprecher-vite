export const pairOrganizer = (rawEvent, organizers) => {
  const eventOrganizer = organizers.find((organizer) => {
    organizer._id === rawEvent.organizer
      ? organizer.name
      : 'formatted organizer';
  });

  const filteredOrganizer = eventOrganizer || { name: 'formatted organizer' };
  return filteredOrganizer;
};
