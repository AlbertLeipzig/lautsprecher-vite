/* 
both dates (from front and back end) must be converted into the same format : dd / mm / yyyy / hh / mm

DATE STRING FROM FRONT END INPUT
2023-01-03

DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromInput = (date) => {
  const datePartials = {
    day: date.slice(8, 10),
    month: date.slice(5, 7),
    year: date.slice(0, 4),
  };

  const dateFormat = `${datePartials.day}.${datePartials.month}.${datePartials.year}`;

  return dateFormat;
};

const convertDateStringFromDb = (date) => {
  const day = date[0]?.day;
  const month = date[0]?.month;
  const year = date[0]?.year;
  const datePartials = [day, month, year];
  console.log(datePartials);
  return datePartials;
};

export { convertDateStringFromInput, convertDateStringFromDb };
