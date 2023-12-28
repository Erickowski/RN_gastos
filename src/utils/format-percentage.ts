export const formatPercentage = (portion: number, total: number) => {
  return (((total - portion) / total) * 100).toFixed(0);
};
