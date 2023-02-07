const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const titleFormat = (title) => {
  const titleArray = title.split(' ');
  const formattedTitleArray = titleArray.map((word) => {
    return capitalizeFirstLetter(word);
  });
  return formattedTitleArray.join(' ');
};
