//Solution 1: 75ms 48.4 MB
function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = "";
  let tempLongestSubstring = "";

  for (let i = 0; i < s.length; i++) {
    const indexOfChar = tempLongestSubstring.indexOf(s[i]);
    if (indexOfChar !== -1) {
      if (tempLongestSubstring.length > longestSubstring.length) {
        longestSubstring = tempLongestSubstring;
      }
      tempLongestSubstring = tempLongestSubstring.substring(indexOfChar + 1);
    }

    tempLongestSubstring += s[i];
  }

  if (tempLongestSubstring.length > longestSubstring.length) {
    longestSubstring = tempLongestSubstring;
  }

  return longestSubstring.length;
}

//Solution 2: 68ms 48.9 MB
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;

  let longestSubstring = "";
  let tempLongestSubstring = "";

  for (let i = 0; i < s.length; i++) {
    const indexOfChar = tempLongestSubstring.indexOf(s[i]);
    if (indexOfChar !== -1) {
      if (tempLongestSubstring.length > longestSubstring.length) {
        longestSubstring = tempLongestSubstring;
      }
      tempLongestSubstring = tempLongestSubstring.substring(indexOfChar + 1);
    }

    tempLongestSubstring += s[i];
  }

  if (tempLongestSubstring.length > longestSubstring.length) {
    longestSubstring = tempLongestSubstring;
  }

  return longestSubstring.length;
}
