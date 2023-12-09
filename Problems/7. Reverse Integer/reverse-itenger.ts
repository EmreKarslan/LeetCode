//Solution 1: 55ms 44 MB
function reverse(x: number): number {
  const isNegative = x < 0;
  x = Math.abs(x);

  let reversedX = 0;

  while (x > 0) {
    reversedX = reversedX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  const maxInt = 2 ** 31 - 1;
  const result = isNegative ? -reversedX : reversedX;

  return Math.abs(result) > maxInt ? 0 : result;
}

//Solution 2: 51ms 44.4 MB
function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const bound = 2 ** 31 - 1;
  let reversedX = 0;
  x = Math.abs(x);

  while (x > 0) {
    reversedX = reversedX * 10 + (x % 10);
    if (reversedX > bound) return 0;
    x = Math.floor(x / 10);
  }

  return sign * reversedX;
}
