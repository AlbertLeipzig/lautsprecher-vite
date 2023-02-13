export const formatMusicianArray = (eventMusicians, dbMusicians) => {
  let musicianArray = [];
  if (eventMusicians === []) {
    return null;
  }

  eventMusicians.forEach((eventMusician) => {
    const matchedMusician = dbMusicians.find((musician) => {
      // console.log('musician', musician);
      // console.log('eventMusician', eventMusician);
      return musician._id === eventMusician && musician;
    });
    //console.log('matched Musician : ', matchedMusician);
    musicianArray.push(matchedMusician);
  });

  // only till we have a db

  musicianArray.length <= 0 &&
    musicianArray.push({ firstName: 'eventuell placeholder' });

  return musicianArray;
};
