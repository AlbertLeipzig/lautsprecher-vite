import {
  convertDateStringFromInput,
  convertDateStringFromDb,
} from '../logic/formatDate';

const filteredByDate = (events, filter) => {
  /* console.log('all events : ', events); */

  // FORMAT INPUT DATE
  /* const time = filter.time || [0, 0]; */

  const filterDate = filter.date;
  console.log('formatted data : ', convertDateStringFromInput(filterDate));
  const formattedInputDate = convertDateStringFromInput(filterDate);

  /* console.log(formattedInputDate); */

  events.forEach((event) => {
    const formattedDbDate = convertDateStringFromDb(event.date);

    formattedDbDate[0] === formattedInputDate[0] &&
      formattedDbDate[1] === formattedInputDate[1] &&
      formattedDbDate[2] === formattedInputDate[2] &&
      filteredEvents.push(event);
  });
  /* console.log('filtered events BY DATE : ', filteredEvents); */
  return filteredEvents;
};

export { filteredByDate };