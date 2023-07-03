export const formatNumber = (number: string | number) => {
  return Number(number).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
