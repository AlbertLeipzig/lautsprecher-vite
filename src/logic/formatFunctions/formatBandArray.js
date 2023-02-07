export const formatBandArray = (eventBands, dbBands) => {
  let bandArray = [];

  eventBands.forEach((eventBand) => {
    const band = dbBands.find((band) => {
      return band._id === eventBand._id;
    });
    bandArray.push(band);
  });
  return bandArray;
};
