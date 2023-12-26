export const isSomeObjectValuesEmpty = (object: {}) => {
  return Object.values(object).includes("");
};
