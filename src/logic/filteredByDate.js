import {
  convertDateStringFromInput,
  convertDateArrayFromDb,
} from '../logic/formatDate';

const filteredByDate = (events, filterDate) => {
  let filteredEvents = [];

  const formattedInputDate = convertDateStringFromInput(filterDate);



  events.forEach((event) => {
    const formattedDateArrayFromDb = convertDateArrayFromDb(event.dates);
  });
  return filteredEvents;
};

export { filteredByDate };
