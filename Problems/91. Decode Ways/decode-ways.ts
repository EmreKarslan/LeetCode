//Solution 1: 51ms 45.02 MB
function numDecodings(s: string): number {
  const memo: number[] = new Array(s.length).fill(-1);

  function backtrack(startIndex: number): number {
    if (startIndex === s.length) {
      return 1;
    }

    if (s[startIndex] === "0") {
      return 0;
    }

    if (memo[startIndex] !== -1) {
      return memo[startIndex];
    }

    let totalWays = 0;
    for (let i = startIndex; i < s.length; i++) {
      const currentNum = s.slice(startIndex, i + 1);

      if (isValid(currentNum)) {
        totalWays += backtrack(i + 1);
      } else {
        break; // Break if we encounter an invalid decoding
      }
    }

    memo[startIndex] = totalWays;
    return totalWays;
  }

  function isValid(numStr: string): boolean {
    const num = Number(numStr);
    return num >= 1 && num <= 26;
  }

  return backtrack(0);
}

//Solution 2: 50ms 45.00 MB
function numDecodings(s: string): number {
  if (s[0] === "0") return 0;

  const memo: number[] = new Array(s.length).fill(-1);

  function backtrack(startIndex: number): number {
    if (startIndex === s.length) {
      return 1;
    }

    if (s[startIndex] === "0") {
      return 0;
    }

    if (memo[startIndex] !== -1) {
      return memo[startIndex];
    }

    let totalWays = 0;
    for (let i = startIndex; i < s.length; i++) {
      const currentNum = s.slice(startIndex, i + 1);

      if (isValid(currentNum)) {
        totalWays += backtrack(i + 1);
      } else {
        break; // Break if we encounter an invalid decoding
      }
    }

    memo[startIndex] = totalWays;
    return totalWays;
  }

  function isValid(numStr: string): boolean {
    const num = Number(numStr);
    return num >= 1 && num <= 26;
  }

  return backtrack(0);
}
