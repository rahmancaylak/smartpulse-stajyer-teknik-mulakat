export const useApiDate = () => {
  const date = new Date();
  const apiDate = date.toISOString().split('T')[0].split('-');

  const fullDay = {
    year: apiDate[0],
    month: apiDate[1],
    day: apiDate[2],
    full: `${apiDate[0].slice(-2)}${apiDate[1]}${apiDate[2]}`,
    endDate: `${apiDate[0]}-${apiDate[1]}-${apiDate[2]}`,
    startDate: `${apiDate[0]}-${apiDate[1]}-${apiDate[2]}`,
  };
  return fullDay;
};
