//Solution 1: 68ms 42.5 MB
function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").pop().length;
}

//Solution 2: 53ms 42.89 MB
function lengthOfLastWord(s: string): number {
  const trimmedString = s.trimEnd();
  const lastSpaceIndex = trimmedString.lastIndexOf(" ");

  return lastSpaceIndex === -1
    ? trimmedString.length
    : trimmedString.length - lastSpaceIndex - 1;
}

//Solution 2: 48ms 43.4 MB
function lengthOfLastWord(s: string): number {
  s = s.trimEnd();

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return s.length - i - 1;
    }
  }

  return s.length;
}
