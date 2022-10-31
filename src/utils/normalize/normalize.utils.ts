export const groupBy = <T>(array: T[], predicate: (value: T) => string) =>
  array.reduce((previousValue, currentValue) => {
    const group =
      previousValue[predicate(currentValue)] || (previousValue[predicate(currentValue)] = []);
    group.push(currentValue);
    return previousValue;
  }, {} as { [key: string]: T[] });
