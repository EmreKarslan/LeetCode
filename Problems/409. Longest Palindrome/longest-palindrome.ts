//Solution 1: 53ms 51.71 MB
function longestPalindrome(s: string): number {
  const freqMap: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
  }
  let length = 0;
  let hasOddCount = false;

  freqMap.forEach((value) => {
    if (value % 2 === 0) {
      length += value;
    } else {
      length += value - (hasOddCount ? 1 : 0);
      hasOddCount = true;
    }
  });

  return length;
}

//Solution 2: 53ms 51.60 MB
function longestPalindrome(s: string): number {
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) {
      charSet.delete(s[i]);
    } else {
      charSet.add(s[i]);
    }
  }

  if (charSet.size > 1) {
    return s.length - charSet.size + 1;
  }

  return s.length;
}
