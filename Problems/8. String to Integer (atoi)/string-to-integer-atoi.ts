//Solution: 54ms 45.74 MB
function myAtoi(s: string): number {
  const bound = 2 ** 31 - 1;
  s = s.trim();

  let sign = 1;
  let itr = 0;
  let result = 0;

  if (s[itr] === "-" || s[itr] === "+") {
    sign = s[itr++] === "-" ? -1 : 1;
  }

  while (s[itr] >= "0" && s[itr] <= "9") {
    const digit = parseInt(s[itr], 10);

    if (result > (bound - digit) / 10) {
      return sign === 1 ? bound : -bound - 1;
    }

    result = result * 10 + digit;
    itr++;
  }

  return sign * result;
}

//Solution 2: 44ms 44.90MB
const clamp = (num: number, min: number, max: number): number => {
  return Math.max(Math.min(num, max), min);
};

const myAtoi = (s: string): number => {
  const parsedNumber = parseInt(s.trim());

  if (Number.isNaN(parsedNumber)) {
    return 0;
  }

  return clamp(parsedNumber, -2147483648, 2147483647);
};
