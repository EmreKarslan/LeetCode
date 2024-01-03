//Solution 1: 52ms 43.05 MB
function plusOne(digits: number[]): number[] {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry === 1 && digits[i] === 9) {
      digits[i] = 0;
    } else if (carry === 1) {
      digits[i] += 1;
      return digits;
    }
  }

  return [1, ...digits];
}

//Solution 2: 52ms 42.93 MB
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  return [1, ...digits];
}
