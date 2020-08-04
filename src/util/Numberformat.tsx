export const currencyFormat: (num: number) => string = (num) => {
  const number = parseFloat(num);
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const toTenThousand: (input: number) => string = (input) => {
  if (input < 10000) return input.toString();
  else {
    const number = Math.round(input / 10000);
    const output = currencyFormat(number).toString() + '萬';
    return output;
  }
};
