const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const titleFormat = (title) => {
  const trimmedTitle = title.length > 43 ? title.slice(0, 40) + '...' : title;
  const titleArray = trimmedTitle.split(' ');
  const formattedTitleArray = titleArray.map((word) => {
    return capitalizeFirstLetter(word);
  });
  return formattedTitleArray.join(' ');
};
