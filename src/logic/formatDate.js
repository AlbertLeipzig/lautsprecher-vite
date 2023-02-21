/* 
both dates (from front and back end) must be converted into the same format : dd / mm / yyyy / hh / mm

DATE STRING FROM FRONT END INPUT
2023-01-03

DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromInput = (date) => {
  const formattedDate = `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
  /* console.log('formattedDay - INPUT : ', formattedDate); */
  return formattedDate
};

const convertDateStringFromDb = (date) => {
  // convert date to DD-MM-YYYY
  const dateNoHour = date.split(',');

  const rawDay = dateNoHour[0].split('/');

  const formattedDay = `${rawDay[1]}-${rawDay[0]}-${rawDay[2]}`;

  /* console.log('formattedDay - DB : ', formattedDay); */
  return formattedDay;
};

const convertDateArrayFromDb = (dateArray) => {
  let formattedDateArray = [];
  dateArray.map((date) => {
    formattedDateArray.push(convertDateStringFromDb(date));
  });
  return formattedDateArray;
};

export { convertDateStringFromInput, convertDateArrayFromDb };
