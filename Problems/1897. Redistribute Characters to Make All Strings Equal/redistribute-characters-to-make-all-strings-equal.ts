//Solution 1: 69ms 44.54 MB
function makeEqual(words: string[]): boolean {
  const frequencies: { [char: string]: number } = {};

  for (const word of words) {
    for (const char of word) {
      frequencies[char] = (frequencies[char] || 0) + 1;
    }
  }

  for (const value of Object.values(frequencies)) {
    if (value % words.length !== 0) {
      return false;
    }
  }

  return true;
}

//Solution 2: 71ms 45.80 MB
function makeEqual(words: string[]): boolean {
  const charCountMap = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
  }

  const length = words.length;
  return Array.from(charCountMap.values()).every(
    (count) => count % length === 0
  );
}

//Solution 3: 66ms 45.03 MB
function makeEqual(words: string[]): boolean {
  const charFrequencies = words.reduce((frequencies, word) => {
    for (const char of word) {
      frequencies[char] = (frequencies[char] || 0) + 1;
    }
    return frequencies;
  }, {} as Record<string, number>);

  return Object.values(charFrequencies).every(
    (frequency) => frequency % words.length === 0
  );
}
