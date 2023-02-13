export const formatPricesArray = (prices) => {
  let pricesArray = [];
  if (!prices) {
    return pricesArray;
  }
  prices.forEach((price) => {
    pricesArray.push(price);
  });
  const pricesString = pricesArray.toString();
  return pricesString;
};
