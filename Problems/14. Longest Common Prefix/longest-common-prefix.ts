//Solution 1: 49ms 44.3 MB
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  strs.sort();

  const result = [];
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      result.push(strs[0][i]);
    } else {
      break; // Stop when characters differ
    }
  }

  return result.join("");
}
