//Solution 1: 62ms 54.14 MB
function appendCharacters(s: string, t: string): number {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      tPointer++;
    }

    sPointer++;
  }

  return t.length - tPointer;
}

//Solution 2: 46ms 52.95 MB
function appendCharacters(s: string, t: string): number {
  let tPointer = 0;

  for (let sPointer = 0; sPointer < s.length; sPointer++) {
    if (tPointer < t.length && s[sPointer] === t[tPointer]) {
      tPointer++;
    }
  }

  return t.length - tPointer;
}
