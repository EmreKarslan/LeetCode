//Solution 1: 62ms 43.88 MB
function divide(dividend: number, divisor: number): number {
  const result = dividend / divisor;
  return result < 0
    ? Math.max(-(2 ** 31), Math.ceil(result))
    : Math.min(2 ** 31 - 1, Math.floor(result));
}

//Solution 2: 51ms 44.4 MB
function divide(dividend: number, divisor: number): number {
  const result = Math.trunc(dividend / divisor);
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, result));
}
