//Solution 1: 69ms 45.23 MB
function expandAroundCenter(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function longestPalindrome(s: string): string {
  if (!s) return s;

  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const maxLength = Math.max(len1, len2);

    if (maxLength > right - left) {
      left = i - Math.floor((maxLength - 1) / 2);
      right = i + Math.floor(maxLength / 2);
    }
  }

  return s.substring(left, right + 1);
}
