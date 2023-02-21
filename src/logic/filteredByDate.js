import {
  convertDateStringFromInput,
  convertDateArrayFromDb,
} from '../logic/formatDate';

const filteredByDate = (events, filterDate) => {
  let filteredEvents = [];
  const formattedFilterDate = convertDateStringFromInput(filterDate);
  events.forEach((event) => {
    const formattedDateArrayFromDb = convertDateArrayFromDb(event.date);
    /* console.log(
      'filteredByDate - formattedDateArrayFromDb : ',
      formattedDateArrayFromDb
    ); */
    /* console.log('filteredByDate - filterDate : ', filterDate); */

    /* console.log(formattedFilterDate, formattedDateArrayFromDb) */
    formattedDateArrayFromDb.includes(formattedFilterDate) && filteredEvents.push(event);
  });

  return filteredEvents;
};

export { filteredByDate };
