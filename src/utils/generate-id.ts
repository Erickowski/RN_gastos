export const generateId = () => {
  const randomString = Math.random().toString(36).substring(2, 11);
  const date = Date.now().toString(36);

  return randomString + date;
};
