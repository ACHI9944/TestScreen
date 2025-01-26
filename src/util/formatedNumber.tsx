export const formatedNumber = (number: number) =>
  number > 0 ? `+${number}.00` : number < 0 ? `${number}.00` : `${number}.00`;
