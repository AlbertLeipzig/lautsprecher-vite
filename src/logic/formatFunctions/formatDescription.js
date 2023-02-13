export const formatDescription = (description) => {
  if (!description) {
    return '';
  }
  const formattedDescription = description.slice(0, 200).concat('...');
  return formattedDescription;
};
