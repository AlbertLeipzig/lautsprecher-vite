export const formatBandArray = (eventBands, dbBands) => {
  let bandArray = [];

  eventBands.forEach((eventBand) => {
    const band = dbBands.find((band) => {
      console.log('event Band : ', eventBand);
      // console.log('band id : ', band._id);
      return band._id === eventBand && band;
    });
    console.log(band);
    bandArray.push(band);
  });

  bandArray.length <= 0 && bandArray.push({ name: 'eventuell placeholder' });
  return bandArray;
};
