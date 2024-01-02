//Solution 1: 190ms 47.90 MB
function maximumLength(s: string): number {
  const subStringDict: { [key: string]: number } = {};
  let longestThriceLength = -1;

  for (let start = 0; start < s.length; start++) {
    let currentIndex = start;
    const currentChar = s[start];

    while (currentIndex < s.length && s[currentIndex] === currentChar) {
      const subString = s.substring(start, currentIndex + 1);
      subStringDict[subString] = (subStringDict[subString] || 0) + 1;

      if (subStringDict[subString] === 3) {
        longestThriceLength = Math.max(longestThriceLength, subString.length);
      }
      currentIndex++;
    }
  }

  return longestThriceLength;
}
