export const formatDate = (date: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return new Date(date).toLocaleDateString("es-ES", options);
};
