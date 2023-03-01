/* 
both dates (from front and back end) must be converted into the same format : dd / mm / yyyy / hh / mm

DATE STRING FROM FRONT END INPUT
2023-01-03

DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromInput = (date) => {
  const rawInput = date.split('-');
  const rawInputDay = rawInput[2];
  const rawInputMonth = rawInput[1];
  const rawInputYear = rawInput[0];
  const formattedDate = `${rawInputDay}-${rawInputMonth}-${rawInputYear}`;
  return formattedDate;
};

const convertDateStringFromDb = (date) => {
  // takes hours out of date string

  const dateNoHour = date.split(',');

  const rawDate = dateNoHour[0].split('-');

  const rawDay = rawDate[0].length === 1 ? `0${rawDate[0]}` : rawDate[0];
  const rawMonth = rawDate[1].length === 1 ? `0${rawDate[1]}` : rawDate[1];
  const rawYear = rawDate[2];
  const rawDayTime = dateNoHour[1]
  console.log('rawDayTime : ', rawDayTime)

  const formattedDay = `${rawDay}-${rawMonth}-${rawYear}`;

  return formattedDay;
};

const convertDateArrayFromDb = (dateArray) => {
  let formattedDateArray = [];

  dateArray.map((date) => {
    formattedDateArray.push(convertDateStringFromDb(date));
  });
  console.log('formattedDateArray : ', formattedDateArray);
  return formattedDateArray;
};

export { convertDateStringFromInput, convertDateArrayFromDb };
