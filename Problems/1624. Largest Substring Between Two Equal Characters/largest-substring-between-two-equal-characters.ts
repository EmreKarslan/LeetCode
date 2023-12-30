//Solution 1: 106ms 42.80 MB
function maxLengthBetweenEqualCharacters(s: string): number {
  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        maxLength = Math.max(maxLength, j - i - 1);
      }
    }
  }

  return maxLength;
}

//Solution 2: 79ms 44.00 MB
function maxLengthBetweenEqualCharacters(s: string): number {
  const pos = {};
  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pos[char] !== undefined) {
      maxLength = Math.max(i - pos[char] - 1, maxLength);
    } else {
      pos[char] = i;
    }
  }

  return maxLength;
}
