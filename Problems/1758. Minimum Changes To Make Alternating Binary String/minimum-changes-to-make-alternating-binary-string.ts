//Solution 1: 62ms 45.30 MB
function minOperations(s: string): number {
  let countZeroOnePairs = 0;
  let countOneZeroPairs = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0" && i % 2 === 0) {
      countOneZeroPairs++;
    }

    if (s[i] === "1" && i % 2 === 1) {
      countOneZeroPairs++;
    }

    if (s[i] === "1" && i % 2 === 0) {
      countZeroOnePairs++;
    }

    if (s[i] === "0" && i % 2 === 1) {
      countZeroOnePairs++;
    }
  }

  return Math.min(countOneZeroPairs, countZeroOnePairs);
}

//Solution 1: 47ms 45.09 MB
function minOperations(s: string): number {
  let countZeroOnePairs = 0;
  let countOneZeroPairs = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (i % 2 === 0) {
        countZeroOnePairs++;
      } else {
        countOneZeroPairs++;
      }
    } else {
      if (i % 2 === 1) {
        countZeroOnePairs++;
      } else {
        countOneZeroPairs++;
      }
    }
  }

  return Math.min(countOneZeroPairs, countZeroOnePairs);
}
