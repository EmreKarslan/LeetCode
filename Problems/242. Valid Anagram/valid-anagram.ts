//Solution 1: 63ms 44.50 MB
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freqS = {};
  const freqT = {};

  for (let i = 0; i < s.length; i++) {
    freqS[s[i]] = (freqS[s[i]] ?? 0) + 1;
    freqT[t[i]] = (freqT[t[i]] ?? 0) + 1;
  }

  return Object.keys(freqS).every((key) => freqS[key] === freqT[key]);
}

//Solution 2: 58ms 44.6 MB
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] ?? 0) + 1;
    freq[t[i]] = (freq[t[i]] ?? 0) - 1;
  }

  return Object.values(freq).every((value) => value === 0);
}

//Solution 3: 55ms 44.57 MB
const positionInAlphabet = (char: string): number =>
  char.charCodeAt(0) - "a".charCodeAt(0);

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const freqArray = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freqArray[positionInAlphabet(s[i])] += 1;
    freqArray[positionInAlphabet(t[i])] -= 1;
  }

  return freqArray.every((value) => value === 0);
}

//Solution 3: 52ms 44.57 MB
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const freqArray = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freqArray[s[i].charCodeAt(0) - 97] += 1;
    freqArray[t[i].charCodeAt(0) - 97] -= 1;
  }

  return freqArray.every((value) => value === 0);
}