const formatDateFromDateType = (date: Date): string => `${date.getDay()} ${date.getMonth()}`;

export const formatDate = (date: number | Date): string => {
  let formattedDate = 'unknown';
  if (date instanceof Date) {
    formattedDate = formatDateFromDateType(date);
  } else if (typeof date === 'number') {
    const newDate = new Date(date);
    formattedDate = formatDateFromDateType(newDate);
  }
  return formattedDate;
};
