export const formatMusicianArray = (eventMusicians, dbMusicians) => {
  let musicianArray = [];
  if (eventMusicians === []) {
    return [{ firstName: eventMusicians }];
  }

  eventMusicians.forEach((eventMusician) => {
    const matchedMusician = dbMusicians.find((musician) => {
      return musician._id === eventMusician._id && musician;
    });
    musicianArray.push(matchedMusician);
  });

  // only till we have a db

  musicianArray.length <= 0 && musicianArray.push({ firstName: 'placeholder' });

  return musicianArray;
};
