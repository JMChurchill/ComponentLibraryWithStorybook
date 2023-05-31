// convert from format returned from MS SQL to readable string
export const toReadableDate = (date: string | number | Date) => {
  // new DateTime(date).toLocaleDateString("en-GB")
  return date ? new Date(date).toLocaleString('en-GB') : '';
};
