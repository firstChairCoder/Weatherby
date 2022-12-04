export const formatTemp = (temp: number): string => {
  return `${temp.toFixed(1)} ºC`;
};

export const capitalize = (str: string): string => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};
