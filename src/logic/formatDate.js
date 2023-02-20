/* 
both dates (from front and back end) must be converted into the same format : dd / mm / yyyy / hh / mm

DATE STRING FROM FRONT END INPUT
2023-01-03

DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromInput = (date) => {
  return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
};

const convertDateStringFromDb = (date) => {
  return date.slice(0, 10);
};

const convertDateArrayFromDb = (dateArray) => {
  let convertedDateArray = [];
  dateArray.forEach((date) => {
    convertedDateArray.push(convertDateStringFromDb(date));
  });
  console.log('convertedDateArray : ', convertedDateArray);
  return convertedDateArray;
};

export { convertDateStringFromInput, convertDateArrayFromDb };
