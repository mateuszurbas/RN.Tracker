export const cond = <T>(elements: Array<[boolean, T]>): T | null => {
  const foundElement = elements.find((item) => item[0]);
  return foundElement ? foundElement[1] : null;
};
