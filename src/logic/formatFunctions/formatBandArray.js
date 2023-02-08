export const formatBandArray = (eventBands, dbBands) => {
  let bandArray = [];

  if (eventBands === []) {
    return null;
  }

  /* console.log('eventBands : ', eventBands);
  console.log('dbBands : ', dbBands); */

  /* eventBands.forEach((band) => {
    band._id === dbBands._id && bandArray.push(band);
  }); */

  eventBands.forEach((eventBand) => {
    // find the band in the db that matches the band in the event
    const matchedBand = dbBands.find((band) => {
      // console.log('band', band);
      // console.log('eventBand', eventBand);
      return band._id === eventBand && band;
    });
    matchedBand && bandArray.push(matchedBand);
  });

  /*   console.log('BAND ARRAY : ', bandArray); */

  return bandArray;
};
