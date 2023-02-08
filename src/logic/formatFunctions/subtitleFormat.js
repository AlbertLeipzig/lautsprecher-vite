export const subtitleFormat = (string) => {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString.length >= 30
    ? capitalizedString.slice(0, 30).concat('...')
    : capitalizedString;
};
