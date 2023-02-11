import { pairVenue } from './pairVenue.js';

export const linkFormat = (link, rawEvent, venues) => {
  if (link) {
    return link;
  }

  const venue = pairVenue(rawEvent, venues);
  const venueLink = venue.link;
  return venueLink;
};
