/* 
both dates (from front and back end) must have the same format : dd / mm / yyyy / hh / mm
*/

/* 
DATE STRING FROM FRONT END INPUT
2023-01-03
*/

const convertDateStringFromInput = (date) => {
  /* const dateFormat = new Intl.DateTimeFormat('en-US').format(date); */
  const datePartials = [
    parseInt(date.slice(5, 7)),
    parseInt(date.slice(8, 10)),
    parseInt(date.slice(0, 4)),
  ];
  const dateString = datePartials.toString();
  return datePartials;
};

/*
DATE FROM BACK END
2023-01-09T18:33:01.366Z
*/

const convertDateStringFromDb = (date) => {
  const day = date[0]?.day;
  const month = date[0]?.month;
  const year = date[0]?.year;
  const datePartials = [day || 1, month || 1, year || 2023];
  return datePartials;
};

export { convertDateStringFromInput, convertDateStringFromDb };
